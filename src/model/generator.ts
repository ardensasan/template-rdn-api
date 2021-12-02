import setConnection from "../config/dbConfig";
const connection = setConnection();
export const createTable = () =>{
    return connection.promise("create table").then((data: any) => data);
}