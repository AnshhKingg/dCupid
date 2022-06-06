import axios from 'axios';
const axiosServ = token => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const instance = axios.create({
    baseURL:
      'http://ec2-3-110-117-121.ap-south-1.compute.amazonaws.com:5000/api/v1',
    timeout: 6000,
    headers: headers,
  });
  return instance;
};

export default axiosServ;
