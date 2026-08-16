import User from "../models/user.model.js";
import Product from "../models/product.model.js";

export const addToCart = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.cart.includes(id)) {
      return res.status(400).json({ message: "Product already in cart" });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (user._id.toString() === product.uploadedBy.toString()) {
      return res
        .status(400)
        .json({ message: "You cannot add your own product to cart" });
    }

    user.cart.push(id);

    await user.save();
    await user.populate("cart");

    return res.status(200).json(user.cart);
  } catch (error) {
    console.log("Error in addToCart controller : ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    user.cart.pull(id);

    await user.save();
    await user.populate("cart");

    return res.status(200).json(user.cart);
  } catch (error) {
    console.log("Error in removeFromCart controller : ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getCart = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.populate("cart");

    return res.status(200).json(user.cart);
  } catch (error) {
    console.log("Error in getCart controller : ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const clearCart = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.cart = [];

    await user.save();
    await user.populate("cart");

    return res.status(200).json({ cart: user.cart });
  } catch (error) {
    console.log("Error in clearCart controller : ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
