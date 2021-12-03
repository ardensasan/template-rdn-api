import setConnection from "../config/dbConfig";
const connection = setConnection();

export const getUsers = async () => {
  return connection.promise("select * from users").then((data: any) => data);
};

export const addUser = () => {
};

export const deleteUser = () => {
  connection.query("select * from users", function (err: any, result: any) {
    if (err) throw err;
  });
};
