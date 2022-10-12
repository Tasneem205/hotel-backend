import { Router } from "express";
import getFunctions from "../services/room.services/get.service.js";
import addRoom from "../services/room.services/post.service.js";
import editRoom from "../services/room.services/put.service.js";
import deleteRoom from "../services/room.services/delete.service.js";

const roomRouter = new Router();
/* get all rooms, get all available rooms, get rooms with cost, post, put, delete */

roomRouter.get("/", getFunctions.getAllRooms);

roomRouter.get("/available", getFunctions.getAvailable);

roomRouter.get("/:cost", getFunctions.getByCost);

roomRouter.post("/", addRoom);

roomRouter.put("/:id", editRoom);

roomRouter.delete("/:id", deleteRoom);

export default roomRouter;
