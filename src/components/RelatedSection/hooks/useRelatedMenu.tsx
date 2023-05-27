import { useCallback, useEffect, useState } from 'react';
import { Pages } from '../../../types';
import {
  charactersRelated,
  filmsRelated,
  planetsRelated,
  speciesRelated,
  starshipsRelated,
  vehiclesRelated,
} from '../../../data/relatedMenu';
import { RelatedMenuItem } from '../../../types';

export default function useRelatedMenu(page: Pages) {
  const [menu, setMenu] = useState<RelatedMenuItem[]>([]);
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTab = useCallback(
    (id: number): void => {
      setActiveTab(id);
    },
    [menu],
  );

  useEffect(() => {
    setActiveTab(0);

    switch (page) {
      case 'films':
        setMenu(filmsRelated);
        break;
      case 'people':
        setMenu(charactersRelated);
        break;
      case 'planets':
        setMenu(planetsRelated);
        break;
      case 'species':
        setMenu(speciesRelated);
        break;
      case 'starships':
        setMenu(starshipsRelated);
        break;
      case 'vehicles':
        setMenu(vehiclesRelated);
        break;
      default:
        setMenu([]);
        break;
    }
  }, [page]);

  return { menu, activeTab, handleActiveTab };
}
