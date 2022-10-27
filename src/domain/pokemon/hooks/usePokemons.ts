import { useEffect, useState } from "react";
import {
  addPokemonToFavorites,
  fetchAllPokemons,
  removePokemonFromFavorites,
} from "../api";
import { Poke } from "../models/Poke";
import { FilterType } from "../models/FilterType";

export const usePokemons = (filterBy: FilterType) => {
  const [pokeList, setPokeList] = useState<Poke[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isPokeListChanged, setPokeListChanged] = useState<boolean>(false);

  useEffect(() => {
    fetchAndSetPokeList();
  }, [isPokeListChanged]);
  console.log({ filterBy });

  const fetchAndSetPokeList = async () => {
    setLoading(true);
    const resp = await fetchAllPokemons();
    setTimeout(() => {
      setPokeList(resp.data);
      setLoading(false);
    }, 2000);
  };

  const addToFavorite = async (name: string) => {
    setPokeListChanged(false);
    const result = await addPokemonToFavorites(name);
    if (result.status === 200) {
      await fetchAllPokemons();
      return setPokeListChanged(true);
    }
  };

  const removeFromFavorite = async (poke: Poke) => {
    setPokeListChanged(false);
    const result = await removePokemonFromFavorites(poke);
    if (result.status === 200) {
      await fetchAllPokemons();
      return setPokeListChanged(true);
    }
  };

  return {
    loading,
    pokeList,
    addToFavorite,
    removeFromFavorite,
  };
};
