import { useEffect, useState } from "react";
import { PokeCard } from "./PokeCard";

interface Poke {
  image: string;
  name: string;
  info: string;
  favorite: boolean;
}

export function PokeList() {
  const [pokeList, setPokeList] = useState<Poke[]>([]);

  useEffect(() => {
    fetch("/all")
      .then((result) => result.json())
      .then((l) => setPokeList(l));
  }, []);

  const addToFavorite = async (name: string) => {
    const result = await fetch(`/favorite/${name}`, {
      method: "post",
    });
    if (!result.ok) {
      throw new Error("No!");
    }
    fetch("/all")
      .then((result) => result.json())
      .then((l) => setPokeList(l));
  };

  const removeFromFavorite = (poke: Poke) => {
    fetch(`/favorite/${poke.name}`, {
      method: "delete",
    }).then(() => {
      return fetch("/all")
        .then((result) => result.json())
        .then((l) => setPokeList(l));
    });
  };

  return (
    <>
      {pokeList.map((j) => (
        <PokeCard
          key={j.name}
          {...j}
          onAddToFavorite={() => {
            if (!j.favorite) {
              addToFavorite(j.name);
            } else {
              removeFromFavorite(j);
            }
          }}
        />
      ))}
    </>
  );
}
