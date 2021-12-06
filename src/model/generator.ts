import setConnection from "../config/dbConfig";
const connection = setConnection();
export const createTable = (name: string) => {
  return connection
    .promise(
      `CREATE TABLE ${name} (PersonID int,LastName varchar(255),FirstName varchar(255),Address varchar(255),City varchar(255))`
    )
    .then((data: any) => data);
};
