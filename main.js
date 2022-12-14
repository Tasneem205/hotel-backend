import Express from "express";
import router from "./src/controllers/index.controller.js";
import dotenv from "dotenv";
import errorHandler from "./src/middleWares/errorHandler.js";
import morgan from "morgan";

//.format('YYYY-MM-DD').utc()

const app = Express();

dotenv.config();

app.use(Express.json());

app.use(morgan("dev"));

app.use("/hotel", router);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("Listening on port 4000");
});
