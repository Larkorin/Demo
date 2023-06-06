// External Dependencies
import express, { type Request, type Response } from "express";
import { collections } from "../services/database.service";
import type User from "../models/user";

// Global Config
export const usersRouter = express.Router();
usersRouter.use(express.json());

// GET


// POST
usersRouter.post("/", async (req: Request, res: Response) => {
  try {
    const newUser = req.body as User;
    const result = await collections.users?.insertOne(newUser);

    result
      ? res.status(201).send(`Successfully created a new user with id ${result.insertedId}`)
      : res.status(500).send("Failed to create a new user.");
  } catch (error: any) {
    console.error(error);
    res.status(400).send(error.message);
  }
});

// PUT

// DELETE