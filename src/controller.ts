import { insertItem, getList, updateItem, getItem, deleteItem } from "./model";

export const getListController = (endpoint: string) => {
  return getList(endpoint);
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
