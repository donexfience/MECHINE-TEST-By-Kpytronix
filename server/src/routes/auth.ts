import express from "express";
import authMiddleware from "@/middleware/authMiddleware";
import AuthController from "@/controllers/authController";
import authMiddlewareForInterceptor from "@/middleware/authMIddlewareForInterceptor";

const router = express.Router();
const authController = new AuthController();

router.post("/signup", authController.signup.bind(authController));

router.post("/login", authController.login.bind(authController));

router.post("/refresh", authController.refreshToken.bind(authController));

router.post(
  "/logout",
  authMiddlewareForInterceptor,
  authController.logout.bind(authController)
);


export default router;
