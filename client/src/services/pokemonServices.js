import axios from "axios";

export const editPokemonService = async (id, data) => {
  try {
    const response = axios;
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
export const postPokemonService = async (data) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/poke`, {
      data,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchPokemonService = async (data) => {
  try {
    if (isNaN(data)) {
      const response = await axios.get(
        `http://localhost:3001/poke/name?name=${data}`
      );

      return response.data;
    } else {
      const response = await axios.get(`http://localhost:3001/poke/${data}`);

      return response.data;
    }
  } catch ({ response }) {
    throw new Error(response.data.error);
  }
};
export const fetchAllPokemonService = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/poke`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
export const fetchAllPokemonTypeService = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/poke/get-types`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
