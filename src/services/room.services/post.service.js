import { PrismaClient } from "@prisma/client";
import responses from "../../helper/responses.js";

const prisma = new PrismaClient();

const addRoom = async (req, res) => {
  try {
    const data = req.body;
    await prisma.room.create({ data });
    return responses.success(res, "Room added successfully", data);
  } catch (error) {
    console.log(error);
  }
};

export default addRoom;
