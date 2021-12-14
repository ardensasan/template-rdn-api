import express, { Request, Response } from "express";
import {
  insertController,
  deleteController,
  getListController,
  updateController,
  getItemController,
} from "./controller";
const router = express.Router();

router.get("/api/:endpoint/", async (req: Request, res: Response) => {
  const result = await getListController(req.params.endpoint);
  return res.send(result);
});

router.get("/api/:endpoint/:id", async (req: Request, res: Response) => {
  const result = await getItemController(req.params.endpoint, req.params.id);
  return res.send(result);
});

router.post("/api/:endpoint/", async (req: Request, res: Response) => {
  const result = await insertController(req.params.endpoint, req.body);
  return res.send(result);
});

router.put("/api/:endpoint/", async (req: Request, res: Response) => {
  const result = await updateController(req.params.endpoint, req.body);
  return res.send(result);
});

router.delete("/api/:endpoint/", async (req: Request, res: Response) => {
  const result = await deleteController(req.params.endpoint, req.body);
  return res.send(result);
});

export default router;
