import { GridCollection } from '@/src/components/GridCollection';
import MainLayout from '@/src/layouts/MainLayout';
import { homePageCollection } from '@/src/data/home-page-collection';
import { AppHead } from '@/src/components/AppHead';
import { ICollectionItem } from '@/src/types';
import { CollectionCard } from '@/src/components/CollectionCard';

const Home = () => (
  <MainLayout>
    <AppHead
      title="Star Wars"
      description="Star Wars – Everything you need to know about the Star Wars universe."
    />
    <GridCollection<ICollectionItem>
      collection={homePageCollection}
      variant="categories"
    >
      {(item) => (
        <CollectionCard
          key={item.id}
          variant="catalogue"
          showPreviewTitle
          {...item}
        />
      )}
    </GridCollection>
  </MainLayout>
);

export default Home;
