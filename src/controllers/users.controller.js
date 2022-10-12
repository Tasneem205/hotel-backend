import { Router } from "express";
import getUsers from "../services/users.services/get.service.js";
import addUser from "../services/users.services/post.service.js";
import editUser from "../services/users.services/put.service.js";
import deleteUser from "../services/users.services/delete.service.js";

const userRouter = new Router();

userRouter.get("/", getUsers);

userRouter.post("/", addUser);

userRouter.put("/:id", editUser);

userRouter.delete("/:id", deleteUser);

export default userRouter;
