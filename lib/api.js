import axios from "axios";
import { getUser, getToken } from "../lib/store";

const API_BASE_URL = "https://cms.etco.tk";

const buildAPIurl = (path, base = API_BASE_URL) => new URL(path, base).href;

export const login = (loginToken) =>
  axios.get(buildAPIurl(`/api/passwordless/login?loginToken=${loginToken}`));

export const sendEmail = async (email) =>
  axios.post(buildAPIurl("/api/passwordless/send-link"), { email });

const apiCall = async (path, data, method) => {
  try {
    const token = getToken();
    const res = await axios({
      method,
      url: buildAPIurl(path),
      ...(data && { data: { data } }),
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });

    return res.data;
  } catch (error) {
    return { error };
  }
};

const apiCall1 = async (path, data, method) => {
  try {
    const token = getToken();
    const res = await axios({
      method,
      url: buildAPIurl(path),
      ...(data && { data }),
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });

    return res.data;
  } catch (error) {
    return { error };
  }
};

export const postAPI = async (path, data) => apiCall(path, data, "POST");

export const putAPI = async (path, data) => apiCall(path, data, "PUT");

export const putAPI1 = async (path, data) => apiCall1(path, data, "PUT");

export const fetchAPI = async (path) => apiCall(path, null, "GET");

export const fetchCurrentUser = async () => {
  const user = getUser();
  return fetchAPI(`/api/users/${user.id}?populate=deep`);
};
