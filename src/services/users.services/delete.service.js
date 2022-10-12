import { PrismaClient } from "@prisma/client";
import responses from "../../helper/responses.js";

const prisma = new PrismaClient();

const deleteUser = async (req, res) => {
  try {
    const userId = req.params;
    const data = req.body;
    const user = await prisma.user.update({
      where: { id: userId },
      data: { data },
    });
    return responses.success(res, "User deleted successfully", user);
  } catch (error) {
    console.log(error);
  }
};

export default deleteUser;
