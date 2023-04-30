import { ContentItemType } from '../components/ContentSection/types';
import { Entities } from '../types';

export const getContentTableData = (data: Entities): ContentItemType[] => {
  const exeptions = [
    'url',
    'created',
    'edited',
    'films',
    'homeworld',
    'species',
    'starships',
    'vehicles',
    'characters',
    'planets',
    'residents',
    'pilots',
    'people',
  ];

  const result = Object.entries(data)
    .filter((el) => !exeptions.includes(el[0]) && el[1] !== 'n/a')
    .map((item) => {
      const prop = item[0].replaceAll('_', ' ');
      const value = item[1];

      return {
        name: prop[0].toUpperCase() + prop.slice(1),
        value,
      };
    });

  return result;
};
