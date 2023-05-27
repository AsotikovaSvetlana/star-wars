import {
  ICharacter,
  IFilm,
  IPlanet,
  ISpecies,
  IStarship,
  IVehicle,
} from './entities';

export type RelatedMenuItem = {
  id: number;
  name: keyof RelatedData;
};

export type RelatedData = {
  characters?: ICharacter[];
  planets?: IPlanet[];
  species?: ISpecies[];
  starships?: IStarship[];
  vehicles?: IVehicle[];
  films?: IFilm[];
  residents?: ICharacter[];
  pilots?: ICharacter[];
};

export type RelatedLinks = {
  characters?: string[];
  planets?: string[];
  species?: string[];
  starships?: string[];
  vehicles?: string[];
  films?: string[];
  residents?: string[];
  pilots?: string[];
};
