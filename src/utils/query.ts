import { dbConnect, resultArray } from "./mongodb";

export const getItems = async (collection: string, filter: any) => {
  const db = await dbConnect();
  const result = db.collection(collection).find(filter);
  return resultArray(result);
};

export const insertItem = async (collection: string, data: any) => {
  const db = await dbConnect();
  if (data instanceof Array) {
    db.collection(collection).insertMany(data, (err: any, res: any) => {
      if (err) throw err;
      return { count: 1 };
    });
  } else {
    db.collection(collection).insertOne(data, (err: any, res: any) => {
      if (err) throw err;
      return { count: res.insertedCount };
    });
  }
  return;
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
