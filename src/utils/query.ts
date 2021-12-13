import { rejects } from "assert";
import { dbConnect, resultArray } from "./mongodb";

export const getItems = async (collection: string, filter: any) => {
  const db = await dbConnect();
  let response = "SUCCESS";
  const result = await new Promise((resolve, reject) => {
    db.collection(collection)
      .find(filter)
      .toArray((err: any, result: any) => {
        if (err) {
          response = "ERROR";
          reject();
        }
        return resolve(result);
      });
  });
  return { type: response, result: result };
};

export const insertItem = async (collection: string, requestData: any) => {
  const db = await dbConnect();
  const { type, data } = requestData;
  let response = type;
  if (data instanceof Array) {
    db.collection(collection).insertMany(data, (err: any, res: any) => {
      if (err) return (response = "ERROR");
      return { count: 1 };
    });
  } else {
    db.collection(collection).insertOne(data, (err: any, res: any) => {
      if (err) return (response = "ERROR");
      return { count: res.insertedCount };
    });
  }
  return { type: response };
};

export const updateItem = async (collection: string, query: any, data: any) => {
  const db = await dbConnect();
  if (Object.keys(query).length === 0) {
    db.collection(collection).updateMany(
      query,
      { $set: data },
      (err: any, res: any) => {
        if (err) throw err;
        return { count: res.modifiedCount };
      }
    );
  } else {
    db.collection(collection).updateOne(
      query,
      { $set: data },
      (err: any, res: any) => {
        if (err) throw err;
        return { count: res.modifiedCount };
      }
    );
  }
};
