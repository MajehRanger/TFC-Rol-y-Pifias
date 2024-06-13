import axios from "axios";
import { BASE_URL } from "../helpers/Constants";

class PlayerService{

    static async login(email, password){
        const data = {email: email, password: password};
        try{
            const response = await axios.post(`${BASE_URL}login`, data);
            return response.data;
        }catch(error){
            throw error;
        }
    }

    static async register(userData, token){
        try{
            const response = await axios.post(`${BASE_URL}register`, userData, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async getPlayerById(userId, token){
        try{
            const response = await axios.get(`${BASE_URL}api/players/get/${userId}`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }


    static async deleteUser(userId, token){
        try{
            const response = await axios.delete(`${BASE_URL}api/players/delete/${userId}`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }


    static async updateUser(userId, userData, token){
        try{
            const response = await axios.put(`${BASE_URL}api/players/update/${userId}`, userData,
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

}
export default PlayerService;