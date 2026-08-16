import { Router } from "express";
import {
  updateUser,
  deleteUser,
  subscribeUser,
} from "../controllers/user.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = Router();

router.put("/", protectRoute, updateUser);
router.delete("/", protectRoute, deleteUser);
router.put("/subscribe", protectRoute, subscribeUser);

export default router;
