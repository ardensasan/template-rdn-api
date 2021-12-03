import setConnection from "../config/dbConfig";
const connection = setConnection();
export const createTable = (name: string) => {
  // console.log('%c 🌰 name: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', name);
  return connection
    .promise(
      "CREATE TABLE Persons (PersonID int,LastName varchar(255),FirstName varchar(255),Address varchar(255),City varchar(255))"
    )
    .then((data: any) => data);
};
