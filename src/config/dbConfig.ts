import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();
let connection: any = null;
const { DB_HOST, DB_PORT = "3306", DB_USER, DB_PASSWORD, DB } = process.env;
export default () => {
  if(!connection){
    connection = mysql.createConnection({
      host: DB_HOST,
      port: parseInt(DB_PORT),
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB,
    });
  }

  connection.connect((err:Error)=> {
    if (err) throw err;
  });
  connection.promise = (sql: any) => {
    return new Promise((resolve, reject) => {
      connection.query(sql, (err: any, result: any) => {
        if (err) reject(new Error());
        else resolve(result);
      });
    });
  };

  return connection;
};
