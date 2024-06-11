import axios from "axios";
import { BASE_URL } from "../helpers/Constants";



class SheetService {
   

    static async allSheets(token){
        try{
            const response = await axios.get(`${BASE_URL}sheets/getall`,
            {
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(error){
            throw error;
        }
    }

    static async getSheet(token, sheetId){
        try{
            const response = await axios.get(`${BASE_URL}sheets/get/${sheetId}`,
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