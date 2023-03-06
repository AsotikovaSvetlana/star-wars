import { GetStaticPaths, GetStaticProps } from "next";
import { MainLayout } from "@/src/layouts/MainLayout";
import { AppHead } from "@/src/components/AppHead";
import { homePageCollection } from "../../src/data/home-page-collection";
import {
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
  characters:
    | ICharacter[]
    | IPlanet[]
    | IFilm[]
    | ISpecies[]
    | IStarship[]
    | IVehicle[];
}

const MainCategories = ({
  page,
  characters,
}: MainCategoriesProps): JSX.Element => {
  const title = `${page[0].toUpperCase()}${page.slice(1)}`;

  return (
    <MainLayout>
      <AppHead
        title={`${title} – Star Wars`}
        description={`Everything you need to know about ${page} in the Star Wars universe.`}
      />
      <GridCollection<Entities[typeof page]>
        variant="catalogue"
        collection={characters}
      >
        {(item) => (
          <CollectionCard
            key={item.id}
            variant="catalogue"
            showDetails
            href={item.href}
            image={item.image}
            name={item.name}
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
      characters: result,
    },
  };
};

export default MainCategories;
