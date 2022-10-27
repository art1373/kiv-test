import { Button } from "@mantine/core";
import { useState } from "react";
import { usePokemons } from "../hooks";
import { Poke } from "../models/Poke";
import { FilterType } from "../models/FilterType";
import { PokeCard } from "./PokeCard";

export function PokeList() {
  const [filterBy, setFilterBy] = useState(FilterType.ALL);
  const { loading, addToFavorite, removeFromFavorite, pokeList } =
    usePokemons(filterBy);

  const shouldAddOrRemove = (j: Poke) => {
    if (!j.favorite) {
      addToFavorite(j.name);
    } else {
      removeFromFavorite(j);
    }
  };

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

      {pokeList.map((j) => (
        <PokeCard
          isLoading={loading}
          key={j.name}
          {...j}
          onAddToFavorite={() => shouldAddOrRemove(j)}
        />
      ))}
    </>
  );
}
