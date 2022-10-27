import axios from "axios";
import { handleApiError } from "../../../utils/apiErrorHandler";
import { Poke } from "../models/Poke";

export const fetchAllPokemons = async (): Promise<any> => {
  try {
    const response = await axios.get("/all");
    return {
      data: response.data,
      status: 200,
      errorMessage: "",
    };
  } catch (error) {
    return handleApiError(error);
  }
};

export const addPokemonToFavorites = async (name: string) => {
  try {
    const response = await axios.post(`/favorite/${name}`, {
      method: "post",
    });
    return {
      data: response.data,
      status: 200,
      errorMessage: "",
    };
  } catch (error) {
    return handleApiError(error);
  }
};

export const removePokemonFromFavorites = async (poke: Poke) => {
  try {
    const response = await axios.delete(`/favorite/${poke.name}`);
    return {
      data: response.data,
      status: 200,
      errorMessage: "",
    };
  } catch (error) {
    return handleApiError(error);
  }
};
