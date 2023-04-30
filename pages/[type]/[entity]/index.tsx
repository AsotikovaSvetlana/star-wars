import { useCallback, useContext, useRef } from 'react';
import { GetServerSideProps } from 'next';
import { Entities, EntitiesTypes, Pages } from '@/src/types';
import { AppContext } from '@/src/context';
import { fetchEntityData } from '@/src/rest/fetchEntityData';
import { MainLayout } from '@/src/layouts/MainLayout';
import { BannerComponent } from '@/src/components/BannerComponent';
import { AppHead } from '@/src/components/AppHead';
import { ContentSection } from '@/src/components/ContentSection';
import { getContentTableData } from '@/src/utils';

interface CardPageProps {
  data: Entities;
  category: Pages;
  id: number;
}

const CardPage = ({ data, category, id }: CardPageProps): JSX.Element => {
  const { poster } = useContext(AppContext);
  const src = typeof poster === 'string' ? poster : poster.src;
  const title = 'title' in data ? data.title : data.name;
  const factsRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = useCallback(() => {
    factsRef.current &&
      factsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <MainLayout>
      <AppHead
        title={`${title} – Star Wars ${category}`}
        description={`Everything you need to know about ${title} in the Star Wars universe.`}
      />
      <BannerComponent
        category={category}
        id={id}
        src={src}
        title={title}
        handleButtonClick={handleButtonClick}
      />
      <ContentSection
        sectionRef={factsRef}
        title={`${category} facts`}
        content={getContentTableData(data)}
      />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<CardPageProps> = async ({
  params,
}) => {
  if (!params || !params.type || !params.entity) {
    return {
      notFound: true,
    };
  }

  const id =
    typeof params.entity === 'string' ? +params.entity : +params.entity[0];
  const category = (
    typeof params.type === 'string' ? params.type : params.type[0]
  ) as Pages;

  const data = await fetchEntityData<EntitiesTypes[typeof category]>(
    id,
    category,
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      category,
      id,
    },
  };
};

export default CardPage;
