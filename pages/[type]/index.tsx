import { GetServerSideProps } from 'next';
import { useMemo } from 'react';
import { format } from 'date-fns';
import MainLayout from '@/src/layouts/MainLayout';
import { AppHead } from '@/src/components/AppHead';
import {
  Details,
  Entities,
  EntitiesTypes,
  ICharacter,
  IFilm,
  IPlanet,
  ISpecies,
  IStarship,
  IVehicle,
} from '@/src/types';
import { GridCollection } from '@/src/components/GridCollection';
import { CollectionCard } from '@/src/components/CollectionCard';
import { fetchCategoriesData } from '@/src/rest/fetchCategoriesData';
import { PaginationComponent } from '@/src/components/Pagination';

interface CollectionPageProps {
  category: keyof EntitiesTypes;
  totalPages: number;
  collection: Entities[];
}

const CollectionPage = ({
  category,
  totalPages,
  collection,
}: CollectionPageProps): JSX.Element => {
  const getCardDetails = (item: EntitiesTypes[keyof EntitiesTypes]) => {
    type EntitiesProps =
      | Pick<ICharacter, 'birth_year'>
      | Pick<IPlanet, 'climate'>
      | Pick<IFilm, 'release_date'>
      | Pick<ISpecies, 'classification'>
      | Pick<IStarship, 'starship_class'>
      | Pick<IVehicle, 'vehicle_class'>;

    const details: Details = {};
    const keys: (keyof Details)[] = [
      'birth_year',
      'release_date',
      'climate',
      'classification',
      'starship_class',
      'vehicle_class',
    ];

    keys.forEach((key) => {
      if (key in item) {
        const value =
          key === 'release_date'
            ? format(new Date(item[key as keyof EntitiesProps]), 'dd.MM.yyyy')
            : item[key as keyof EntitiesProps];
        details[key] = value;
      }
    });

    return details;
  };

  const getPageTitle = useMemo(() => {
    return category && `${category[0].toUpperCase()}${category.slice(1)}`;
  }, [category]);

  return (
    <MainLayout>
      <AppHead
        title={`${getPageTitle} – Star Wars`}
        description={`Everything you need to know about ${category} in the Star Wars universe.`}
      />
      <GridCollection<EntitiesTypes[typeof category]>
        variant="catalogue"
        collection={collection}
      >
        {(item) => (
          <CollectionCard
            key={item.id}
            variant="catalogue"
            showDetails
            name={item.name}
            href={item.href}
            image={item.image}
            details={getCardDetails(item)}
            category={category}
          />
        )}
      </GridCollection>
      <PaginationComponent
        total={totalPages}
        category={category}
        margin="mt-30"
      />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<
  CollectionPageProps
> = async ({ params, query }) => {
  if (!params || !params.type) {
    return {
      notFound: true,
    };
  }

  const category = Array.isArray(params.type)
    ? (params.type[0] as keyof EntitiesTypes)
    : (params.type as keyof EntitiesTypes);
  const currentPage = Array.isArray(query.page) ? query.page[0] : query.page;
  const result = await fetchCategoriesData<EntitiesTypes[typeof category]>(
    category,
    currentPage,
  );

  if (!result) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      category,
      totalPages: result.totalPages,
      collection: result.collection,
    },
  };
};

export default CollectionPage;
