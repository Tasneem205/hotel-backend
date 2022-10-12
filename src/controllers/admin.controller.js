import { Router } from "express";
import getAdmins from "../services/admin.services/get.service.js";
import addAdmin from "../services/admin.services/post.service.js";
import editAdmin from "../services/admin.services/put.service.js";
import deleteAdmin from "../services/admin.services/delete.service.js"
import login from "../services/admin.services/login.service.js"

const adminRouter = new Router();

adminRouter.get("/", getAdmins);

adminRouter.post("/", addAdmin);

adminRouter.post("/login", login);

adminRouter.put("/:id", editAdmin);

adminRouter.delete("/:id", deleteAdmin);

export default adminRouter;
