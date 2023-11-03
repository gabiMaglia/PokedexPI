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
            data
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
export const fetchPokemonByIdService = async (id) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/poke${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
export const fetchPokemonByNameService = async (name) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/poke/${name}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
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
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/poke/get-types`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
