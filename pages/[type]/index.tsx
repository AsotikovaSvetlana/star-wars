import { GetServerSideProps } from "next";
import { useMemo } from "react";
import { format } from "date-fns";
import { MainLayout } from "@/src/layouts/MainLayout";
import { AppHead } from "@/src/components/AppHead";
import {
  Details,
  Entities,
  ICharacter,
  IFilm,
  IPlanet,
  ISpecies,
  IStarship,
  IVehicle,
} from "@/src/types";
import { GridCollection } from "@/src/components/GridCollection";
import { CollectionCard } from "@/src/components/CollectionCard";
import { fetchCategoriesData } from "@/src/rest/fetchCategoriesData";
import { Pagination } from "@/src/components/Pagination";

interface MainCategoriesProps {
  category: keyof Entities;
  totalPages: number;
  collection:
    | ICharacter[]
    | IPlanet[]
    | IFilm[]
    | ISpecies[]
    | IStarship[]
    | IVehicle[];
}

const MainCategories = ({
  category,
  totalPages,
  collection,
}: MainCategoriesProps): JSX.Element => {
  const getCardDetails = (item: Entities[keyof Entities]) => {
    type EntitiesProps =
      | Pick<ICharacter, "birth_year">
      | Pick<IPlanet, "climate">
      | Pick<IFilm, "release_date">
      | Pick<ISpecies, "classification">
      | Pick<IStarship, "starship_class">
      | Pick<IVehicle, "vehicle_class">;

    const details: Details = {};
    const keys: (keyof Details)[] = [
      "birth_year",
      "release_date",
      "climate",
      "classification",
      "starship_class",
      "vehicle_class",
    ];

    keys.forEach((key) => {
      if (key in item) {
        const value =
          key === "release_date"
            ? format(new Date(item[key as keyof EntitiesProps]), "dd.MM.yyyy")
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
      <GridCollection<Entities[typeof category]>
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
          />
        )}
      </GridCollection>
      <Pagination
        total={totalPages}
        category={category}
        margin="mt-30"
        buttons={{ color: "primary-black", size: "sm" }}
      />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<
  MainCategoriesProps
> = async ({ params, query }) => {
  if (!params || !params.type) {
    return {
      notFound: true,
    };
  }

  const category = Array.isArray(params.type)
    ? (params.type[0] as keyof Entities)
    : (params.type as keyof Entities);
  const currentPage = Array.isArray(query.page) ? query.page[0] : query.page;
  const result = await fetchCategoriesData(category, currentPage);

  if (!result) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      category,
      totalPages: result.pages,
      collection: result.collection,
    },
  };
};

export default MainCategories;
