import { Router } from "express";
import {
  createOrder,
  getPlacedOrders,
  getReceivedOrders,
  updateOrderStatus,
} from "../controllers/order.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", protectRoute, createOrder);
router.get("/placed", protectRoute, getPlacedOrders);
router.get("/received", protectRoute, getReceivedOrders);
router.put("/:id", protectRoute, updateOrderStatus);

export default router;
