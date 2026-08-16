import User from "../models/user.model.js";
import Order from "../models/order.model.js";

export const createOrder = async (req, res) => {
  const userId = req.user.id;
  const deliveryAddress = req.body.deliveryAddress;
  const phoneNumber = req.body.phoneNumber;
  const paymentMethod = req.body.paymentMethod;
  const orders = req.body.items;

  if (!deliveryAddress || !phoneNumber || !paymentMethod || !orders) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    for (const order of orders) {
      const newOrder = new Order({
        sender: userId,
        receiver: order.uploadedBy._id,
        product: order._id,
        totalAmount: order.price * order.currQuantity,
        quantity: order.currQuantity,
        status: "pending",
        deliveryAddress,
        phoneNumber,
        paymentMethod,
      });
      await newOrder.save();
      await User.findByIdAndUpdate(order.uploadedBy._id, {
        $push: { orderReceived: newOrder._id },
      });
      await User.findByIdAndUpdate(userId, {
        $push: { orderPlaced: newOrder._id },
      });
    }

    const userOrders = await Order.find({ sender: userId })
      .populate("product")
      .populate("receiver", "name email")
      .populate("sender", "name email");

    return res.status(201).json(userOrders);
  } catch (error) {
    console.log("Error in createOrder controller : ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getPlacedOrders = async (req, res) => {
  const userId = req.user.id;

  const userOrders = await Order.find({ sender: userId })
    .populate("product")
    .populate("receiver", "name email")
    .populate("sender", "name email");

  return res.status(200).json(userOrders);
};

export const getReceivedOrders = async (req, res) => {
  const userId = req.user.id;

  try {
    const userOrders = await Order.find({ receiver: userId })
      .populate("product")
      .populate("sender", "name email")
      .populate("receiver", "name email");

    return res.status(200).json(userOrders);
  } catch (error) {
    console.log("Error in getReceivedOrders controller : ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateOrderStatus = async (req, res) => {
  const { status } = req.body;
  const orderId = req.params.id;

  // Validate status input
  const validStatuses = ['pending', 'confirmed', 'packed', 'delivered', 'cancelled'];
  if (!status || !validStatuses.includes(status)) {
    return res.status(400).json({ message: "Invalid status. Must be one of: " + validStatuses.join(', ') });
  }

  try {
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Authorization check: Only sender or receiver can update order status
    const userId = req.user.id;
    if (order.sender.toString() !== userId && order.receiver.toString() !== userId) {
      return res.status(403).json({ message: "You are not authorized to update this order" });
    }

    // Business logic: Only receiver (seller) can confirm/ship orders, sender (buyer) can cancel
    if (['confirmed', 'packed'].includes(status) && order.receiver.toString() !== userId) {
      return res.status(403).json({ message: "Only the seller can confirm or ship orders" });
    }

    if (status === 'cancelled' && order.sender.toString() !== userId && order.status !== 'pending') {
      return res.status(403).json({ message: "Only the buyer can cancel pending orders" });
    }

    order.status = status;
    await order.save();

    return res.status(200).json(order);
  } catch (error) {
    console.error("Error in updateOrderStatus controller:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
