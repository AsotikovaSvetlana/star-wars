import { StarWarsAPI } from "@/src/api/StarWarsAPI";
import {
  ICharacter,
  IFilm,
  IPlanet,
  ISpecies,
  IStarship,
  IVehicle,
} from "../types";
import { convertFetchData } from "./utils/convertFetchData";

export const fetchCategoriesData = async (page: string) => {
  try {
    switch (page) {
      case "people":
        const people = await StarWarsAPI.getEntitiesData<ICharacter>(page);
        return convertFetchData<ICharacter>(people, page);
      case "films":
        const films = await StarWarsAPI.getEntitiesData<IFilm>(page);
        return convertFetchData<IFilm>(films, page);
      case "planets":
        const planets = await StarWarsAPI.getEntitiesData<IPlanet>(page);
        return convertFetchData<IPlanet>(planets, page);
      case "species":
        const species = await StarWarsAPI.getEntitiesData<ISpecies>(page);
        return convertFetchData<ISpecies>(species, page);
      case "starships":
        const starships = await StarWarsAPI.getEntitiesData<IStarship>(page);
        return convertFetchData<IStarship>(starships, page);
      case "vehicles":
        const vehicles = await StarWarsAPI.getEntitiesData<IVehicle>(page);
        return convertFetchData<IVehicle>(vehicles, page);
      default:
        return null;
    }
  } catch (err) {
    return null;
  }
};
