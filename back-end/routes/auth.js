import express from "express";
import {
  loginUser,
  registerUser,
  checkSession,
  logoutUser,
} from "../controllers/Auth/AuthController.js";
import cookieParser from "cookie-parser";

const router = express.Router();
router.use(cookieParser());

router.post("/login", loginUser);
router.delete("/logout", logoutUser);
router.post("/signup", registerUser);
router.get("/check-session", checkSession);

export default router;
