import pokes from "./data";
import { Express } from "express";

let favoritesStorage: string[] = ['Ivysaur'];

const favorites = {
  get(): string[] {
    return favoritesStorage;
  },
  set(name: string): { error: "CONFLICT" } | { error: null } {
    const fav = favorites.get();
    if (fav.includes(name)) {
      return { error: "CONFLICT" };
    }
    favoritesStorage.push(name);
    return { error: null };
  },
  remove(name: string): { error: "NO_FOUND" } | { error: null } {
    const fav = favorites.get();
    if (!fav.includes(name)) {
      return { error: "NO_FOUND" };
    }
    favoritesStorage = favoritesStorage.filter((n) => n !== name);
    return { error: null };
  },
};

const sleep = (t: number) => new Promise(r => setTimeout(r, t));

export const handlers = (app: Express) => {
  app.get("/all", async (req, res) => {
    await sleep(20);
    const pokeFavorites = favorites.get();

    const pokemonList = pokes.map((p) => ({
      ...p,
      favorite: pokeFavorites.includes(p.name),
    }));

    res.status(200).send(pokemonList);
  });

  app.post("/favorite/:name", async(req, res) => {
    await sleep(20);
    const newNameFav = req.params["name"] as string;
    const result = favorites.set(newNameFav);

    if (result.error === "CONFLICT") {
      return res.status(409).send();
    }

    return res.status(200).send();
  });

  app.delete("/favorite/:name", async (req, res) => {
    await sleep(700);
    const newNameFav = req.params["name"] as string;
    const result = favorites.remove(newNameFav);

    if (result.error === "NO_FOUND") {
      return res.status(404).send();
    }

    return res.status(200).send();
  });

  app.get("/favorite", async (req, res) => {
    await sleep(400);
    const pokeFavorites = favorites.get();

    const pokemonList = pokes
      .filter((p) => pokeFavorites.includes(p.name))
      .map((p) => ({
        ...p,
        favorite: true,
      }));

    res.status(200).send(pokemonList);
  });
};
