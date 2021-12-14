import { ObjectId } from "mongodb";
import { dbConnect } from "./mongodb";
export const getItems = async (endpoint: string) => {
  const db = await dbConnect();
  let response = "SUCCESS";
  const result = await new Promise((resolve, reject) => {
    db.collection(endpoint)
      .find({})
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

export const insertItem = async (endpoint: string, requestData: any) => {
  const db = await dbConnect();
  const { type, data } = requestData;
  let response = type;
  if (data instanceof Array) {
    db.collection(endpoint).insertMany(data, (err: any, res: any) => {
      if (err) return (response = "ERROR");
      return { count: 1 };
    });
  } else {
    db.collection(endpoint).insertOne(data, (err: any, res: any) => {
      if (err) return (response = "ERROR");
      return { count: res.insertedCount };
    });
  }
  return { type: response };
};

export const getItem = async (collection: string, id: any) => {
  const db = await dbConnect();
  let response = "SUCCESS";
  const result = await new Promise((resolve, reject) => {
    db.collection(collection).findOne(
      { _id: new ObjectId(id) },
      (err: any, result: any) => {
        if (err) {
          response = "ERROR";
          reject();
        }
        return resolve(result);
      }
    );
  });
  return { type: response, result: result };
};

export const updateItem = async (endpoint: string, data: any) => {
  const db = await dbConnect();
  const { _id, ...rest } = data.data;
  const response = new Promise((resolve, reject) => {
    db.collection(endpoint).updateOne(
      { _id: new ObjectId(_id) },
      { $set: rest },
      (err: any, res: any) => {
        if (err) reject("ERROR");
        resolve("SUCCESS");
      }
    );
  });
  return response;
};

export const deleteItem = async (collection: string, id: any) => {
  const db = await dbConnect();
  const response = new Promise((resolve, reject) => {
    db.collection(collection).deleteOne(
      { _id: new ObjectId(id) },
      (err: any, res: any) => {
        if (err) {
          reject("ERROR");
        }
        resolve("SUCCESS");
      }
    );
  });
  return response;
};
