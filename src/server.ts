import express, { Application, Request, Response } from "express";
import user from "./rotues/user";
import cors from "cors";
import generator from "./rotues/generator";
const app: Application = express();
app.set("port", process.env.PORT || 3001);
app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Hello World!" });
});
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(user);
app.use(generator);
app.listen(app.get("port"), () => {
  console.log(`Server on http://localhost:${app.get("port")}/`);
});
