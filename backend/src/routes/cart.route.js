import { Router } from "express";
import {
  addToCart,
  removeFromCart,
  getCart,
  clearCart,
} from "../controllers/cart.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/:id", protectRoute, addToCart);
router.delete("/:id", protectRoute, removeFromCart);
router.get("/", protectRoute, getCart);
router.delete("/", protectRoute, clearCart);

export default router;
