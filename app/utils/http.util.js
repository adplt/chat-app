import {SERVER_URL, endpoints} from '../config/api.config';
import axios from 'axios';
import {
  getStatusValidatorInterceptor,
  mockInterceptor,
  addDefaultPayloadInterceptor,
  getNoNetWorkInterceptor,
} from './interceptor.util';
import isEmpty from 'lodash/isEmpty';

const baseConfig = {
  baseURL: SERVER_URL,
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  params: {},
  timeout: 60000,
  withCredentials: true,
  validateStatus: () => true,
  cancelToken: null,
};

export const get = (endpoint, options = {}, dynamicPath) => {
  const dynamic = !isEmpty(dynamicPath) ? dynamicPath : '';
  const config = {
    ...baseConfig,
    ...options,
    method: 'get',
    endpoint,
    url: endpoints[endpoint] + dynamic,
  };
  return axios(config);
};

export const post = (endpoint, data = {}, options = {}, dynamicPath) => {
  const dynamic = !isEmpty(dynamicPath) ? dynamicPath : '';
  const config = {
    ...baseConfig,
    ...options,
    method: 'post',
    endpoint,
    url: endpoints[endpoint] + dynamic,
    data
  };
  return axios(config);
};

// Registering interceptors
export const initializeHTTPInterceptors = (store) => {
  // REQUEST INTERCEPTORS
  axios.interceptors.request.use(mockInterceptor, Promise.reject);
  axios.interceptors.request.use(getNoNetWorkInterceptor(store), Promise.reject);
  axios.interceptors.request.use(addDefaultPayloadInterceptor(store), Promise.reject);
  axios.interceptors.response.use(getStatusValidatorInterceptor(store), Promise.reject);
};
