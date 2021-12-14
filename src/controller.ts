import { insertItem, getItems, updateItem, getItem, deleteItem, createEndpoint } from "./model";

export const createEndpointController = (endpoint:string) =>{
  return createEndpoint(endpoint)
}

export const getItemsController = (endpoint: string) => {
  return getItems(endpoint);
};

export const getItemController = (endpoint: string, id: string) => {
  return getItem(endpoint, id);
};

export const insertController = (endpoint: string, data: any) => {
  return insertItem(endpoint, data);
};

export const updateController = (endpoint: string, data: any) => {
  return updateItem(endpoint, data);
};
export const deleteController = (endpoint: string, data: any) => {
  return deleteItem(endpoint, data);
};
