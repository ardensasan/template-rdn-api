import express, { Request, Response } from "express";
import {
  insertController,
  deleteController,
  getItemsController,
  updateController,
  getItemController,
  createEndpointController,
} from "./controller";
const router = express.Router();

router.post("/create/api/:endpoint", async (req: Request, res: Response) => {
  const result = await createEndpointController(req.params.endpoint);
  return res.send(result);
});

router.get("/api/:endpoint/", async (req: Request, res: Response) => {
  const result = await getItemsController(req.params.endpoint);
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
