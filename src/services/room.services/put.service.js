import { PrismaClient } from "@prisma/client";
import responses from "../../helper/responses.js";

const prisma = new PrismaClient();

const editRoom = async (req, res) => {
  try {
    const roomId = req.params;
    const data = req.body;
    const room = await prisma.room.update({
      where: { id: roomId },
      data: { data },
    });
    return responses.success(res, "Room edited successfully", room);
  } catch (error) {
    console.log(error);
  }
};

export default editRoom;
