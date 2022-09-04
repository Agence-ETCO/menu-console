import axios from 'axios';

const API_BASE_URL = 'https://cms.etco.tk';

const buildAPIurl = (path, base = API_BASE_URL) => new URL(path, base).href

export const login = (loginToken) =>
  axios.get(
    buildAPIurl(
      `/api/passwordless/login?loginToken=${loginToken}`,
    )
  );

export const sendEmail = async (email) =>
  axios.post(buildAPIurl('/api/passwordless/send-link'), { email });

const apiCall = async (path, token, data, method) => {
  try {
    const res = await axios({
      method,
      url: buildAPIurl(path),
      ...(data && { data: { data } }),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error };
  }
}

export const postAPI = async (path, token, data) => apiCall(path, token, data, 'POST');

export const putAPI = async (path, token, data) => apiCall(path, token, data, 'PUT');

export const fetchAPI = async (path, token) => apiCall(path, token, null, 'GET');
