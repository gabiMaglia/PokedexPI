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
    const response = await axios.post(`http://localhost:3001/poke`, {
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
    const response = await axios.get(`http://localhost:3001/poke`);
    return response;
  } catch ({ response }) {
    throw new Error(response.data.error);
  }
};
export const fetchAllPokemonbySeasonService = async (limit, offset ) => {
  try {

    const response = await axios.get(`http://localhost:3001/poke/season/?limit=${limit}&offset=${offset}`);
    return response;
  } catch ({ response }) {
    throw new Error(response.data.error);
  }
};
export const fetchAllPokemonTypeService = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3001/poke/get-types`
    );
    return response.data;
  } catch ({ response }) {
    throw new Error(response.data.error);
  }
};
