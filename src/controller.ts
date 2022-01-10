import { Request, Response } from "express";
import {
  insertItem,
  getItems,
  updateItem,
  getItem,
  deleteItem,
  createEndpoint,
} from "./model";

export const createEndpointController = async (req: Request, res: Response) => {
  const result = await createEndpoint(req.params.endpoint);
  return res.send(result);
};

export const getItemsController = async (req: Request, res: Response) => {
  const result = await getItems(req.params.endpoint);
  return res.send(result);
};

export const getItemController = async (req: Request, res: Response) => {
  const result = await getItem(req.params.endpoint, req.params.id);
  return res.send(result);
};

export const insertController = async (req: Request, res: Response) => {
  const result = await insertItem(req.params.endpoint, req.body);
  return res.send(result);
};

export const updateController = async (req: Request, res: Response) => {
  const result = await updateItem(req.params.endpoint, req.body);
  return res.send(result);
};
export const deleteController = async (req: Request, res: Response) => {
  const result = await deleteItem(req.params.endpoint, req.body);
  return res.send(result);
};
