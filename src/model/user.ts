import { getItems, insertItem, updateItem } from "../utils/query";

export const getUsers = async () => {
  return getItems("users",{})
};

export const addUser = async (data: any) => {
  return insertItem("users", data);
};

export const updateUser = async (query: any, data: any,type:string) => {
  return updateItem("users", query, data);
};
