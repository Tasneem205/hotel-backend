import { Router } from "express";
import roomRouter from "./rooms.controller.js";
import userRouter from "./users.controller.js";
import receptionRouter from "./reception.controller.js";
import adminRouter from "./admin.controller.js";

const router = new Router();

router.use("/rooms", roomRouter);

router.use("/users", userRouter);

router.use("/reciption", receptionRouter);

router.use("/admin", adminRouter);

export default router;
