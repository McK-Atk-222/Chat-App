import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";
const router = express.Router();

router.get("/get/conversations", protectRoute, getUsersForSidebar);
router.get("/get/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;