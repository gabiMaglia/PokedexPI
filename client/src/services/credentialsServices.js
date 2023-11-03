import axios from "axios";

export const loginService = async (data) => {
  try {
    const { username, password } = data;
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
      user_handle: username,
      user_password: password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
export const singInService = async (data) => {
  try {
    const { first_name, last_name, user_email, user_handle, user_password } =
      data;
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/users`, {
      first_name,
      last_name,
      user_email,
      user_handle,
      user_password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
