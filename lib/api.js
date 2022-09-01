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

export async function postAPI(path, token, data) {
  try {
    const res = await axios({
      method: "post",
      url: `https://cms.etco.tk/${path}`,
      data: {
        data,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error };
  }
}

export async function putAPI(path, token, data) {
  try {
    const res = await axios({
      method: "put",
      url: `https://cms.etco.tk/${path}`,
      data: {
        data,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error };
  }
}
