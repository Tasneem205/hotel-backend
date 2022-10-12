import { PrismaClient } from "@prisma/client";
import responses from "../../helper/responses.js";

const prisma = new PrismaClient();

const addUser = async (req, res) => {
  try {
    const data = req.body; //validate
    const user = await prisma.user.create({ data });
    return responses.success(res, "User added successfully", user);
  } catch (error) {
    console.log(error);
  }
};

export default addUser;
