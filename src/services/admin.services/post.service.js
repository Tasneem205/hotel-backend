import { PrismaClient } from "@prisma/client";
import responses from "../../helper/responses.js";

const prisma = new PrismaClient();

const addAdmin = async (req, res) => {
  try {
    const data = req.body; //validate
    const admin = await prisma.employee.create({ data });
    return responses.success(res, "Admin added successfully", admin);
  } catch (error) {
    console.log(error);
  }
};

export default addAdmin;
