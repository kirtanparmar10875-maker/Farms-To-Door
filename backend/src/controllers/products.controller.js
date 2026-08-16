import User from "../models/user.model.js";
import Product from "../models/product.model.js";
import Order from "../models/order.model.js";
import cloudinary from "../lib/cloudinary.lib.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    console.log("Error in getProducts controller : ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "uploadedBy",
      "name address email"
    );
    return res.status(200).json(product);
  } catch (error) {
    console.log("Error in getProductById controller : ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, quantity, description, category, image } = req.body;

    if (!name || !price || !quantity || !description || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate input data
    if (price < 0) {
      return res.status(400).json({ message: "Price cannot be negative" });
    }
    if (quantity < 0) {
      return res.status(400).json({ message: "Quantity cannot be negative" });
    }
    if (price > 1000000) {
      return res.status(400).json({ message: "Price seems unrealistic" });
    }
    if (name.length > 100) {
      return res.status(400).json({ message: "Product name too long" });
    }
    if (description.length > 1000) {
      return res.status(400).json({ message: "Description too long" });
    }

    const user = await User.findById(req.user.id);

    if (!user || !user.role || user.role !== "seller") {
      return res.status(403).json({ message: "You are not authorized" });
    }

    let imageUrl;
    if (image) {
      imageUrl = await cloudinary.uploader.upload(image);
    }

    const product = await Product.create({
      name,
      price,
      quantity,
      description,
      category,
      image: imageUrl?.secure_url,
      uploadedBy: req.user.id,
    });

    user.productsUploaded.push(product._id);
    await user.save();
    return res.status(201).json(product);
  } catch (error) {
    console.error("Error in createProduct controller:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { name, price, quantity, description, category, image } = req.body;

    if (!name || !price || !quantity || !description || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate input data
    if (price < 0) {
      return res.status(400).json({ message: "Price cannot be negative" });
    }
    if (quantity < 0) {
      return res.status(400).json({ message: "Quantity cannot be negative" });
    }
    if (price > 1000000) {
      return res.status(400).json({ message: "Price seems unrealistic" });
    }

    const user = await User.findById(req.user.id);

    if (!user || !user.role || user.role !== "seller") {
      return res.status(403).json({ message: "You are not authorized" });
    }

    // Check if product exists and verify ownership
    const existingProduct = await Product.findById(req.params.id);
    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (existingProduct.uploadedBy.toString() !== req.user.id) {
      return res.status(403).json({ message: "You can only update your own products" });
    }

    let imageUrl;
    if (image) {
      imageUrl = await cloudinary.uploader.upload(image);
    }

    const updateData = {
      name,
      price,
      quantity,
      description,
      category,
    };

    if (imageUrl?.secure_url) {
      updateData.image = imageUrl.secure_url;
    }

    const product = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });

    return res.status(200).json(product);
  } catch (error) {
    console.error("Error in updateProduct controller:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    const user = await User.findById(req.user.id);

    if (!user || !user.role || user.role !== "seller") {
      return res.status(404).json({ message: "You are not authorized" });
    }

    const product = await Product.findById(req.params.id);

    if (!product || product.uploadedBy.toString() !== req.user.id) {
      return res.status(404).json({
        message:
          "Product not found or you are not authorized to delete this product",
      });
    }

    user.productsUploaded.pull(product._id);

    await Order.deleteMany({ product: req.params.id });

    await user.save();
    await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log("Error in deleteProduct controller : ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getProductsByUploader = async (req, res) => {
  try {
    const products = await Product.find({ uploadedBy: req.user.id });
    return res.status(200).json(products);
  } catch (error) {
    console.log("Error in getProductsByUploader controller : ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
