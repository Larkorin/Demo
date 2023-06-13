// File that runs on a request.
import express from "express";
import { connectToDatabase } from "./services/database.service";
import { usersRouter } from "./express-routes/users.router";
import cors from 'cors';


const app = express();
app.use(cors());
const port = 10255;

connectToDatabase()
    .then(() => {
        app.use("/users", usersRouter);

        app.listen(port, "db-demo.mongo.cosmos.azure.com", () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });

