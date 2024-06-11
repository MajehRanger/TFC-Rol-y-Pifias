import axios from "axios";

class SheetService {
    static BASE_URL = "http://localhost:9080/sheets"
/*
    static async allSheets(token){
        try{
            const response = await fetch(`${SheetService.BASE_URL}/getall`,
            {
                headers: {'Authorization': `Bearer ${token}`},  withCredentials: true
            }).then(res => res.json());
            return response;
        }catch(error){
            throw error;
        }
    }
    */
    static async allSheets(token){
        try{
            const response = await axios.get(`${SheetService.BASE_URL}/getall`,
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(error){
            throw error;
        }
    }
}
export default SheetService;