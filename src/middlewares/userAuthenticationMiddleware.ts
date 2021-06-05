import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { secretKey } from "../config/authConfig";
import AppError from "../errors/AppError";
import UserRepository from "../models/repositories/UserRepository";

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

async function userAuthenticationMiddleware(req: Request, res: Response, next: NextFunction): Promise<any> {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).json({ error: "JWT token is missing" });
  }

  const token = authorization?.split(" ")?.[1];

  try {
    const decoded = verify(token, secretKey);

    const { sub } = decoded as TokenPayload;

    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne(sub, { relations: ["avatar"] });

    if (user?.id) {
      req.user = user;

      return next();
    } else {
      throw new Error();
    }
  } catch {
    throw new AppError("Invalid JWT token", { statusCod: 400 });
  }
}

export default userAuthenticationMiddleware;
