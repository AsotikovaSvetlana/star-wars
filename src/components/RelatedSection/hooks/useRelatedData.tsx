import { useEffect, useState } from 'react';
import {
  Entities,
  Pages,
  isCharacter,
  isPlanet,
  isSpecies,
  isStarship,
  isVehicle,
} from '../../../types';
import { RelatedLinks, RelatedData, isIFilm } from '../../../types';
import { StarWarsAPI } from '../../../api/StarWarsAPI';

export default function useRelatedData(data: Entities, page: Pages) {
  const [cards, setCards] = useState<RelatedData | null>(null);
  const [loader, setLoader] = useState(false);

  const getAllRelated = async (
    data: string[] | undefined,
    category: string,
  ) => {
    if (!data) return;

    const fetchRelated = (): Promise<PromiseSettledResult<Entities>[]> => {
      const promises = [];

      for (let i = 0; i < data.length; i++) {
        promises.push(StarWarsAPI.getRelatedData<Entities>(data[i]));
      }
      return Promise.allSettled(promises);
    };

    fetchRelated()
      .then((results) => {
        const res: Entities[] = [];

        results.forEach((item) => {
          if (item.status === 'fulfilled') {
            res.push(item.value);
          }
        });
        setCards((prevState) => ({ ...prevState, [category]: res }));
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  useEffect(() => {
    let links: RelatedLinks = {};
    setCards(null);
    setLoader(true);

    switch (page) {
      case 'films':
        if (isIFilm(data)) {
          const params = {
            characters: data.characters,
            species: data.species,
            starships: data.starships,
            vehicles: data.vehicles,
            planets: data.planets,
          };
          links = params;
        }
        break;
      case 'people':
        if (isCharacter(data)) {
          const params = {
            films: data.films,
            species: data.species,
            starships: data.starships,
            vehicles: data.vehicles,
          };
          links = params;
        }
        break;
      case 'planets':
        if (isPlanet(data)) {
          const params = {
            residents: data.residents,
            films: data.films,
          };
          links = params;
        }
        break;
      case 'species':
        if (isSpecies(data)) {
          const params = {
            characters: data.people,
            films: data.films,
          };
          links = params;
        }
        break;
      case 'starships':
        if (isStarship(data)) {
          const params = {
            films: data.films,
            pilots: data.pilots,
          };
          links = params;
        }
        break;
      case 'vehicles':
        if (isVehicle(data)) {
          const params = {
            films: data.films,
            pilots: data.pilots,
          };
          links = params;
        }
        break;
      default:
        setCards(null);
        break;
    }

    for (let key in links) {
      getAllRelated(links[key as keyof RelatedLinks], key);
    }
  }, [data]);

  return { cards, loader };
}
