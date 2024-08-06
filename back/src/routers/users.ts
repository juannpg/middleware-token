import express from "express";
import { PrismaClient } from "@prisma/client";
import verifyToken from "../middleware/verifyToken";

const router = express.Router();
const prisma = new PrismaClient();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        username,
        password,
      },
    });

    res.status(200).json({ message: "User created successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user" });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: username,
        password: password,
      },
    });

    if (!user) {
      res.status(401).json({ message: "Invalid username or password" });
    } else {
      res.status(200).json({ token: user.token, message: "Login successful", user });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error logging in" });
  }
});

export default router;