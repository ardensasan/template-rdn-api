import express, { Application, Request, Response } from "express";
import user from "./api/user";
import generator from "./api/generator";
const app: Application = express();
app.set("port", process.env.PORT || 3000);
app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Hello world!" });
});
app.use(express.json())
app.use(user);
app.use(generator)
app.listen(app.get("port"), () => {
  console.log(`Server on http://localhost:${app.get("port")}/`);
});
