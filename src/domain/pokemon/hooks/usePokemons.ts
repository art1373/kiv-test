import { useEffect, useState, useMemo } from "react";
import {
  addPokemonToFavorites,
  fetchAllPokemons,
  removePokemonFromFavorites,
} from "../api";
import { Poke } from "../models/Poke";

export const usePokemons = () => {
  const [pokeList, setPokeList] = useState<Poke[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isPokeListChanged, setPokeListChanged] = useState<boolean>(false);

  useEffect(() => {
    fetchAndSetPokeList();
  }, [isPokeListChanged]);

  const fetchAndSetPokeList = async () => {
    setLoading(true);
    const resp = await fetchAllPokemons();
    if (resp.status === 200) {
      setPokeList(resp?.data ?? []);
      setTimeout(() => {
        setLoading(false);
      }, 800);
    }
  };

  const addToFavorite = async (name: string) => {
    setPokeListChanged(false);
    const result = await addPokemonToFavorites(name);
    if (result.status === 200) {
      return setPokeListChanged(true);
    }
  };

  const removeFromFavorite = async (poke: Poke) => {
    setPokeListChanged(false);
    const result = await removePokemonFromFavorites(poke);
    if (result.status === 200) {
      return setPokeListChanged(true);
    }
  };

  const memoizedPokemons = useMemo(() => pokeList, [pokeList]);

  return {
    loading,
    pokeList: memoizedPokemons,
    addToFavorite,
    removeFromFavorite,
  };
};
