import { PrismaClient } from "@prisma/client";
import responses from "../../helper/responses.js";

const prisma = new PrismaClient();

const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    if (!users) return responses.badRequest(res, "No user was found");
    return responses.success(res, "All users", users);
  } catch (error) {
    console.log(error);
  }
};

export default getUsers;
