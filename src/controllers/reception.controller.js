import { Router } from "express";

const receptionRouter = new Router();

/* get reserved room , add a reserviation (make sure this is a user first anf if not add to users)
    , edit the reservation -extend the reservation-, delete a reservation, check out and free the room */

receptionRouter.get("/", () => {});

receptionRouter.post("/", () => {});

receptionRouter.put("/:id", () => {});

receptionRouter.delete("/:id", () => {});

export default receptionRouter;
