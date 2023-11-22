import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL


export const editPokemonService = async (id, data) => {
  try {
    const response = axios;
    return response.data;
  } catch ({ response }) {
    return { error: response.data.error };
  }
};

export const postPokemonService = async (data) => {
  try {
    const response = await axios.post(`${apiUrl}/poke`, {
      data,
    });
    return response.data;
  } catch ({ response }) {
    return { error: response.data.error };
  }
};

export const fetchPokemonService = async (data) => {
  try {
    if (isNaN(data)) {
      const response = await axios.get(
        `${apiUrl}/poke/name?name=${data.toLowerCase()}`
      );
      return response.data;
    } else {
      const response = await axios.get(`${apiUrl}/poke/${data}`);
      return response.data;
    }
  } catch ({ response }) {
    return { error: response.data.error };
    
  }
};
export const fetchAllPokemonService = async () => {
  try {
    const response = await axios.get(`${apiUrl}/poke`);
    return response;
  } catch ({ response }) {
    return { error: response.data.error };
  }
};
export const fetchAllPokemonbySeasonService = async (limit, offset) => {
  try {
    const response = await axios.get(
      `${apiUrl}/poke/season/?limit=${limit}&offset=${offset}`
    );
    return response;
  } catch ({ response }) {
    return { error: response.data.error };
  }
};
export const fetchAllPokemonTypeService = async () => {
  try {
    const response = await axios.get(`${apiUrl}/poke/get-types`);
    return response.data;
  } catch ({ response }) {
    return { error: response };
  }
};

export const deletePokemonByIdService = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/poke/${id}`);
    return response.data;
  } catch ({ response }) {

    return { error: response.data.error };
  }
};  
