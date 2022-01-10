import express from "express";
import {
  insertController,
  deleteController,
  getItemsController,
  updateController,
  getItemController,
  createEndpointController,
} from "./controller";
const router = express.Router();

router.post("/create/api/:endpoint", createEndpointController);

router.get("/api/:endpoint/", getItemsController);

router.get("/api/:endpoint/:id", getItemController);

router.post("/api/:endpoint/", insertController);

router.put("/api/:endpoint/", updateController);

router.delete("/api/:endpoint/", deleteController);

export default router;
