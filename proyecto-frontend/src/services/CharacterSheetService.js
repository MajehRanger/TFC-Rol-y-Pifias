import axios from "axios";

const REST_API_BASE_URL = "/sheets";

export const listSheets = () => axios.get(REST_API_BASE_URL);

