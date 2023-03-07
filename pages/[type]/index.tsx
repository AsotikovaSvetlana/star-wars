import { GetStaticPaths, GetStaticProps } from "next";
import { format } from "date-fns";
import { MainLayout } from "@/src/layouts/MainLayout";
import { AppHead } from "@/src/components/AppHead";
import { homePageCollection } from "../../src/data/home-page-collection";
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

interface MainCategoriesProps {
  page: keyof Entities;
  collection:
    | ICharacter[]
    | IPlanet[]
    | IFilm[]
    | ISpecies[]
    | IStarship[]
    | IVehicle[];
}

const MainCategories = ({
  page,
  collection,
}: MainCategoriesProps): JSX.Element => {
  const title = page && `${page[0].toUpperCase()}${page.slice(1)}`;

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

  return (
    <MainLayout>
      <AppHead
        title={`${title} – Star Wars`}
        description={`Everything you need to know about ${page} in the Star Wars universe.`}
      />
      <GridCollection<Entities[typeof page]>
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
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = homePageCollection.map((item) => item.href);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<MainCategoriesProps> = async ({
  params,
}) => {
  if (!params || !params.type) {
    return {
      notFound: true,
    };
  }

  const page = Array.isArray(params.type)
    ? (params.type[0] as keyof Entities)
    : (params.type as keyof Entities);
  const result = await fetchCategoriesData(page);

  if (!result) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
      collection: result,
    },
  };
};

export default MainCategories;
