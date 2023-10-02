import express from "express";
import cors from "cors";
import { router } from "./routes";

const app = express();

app.use(cors());
app.use("/api", router);

app.listen(3200, () => {
  console.log("Listening on port 3200");
});
