import setConnection from "../config/dbConfig";
import { dbConnect, resultArray } from "../utils/mongodb";
import { insertItem, updateItem } from "../utils/query";
const connection = setConnection();

export const getUsers = async () => {
  const db = await dbConnect();
  const result = db.collection("users").find({});
  return resultArray(result);
};

export const addUser = async (data: any) => {
  return insertItem(await dbConnect(), "users", data);
};

export const updateUser = async (query: any, data: any) => {
  return updateItem(await dbConnect(), "users", query, data);
};
