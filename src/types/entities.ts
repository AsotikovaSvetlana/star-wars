import { StaticImageData } from "next/image";

export type Entities = {
  people: ICharacter;
  films: IFilm;
  planets: IPlanet;
  species: ISpecies;
  starships: IStarship;
  vehicles: IVehicle;
};

export type IEntitiesResponse<T> = {
  count: number;
  next: string;
  previous: null;
  results: T[];
};

export interface ICharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  url: string;
  id: number;
  image: StaticImageData | string;
  href: string;
}

export interface IFilm {
  name: string;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
  id: number;
  href: string;
  image: StaticImageData | string;
}

export interface IPlanet {
  climate: string;
  created: string;
  diameter: number;
  edited: string;
  films: string[];
  gravity: number;
  name: string;
  orbital_period: number;
  population: string;
  residents: string[];
  rotation_period: number;
  surface_water: number;
  terrain: string;
  url: string;
  id: number;
  image: StaticImageData | string;
  href: string;
}

export interface ISpecies {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
  id: number;
  image: StaticImageData | string;
  href: string;
}

export interface IStarship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
  id: number;
  image: StaticImageData | string;
  href: string;
}

export interface IVehicle {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
  id: number;
  image: StaticImageData | string;
  href: string;
}
