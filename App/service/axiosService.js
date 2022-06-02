import axios from 'axios';

// const header = {
//   accept: 'application/json',
//   'content-type': 'application/json',
// };

const loginHeader = {
  accept: 'application/json',
  'content-type': 'application/x-www-form-urlencoded',
};

class httpService {
  constructor() {
    this.setInterceptor();
  }
  setInterceptor = () => {
    // let baseURL = store.getState().baseURL.baseURL;

    // let baseURL = "http://rebeldev.in:9003/api";
    let baseURL = '';
    let service = axios.create({
      baseURL: baseURL,
      timeout: 1000,
    });
    service.interceptors.response.use(
      function (response) {
        return response;
      },
      async error => {
        let originalRequest = error.config;
        console.log('Error', error, originalRequest.url);
        return error?.response?.data;
      },
    );
    this.service = service;
  };

  /**
   *
   * @param path : url path without token
   * @param dispatch : for dispatching action from this function
   * @returns response or error
   */
  async get(path, token) {
    if (token) {
      this.service.defaults.headers.common.Authorization = 'Bearer ' + token;
    }

    let _path = this.getPath(path);
    try {
      let res = await this.service.get(_path);
      return res;
    } catch (err) {
      return err;
    }
  }

  /**d
   *
   * @param path : url path without token
   * @returns response or error
   */
  getPath(path) {
    let params = `${path.includes('?') ? '&' : '?'}`;
    return `${path}${params}`;
  }

  /**
   *
   * @param path : url path without token
   * @param payload : object you want to send
   * @param dispatch : for dispatching action from this function
   * @returns  response or error
   */
  async post(path, payload, token) {
    if (token) {
      this.service.defaults.headers.common.Authorization = 'Bearer ' + token;
    }
    let _path = this.getPath(path);

    try {
      let res = await this.service.post(_path, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('rezz', res);
      return res;
    } catch (err) {
      console.log('Post Error', err);
      return err;
    }
  }

  async upload(path, payload, token) {
    this.service.defaults.headers.common.Authorization = 'Bearer ' + token;

    let _path = this.getPath(path);
    console.log('post abc', _path, payload, loginHeader);
    try {
      let res = await this.service.post(_path, payload);
      return res;
    } catch (err) {
      return err;
    }
  }

  /**
   *
   * @param path path
   * @param payload payload
   * @param dispatch dispatch
   * @returns response
   */
  put(path, payload, token) {
    this.service.defaults.headers.common.Authorization = 'Bearer ' + token;

    let _path = this.getPath(path);
    return this.service
      .request({
        method: 'PUT',
        url: _path,
        data: payload,
      })
      .then(response => this.successResponse(response))
      .catch(error => this.errorResponse(error));
  }

  /**
   *
   * @param path url
   * @param dispatch dispatch
   * @returns response
   */
  delete(path, dispatch, token) {
    this.service.defaults.headers.common.Authorization = 'Bearer ' + token;
    let _path = this.getPath(path);
    return this.service
      .request({
        method: 'DELETE',
        url: _path,
      })
      .then(response => this.successResponse(response))
      .catch(error => this.errorResponse(error));
  }

  successResponse(response) {
    return response;
  }

  errorResponse(error) {
    return error;
  }
}

export default new httpService();
