const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://template:template@template.jzp0h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
let promise: any = null;
export const dbConnect = () => {
  if (promise) return promise;
  promise = new Promise((resolve, reject) => {
    const conn = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    conn
      .connect()
      .then(() => {
        return resolve(conn.db("template"));
      })
      .catch((err: any) => {
        reject(err);
      });
  });
  return promise;
};

export const resultArray = (collection: any) => {
  return new Promise((resolve, reject) => {
    collection.toArray((err: any, result: any) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
};
