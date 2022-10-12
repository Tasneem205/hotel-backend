import { PrismaClient } from "@prisma/client";
import responses from "../../helper/responses.js";

const prisma = new PrismaClient();

const deleteAdmin = async (req, res) => {
  try {
    const adminId = req.params;
    const data = req.body;
    const admin = await prisma.employee.update({ where: { id: adminId }, data: { data } });
    return responses.success(res, "Admin deleted successfully", admin);
  } catch (error) {
    console.log(error);
  }
};

export default deleteAdmin;
