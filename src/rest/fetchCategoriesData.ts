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

export const fetchCategoriesData = async (
  page: string,
  pageNumber?: string
) => {
  try {
    switch (page) {
      case "people":
        const people = await StarWarsAPI.getEntitiesData<ICharacter>(
          page,
          pageNumber
        );
        const peoplePages = Math.ceil(+people.count / 10);
        const peopleCollection = convertFetchData<ICharacter>(
          people.results,
          page
        );
        return { pages: peoplePages, collection: peopleCollection };
      case "films":
        const films = await StarWarsAPI.getEntitiesData<IFilm>(
          page,
          pageNumber
        );
        const filmsPages = Math.ceil(+films.count / 10);
        const filmsCollection = convertFetchData<IFilm>(films.results, page);
        return { pages: filmsPages, collection: filmsCollection };
      case "planets":
        const planets = await StarWarsAPI.getEntitiesData<IPlanet>(
          page,
          pageNumber
        );
        const planetsPages = Math.ceil(+planets.count / 10);
        const planetsCollection = convertFetchData<IPlanet>(
          planets.results,
          page
        );
        return { pages: planetsPages, collection: planetsCollection };
      case "species":
        const species = await StarWarsAPI.getEntitiesData<ISpecies>(
          page,
          pageNumber
        );
        const speciesPages = Math.ceil(+species.count / 10);
        const speciesCollection = convertFetchData<ISpecies>(
          species.results,
          page
        );
        return { pages: speciesPages, collection: speciesCollection };
      case "starships":
        const starships = await StarWarsAPI.getEntitiesData<IStarship>(
          page,
          pageNumber
        );
        const starshipsPages = Math.ceil(+starships.count / 10);
        const starshipsCollection = convertFetchData<IStarship>(
          starships.results,
          page
        );
        return { pages: starshipsPages, collection: starshipsCollection };
      case "vehicles":
        const vehicles = await StarWarsAPI.getEntitiesData<IVehicle>(
          page,
          pageNumber
        );
        const vehiclesPages = Math.ceil(+vehicles.count / 10);
        const vehiclesCollection = convertFetchData<IVehicle>(
          vehicles.results,
          page
        );
        return { pages: vehiclesPages, collection: vehiclesCollection };
      default:
        return null;
    }
  } catch (err) {
    return null;
  }
};
