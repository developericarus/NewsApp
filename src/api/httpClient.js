import axios from 'axios' 
import CONFIG from '../config/config.js';

//Create a Http Client using Axios. Further modifications in this layer can be done later like Authorization.

const baseUrl = CONFIG.baseUrl
const apiKey = CONFIG.apiKey
const sourceUrl = CONFIG.sourceUrl

const post = (url = '', data = '', config = {}) => {
  return axios.post(url, data, config)
}

const get = (url='', data='', config={}) => {
  config.params = data;
  config.method = "get";
  return axios.get(url,config)
}

const put = (url = '', data = '', config = {}) => {
  return axios.put(url, data, config)
}

//Cannot contain a delete method - Cause delete is a keyword.

const del = (url = '', config = {}) => {
  return axios.delete(url, config)
}

//Encapsulating in a JSON object

const HttpClient = {
  post,
  get,
  put,
  delete: del,
  baseUrl,
  apiKey,
  sourceUrl
}

export {HttpClient}