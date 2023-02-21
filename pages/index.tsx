import { GridCollection } from "@/src/components/GridCollection";
import { MainLayout } from "@/src/layouts/MainLayout";
import { homePageCollection } from "@/src/data/home-page-collection";

export const Home = () => {
  return (
    <MainLayout>
      <GridCollection collection={homePageCollection} />
    </MainLayout>
  );
};

export default Home;
