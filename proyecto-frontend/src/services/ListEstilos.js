import axios from "axios";

const REST_API_BASE_URL = "http://localhost:9001/estilos/get/1";

export const listEstilos = () => axios.get(REST_API_BASE_URL);