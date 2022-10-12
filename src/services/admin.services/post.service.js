import { PrismaClient } from "@prisma/client";
import responses from "../../helper/responses.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const addAdmin = async (req, res) => {
  try {
    const { data } = req.body; //validate
    const { name, phoneNumber, email, password } = data;
    const emailExists = prisma.employee.findUnique({ where: { email: email } });
    if (emailExists) return responses.badRequest(res, "Email already exist ");
    const hashed = bcrypt.hashSync(password, process.env.SALT);
    const admin = await prisma.employee.create({
      name,
      phoneNumber,
      email,
      password: hashed,
    });
    return responses.success(res, "Admin added successfully", admin);
  } catch (error) {
    console.log(error);
    return responses.badRequest(
      res,
      "Something was wrong while adding the admin"
    );
  }
};

export default addAdmin;
