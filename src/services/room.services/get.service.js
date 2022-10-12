import { PrismaClient } from "@prisma/client";
import responses from "../../helper/responses.js";

const prisma = new PrismaClient();

const getAllRooms = async (req, res) => {
  try {
    const rooms = await prisma.room.findMany();
    if (!rooms) return responses.badRequest(res, "Couldn't find any room");
    return responses.success(res, "All rooms", rooms);
  } catch (error) {
    console.log(error);
  }
};

const getAvailable = async (req, res) => {
  try {
    const rooms = await prisma.findMany({ where: { status: AVAILABLE } });
    if (!rooms)
      return responses.badRequest(res, "Couldn't find any available room");
    return responses.success(res, "All Available rooms", rooms);
  } catch (error) {
    console.log(error);
  }
};

const getByCost = async (req, res) => {
  try {
    const rooms = await prisma.room.findMany({
      where: { cost: { lt: req.params } },
    });
    if (!rooms) return responses.badRequest(res, "Couldn't find any available room");
    return responses.success(res, "Rooms found", rooms);
  } catch (error) {
    console.log(error);
  }
};

const getFunctions = { getAllRooms, getAvailable, getByCost };

export default getFunctions;
