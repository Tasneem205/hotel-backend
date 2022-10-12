import { PrismaClient } from "@prisma/client";
import responses from "../../helper/responses.js";

const prisma = new PrismaClient();

const addUser = async (req, res) => {
  try {
    const data = req.body; //validate
    const { name, phoneNumber, email } = data;
    const emailExists = await prisma.user.findUnique({
      where: { email: email },
    });
    if (emailExists) return responses.badRequest(res, "Email already exist");
    const user = await prisma.user.create({ name, phoneNumber, email });
    return responses.success(res, "User added successfully", user);
  } catch (error) {
    console.log(error);
  }
};

export default addUser;
