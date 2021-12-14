import { rejects } from "assert";
import { ObjectId } from "mongodb";
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

export const getItem = async (collection: string, filter: any) => {
  const db = await dbConnect();
  let response = "SUCCESS";
  const result = await new Promise((resolve, reject) => {
    db.collection(collection).findOne(filter, (err: any, result: any) => {
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

export const updateItem = async (collection: string, data: any) => {
  const db = await dbConnect();
  const { _id, ...rest } = data.data;
  let response = "SUCCESS";
  db.collection(collection).updateOne(
    { _id: new ObjectId(_id) },
    { $set: rest },
    (err: any, res: any) => {
      if (err) return (response = "ERROR");
      return;
    }
  );
  return response;
};

export const deleteItem = async (collection:string,id:any) =>{
  const db = await dbConnect();
  let response = "SUCCESS";
  db.collection(collection).deleteOne({_id: new ObjectId(id)},
    (err: any, res: any) => {
      if (err) return (response = "ERROR");
      return;
    }
  );
  return response;
};