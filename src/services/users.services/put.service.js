import { PrismaClient } from "@prisma/client";
import responses from "../../helper/responses.js";

const prisma = new PrismaClient();

const editUser = async (req, res) => {
  try {
    const userId = req.params;
    const data = req.body;
    const user = await prisma.user.update({
      where: { id: userId },
      data: { data },
    });
    return responses.success(res, "User edited successfully", user);
  } catch (error) {
    console.log(error);
  }
};

export default editUser;
