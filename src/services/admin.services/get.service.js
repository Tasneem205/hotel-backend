import { PrismaClient } from "@prisma/client";
import responses from "../../helper/responses.js";

const prisma = new PrismaClient();

const getAdmins = async (req, res) => {
  try {
    const admins = await prisma.employee.findMany();
    if (!admins) return responses.badRequest(res, "No admin was found");
    return responses.success(res, "All admins", admins);
  } catch (error) {
    console.log(error);
  }
};

export default getAdmins;
