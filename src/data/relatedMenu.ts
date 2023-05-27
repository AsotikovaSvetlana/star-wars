import { RelatedMenuItem } from '../types';

export const filmsRelated: RelatedMenuItem[] = [
  {
    id: 1,
    name: 'characters',
  },
  {
    id: 2,
    name: 'planets',
  },
  {
    id: 3,
    name: 'vehicles',
  },
  {
    id: 4,
    name: 'starships',
  },
  {
    id: 5,
    name: 'species',
  },
];

export const charactersRelated: RelatedMenuItem[] = [
  {
    id: 1,
    name: 'films',
  },
  {
    id: 2,
    name: 'species',
  },
  {
    id: 3,
    name: 'starships',
  },
  {
    id: 4,
    name: 'vehicles',
  },
];

export const planetsRelated: RelatedMenuItem[] = [
  {
    id: 1,
    name: 'residents',
  },
  {
    id: 2,
    name: 'films',
  },
];

export const speciesRelated: RelatedMenuItem[] = [
  {
    id: 1,
    name: 'characters',
  },
  {
    id: 2,
    name: 'films',
  },
];

export const starshipsRelated: RelatedMenuItem[] = [
  {
    id: 1,
    name: 'films',
  },
  {
    id: 2,
    name: 'pilots',
  },
];

export const vehiclesRelated: RelatedMenuItem[] = [
  {
    id: 1,
    name: 'pilots',
  },
  {
    id: 2,
    name: 'films',
  },
];
