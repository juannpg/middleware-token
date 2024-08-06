import express from "express";
import verifyToken from "../middleware/verifyToken";

const router = express.Router();
router.get('/test', verifyToken, async (req, res) => {
  res.status(200).json({ message: 'Hello world' });
});

export default router;