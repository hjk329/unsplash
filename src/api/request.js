import axios from 'axios';

import { API_BASE_URL, CLIENT_ID } from '../constants/common';

export const RequestConstant = {
  GET: 'GET',
  POST: 'POST',
}

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
})

export const request = (method, url, data) => {
  try {
    const config = {
      method,
      url,
    }

    if (method === RequestConstant.GET) {
      config.params = {
        ...data,
        client_id: CLIENT_ID,
      }
    } else {
      config.body = data;
    }

    return axiosInstance(config)
  } catch (e) {
    console.log('e', e)
    return e
  }
}
