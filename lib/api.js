import axios from 'axios';

const API_BASE_URL = 'https://rsh-cms-strapi-dev-h6h2d.ondigitalocean.app';

export const login = (loginToken) => {
  return axios.get(`${API_BASE_URL}/api/passwordless/login?loginToken=${loginToken}`)
}

export const sendEmail = async (email) => {
  return axios.post(`${API_BASE_URL}/api/passwordless/send-link`, { email });
}
