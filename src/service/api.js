// npm i axios for api
// npm i json-server

// npm run json-server
import axios from  'axios';

const API_URL="http://localhost:3002/users";

export const addUser = async (data) => {
    try{
         return await axios.post(API_URL, data);
    }
    catch (error){
        console.log('Error while calling adduser api',error.message);

    }
}

export const getUsers = async () =>{
    try{
        return await axios.get(API_URL);
    }
    catch(error){
        console.log("Error while callimg getUsers api",error.message);
    }
}

export const getUser = async (data) =>{
    try{
        return await axios.get(`${API_URL}/${data}`);
    }
    catch(error){
        console.log("Error while callimg getUser  api",error.message);
    }
}

export const editUser = async(data,id) =>{
    try{
        return await axios.put(`${API_URL}/${id}`,data);
    }
    catch(error){
        console.log("erroe while calling edituser api",error.message);
    }
}

export const deleteUser= async(id) =>{
    try{ //asynchronious request return promise
        return await axios.delete(`${API_URL}/${id}`);
    }
    catch(erroe){
        console.log("error while calling delete api" ,erroe.message);
    }
}