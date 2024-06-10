import axios from "axios";

class PlayerService{
    static BASE_URL = "http://localhost:9080"

    static async login(email, password){
        const data = {email: email, password: password};
        try{
            const response = await axios.post(`${PlayerService.BASE_URL}/login`, data);
            console.log(response.data);
            return response.data;
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
            const response = await axios.get(`${PlayerService.BASE_URL}/api/players/get/${userId}`, 
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
            const response = await axios.get(`${PlayerService.BASE_URL}/api/players/get-profile`, 
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
            const response = await axios.delete(`${UserService.BASE_URL}/api/players/delete/${userId}`, 
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
            const response = await axios.put(`${UserService.BASE_URL}/api/players/update/${userId}`, userData,
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