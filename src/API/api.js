import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export const requestAxios = (method, section, id, payload) => {
  if (method === 'get') {
    return axios.get(`${baseUrl}/${section}`);
  }
  if (method === 'post') {
    return axios.post(`${baseUrl}/${section}`, payload);
  }
  if (method === 'delete') {
    return axios.delete(`${baseUrl}/${section}/${id}`);
  }
  if (method === 'put') {
    return axios.put(`${baseUrl}/${section}/${id}`, payload);
  }
  return alert('get true metchod');
};
