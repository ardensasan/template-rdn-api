import setConnection from "../config/dbConfig";
const connection = setConnection();
export const createTable = (name:string) =>{
    console.log('%c 🌰 name: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', name);
    // return connection.promise("create table").then((data: any) => data);
}