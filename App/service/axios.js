import axios from 'axios';
import {ip} from '../Components/ipAddress';
const axiosServ = token => {
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `${token}`;
  }

  const instance = axios.create({
    baseURL: `${ip}/api/v1`,
    headers: headers,
  });
  return instance;
};

export default axiosServ;
