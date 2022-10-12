import { PrismaClient } from "@prisma/client";
import responses from "../../helper/responses.js";

const prisma = new PrismaClient();

const deleteRoom = async (req, res) => {
  try {
    const roomId = req.params;
    await prisma.room.delte({ where: { id: roomId } });
    return responses.success(res, "Room deleted successfully", room);
  } catch (error) {
    console.log(error);
  }
};

export default deleteRoom;
