import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Error: no token provided' });
  }
  
  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(400).json({ message: 'Error: token not found' });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        token: token as string,
      },
      select: {
        id: true,
        username: true,
      },
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    res.status(200).json({ user, message: 'User found via token' });

    next();
  } catch (error) {
    res.status(500).json({ message: 'Error: ', error });
  }
};

export default verifyToken;