import axios from "axios";

const API_BASE_URL = "https://rsh-cms-strapi-dev-h6h2d.ondigitalocean.app";

export const login = (loginToken) => {
  return axios.get(
    `${API_BASE_URL}/api/passwordless/login?loginToken=${loginToken}`
  );
};

export const sendEmail = async (email) => {
  return axios.post(`${API_BASE_URL}/api/passwordless/send-link`, { email });
};

export const getToken = async () => {
  /*   const url = global.window && window.location.href; */
  const url =
    "https://menu-console.vercel.app/login/?loginToken=Gvlv6uvyODURhiE0zDC4";
  const loginToken = url.split("?loginToken=")[1];
  const response = await login(loginToken);
  return response;
};

export async function fetchAPI(path, token) {
  try {
    const res = await axios.get(`${API_BASE_URL}${path}`, {
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });

    return res.data;
  } catch (error) {
    return { error };
  }
}
