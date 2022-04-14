import axios from "axios";

const apiInstance = axios.create({
 baseURL: 'https://quotesapivsk.herokuapp.com/'
});

export default apiInstance;