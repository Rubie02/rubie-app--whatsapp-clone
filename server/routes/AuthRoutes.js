import { Router } from "express";
import { checkUser, generateToken, getAllUsers, onBoardUser } from "../controllers/AuthController.js";

const router = Router();

router.post("/check-user", checkUser);
router.post("/onboard-user", onBoardUser);
router.get("/get-contacts", getAllUsers);
router.get("/generate-token/:usserId", generateToken);

export default router;