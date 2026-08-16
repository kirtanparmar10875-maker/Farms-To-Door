import User from "../models/user.model.js";
import Product from "../models/product.model.js";
import Order from "../models/order.model.js";
import cloudinary from "../lib/cloudinary.lib.js";

export const updateUser = async (req, res) => {
  try {
    const { name, email, phone, address, profilePicture, role } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.role === "seller" && role && role !== "seller") {
      return res
        .status(403)
        .json({ message: "You cannot change role from seller" });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;
    user.address = address || user.address;
    user.role = role || user.role;

    if (profilePicture) {
      const result = await cloudinary.uploader.upload(profilePicture);

      user.profilePicture = result.secure_url;
    }

    await user.save();

    await user.populate("cart");
    await user.populate("productsUploaded");
    await user.populate("orderPlaced");
    await user.populate("orderReceived");

    return res.status(200).json(user);
  } catch (error) {
    console.log("Error in updateUser controller : ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.user.id);

    await Product.deleteMany({ uploadedBy: req.user.id });
    await Order.deleteMany({ sender: req.user.id });
    await Order.deleteMany({ receiver: req.user.id });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log("Error in deleteUser controller : ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const subscribeUser = async (req, res) => {
  try {
    const subscription = req.body.subscription;

    if (
      !subscription ||
      !["free", "professional", "enterprise"].includes(subscription)
    ) {
      return res.status(400).json({ message: "Subscription type is required" });
    }

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.subscription = subscription;
    await user.save();

    return res.status(200).json({
      message: "Subscription status updated",
      isSubscribed: user.isSubscribed,
    });
  } catch (error) {
    console.log("Error in subscribeUser controller: ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
