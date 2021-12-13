import { ObjectId } from "mongodb";
import { getItem, getItems, insertItem, updateItem } from "../utils/query";

export const getUsers = async () => {
  return await getItems("users",{})
};

export const getUserDetails = async (id:string) =>{
  return getItem("users", { _id: new ObjectId(id)})
}

export const addUser = async (data: any) => {
  return insertItem("users", data);
};

export const updateUser = async (data: any) => {
  return updateItem("users",data)
};
