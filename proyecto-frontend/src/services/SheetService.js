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

    static async updateSheet(token, sheetId, sheetData) {
        try {
            const response = await axios.put(`${BASE_URL}sheets/update/${sheetId}`, sheetData, {
                headers: { Authorization: `Bearer ${token}` }
            })
        return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async getAllSpells(token) {
        try {
            const response = await axios.get(`${BASE_URL}spell/getall`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }



}

export default SheetService;