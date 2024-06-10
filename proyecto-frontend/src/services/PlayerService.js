import axios from "axios";

class PlayerService{
    static BASE_URL = "http://localhost:9080"

    static async login(email, password){
        try{
            const response = await axios.post(`${PlayerService.BASE_URL}/login`)

        }catch(error){
            throw error;
        }
    }

    static async register(userData, token){
        try{
            const response = await axios.post(`${PlayerService.BASE_URL}/register`, userData, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async getUserById(userId, token){
        try{
            const response = await axios.get(`${PlayerService.BASE_URL}//api/players/get/${userId}`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async getYourProfile(token){
        try{
            const response = await axios.get(`${PlayerService.BASE_URL}/adminuser/get-profile`, 
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    //Validacion de autentificación
    static logout(){
        localStorage.removeItem('token')
    }

    static isAuthenticated(){
        const token = localStorage.getItem('token')
        return !!token
    }
}