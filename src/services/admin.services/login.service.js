import { PrismaClient } from "@prisma/client";
import responses from "../../helper/responses.js";

const prisma = new PrismaClient();

const login = async (req, res) => {
    try {
        const data = req.body; //validate later
        const {email, password} = data;
        const emailExists = await prisma.employee.findUnique({where: {email: email}});
        if(!emailExists) return responses.badRequest(res, "This email doesn't exist");
        
    } catch (error) {
        console.log(error);
        return responses.badRequest("Something was wrong while signing in");
    }
};

export default login;