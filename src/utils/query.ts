export const insertItem = (db: any, collection: string, data: any) => {
  if (data instanceof Array) {
    db.collection(collection).insertMany(data, (err: any, res: any) => {
      if (err) throw err;
      return { count: 1 };
    });
  } else {
    db.collection("users").insertOne(data, (err: any, res: any) => {
      if (err) throw err;
      return { count: res.insertedCount };
    });
  }
  return;
};

export const updateItem = (
  db: any,
  collection: string,
  query: any,
  data: any
) => {
  if (data instanceof Array) {
    db.collection(collection).updateMany(query, { $set: data }, (err: any, res: any) => {
      if (err) throw err;
      return { count: res.modifiedCount };
    });
  } else {
    db.collection(collection).updateOne(query, { $set: data }, (err: any, res: any) => {
      if (err) throw err;
      return { count: res.modifiedCount };
    });
  }
};
