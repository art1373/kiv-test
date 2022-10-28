import { useCallback, useId, useState } from "react";
import { Button } from "@mantine/core";
import { usePokemons } from "../hooks";
import { Poke } from "../models/Poke";
import { FilterType } from "../models/FilterType";
import { PokeCard } from "./PokeCard";

export function PokeList() {
  const id = useId();
  const [filterBy, setFilterBy] = useState(FilterType.ALL);
  const { loading, addToFavorite, removeFromFavorite, pokeList } =
    usePokemons();

  const shouldAddOrRemove = useCallback((j: Poke) => {
    if (!j.favorite) {
      addToFavorite(j.name);
    } else {
      removeFromFavorite(j);
    }
  }, []);

  return (
    <>
      <Button
        variant="light"
        color={"red"}
        fullWidth
        onClick={() => {
          if (filterBy === FilterType.ALL) {
            return setFilterBy(FilterType.FAVORITES);
          }
          return setFilterBy(FilterType.ALL);
        }}
      >
        {filterBy === FilterType.ALL ? "Filter by Favorites" : "Show all"}
      </Button>

      {pokeList.length >= 1 &&
        pokeList
          .filter((p) =>
            filterBy === FilterType.FAVORITES ? !!p.favorite : !!p
          )
          .map((j) => (
            <PokeCard
              key={id}
              isLoading={loading}
              {...j}
              onAddToFavorite={() => shouldAddOrRemove(j)}
            />
          ))}
    </>
  );
}
