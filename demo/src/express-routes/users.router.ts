// External Dependencies
import express, { type Request, type Response } from "express";
import { collections } from "../services/database.service";
import type User from "../models/user";
import { ObjectId } from "mongodb";

// Global Config
export const usersRouter = express.Router();
usersRouter.use(express.json());

// GET ALL

usersRouter.get("/", async (_req: Request, res: Response) => {
  try {
     const users = (await collections.users?.find({}).toArray()) as unknown as User[];

      res.status(200).send(users);
  } catch (error:any) {
      res.status(500).send(error.message);
  }
});

// GET 
usersRouter.post("/login", async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const result = await collections.users?.findOne({ username: username, password: password });

    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send("Usuario no encontrado");
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).send(error.message);
  }
});


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