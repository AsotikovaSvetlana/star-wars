import { StaticImageData } from 'next/image';
import { PosterType } from '../types';
import DefaultPoster from '@/src/assets/images/home/default.jpeg';
import FilmsPoster from '@/src/assets/images/home/films.jpg';
import CharactersPoster from '@/src/assets/images/home/characters.jpg';
import PlanetsPoster from '@/src/assets/images/home/planets.png';
import SpeciesPoster from '@/src/assets/images/home/species.jpg';
import StarshipsPoster from '@/src/assets/images/home/starships.jpg';
import VehiclesPoster from '@/src/assets/images/home/vehicles.jpg';

export const getPagePoster = (
  type: PosterType | undefined,
): StaticImageData => {
  switch (type) {
    case 'characters':
    case 'residents':
    case 'people':
    case 'pilots':
      return CharactersPoster;
    case 'planets':
      return PlanetsPoster;
    case 'species':
      return SpeciesPoster;
    case 'starships':
      return StarshipsPoster;
    case 'vehicles':
      return VehiclesPoster;
    case 'films':
      return FilmsPoster;
    default:
      return DefaultPoster;
  }
};
