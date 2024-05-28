import axios from "axios";

const REST_API_BASE_URL = "http://localhost:9001/sheets/getall";

export const listSheets = () => axios.get(REST_API_BASE_URL);

