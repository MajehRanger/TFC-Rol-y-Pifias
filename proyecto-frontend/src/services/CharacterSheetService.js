import axios from "axios";

const REST_API_BASE_URL = "http://localhost:9001/sheets/get/1";

export const listSheets = () => axios.get(REST_API_BASE_URL);

