import { useCallback, useContext, useRef } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Entities, EntitiesTypes, Pages } from '@/src/types';
import { AppContext } from '@/src/context';
import { fetchEntityData } from '@/src/rest/fetchEntityData';
import { MainLayout } from '@/src/layouts/MainLayout';
import { BannerComponent } from '@/src/components/BannerComponent';
import { AppHead } from '@/src/components/AppHead';
import { ContentSection } from '@/src/components/ContentSection';
import { getContentTableData } from '@/src/utils/getContentTableData';
import { RelatedSection } from '@/src/components/RelatedSection';
import { StarWarsAPI } from '@/src/api/StarWarsAPI';

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
      <RelatedSection data={data} category={category} />
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const promises = [
    'films',
    'people',
    'planets',
    'species',
    'starships',
    'vehicles',
  ].map((item) => StarWarsAPI.getEntitiesData<Entities>(item));

  type PathType = {
    params: {
      type: string;
      id: string;
    };
  };
  const paths: PathType[] = [];

  await Promise.all(promises).then((results) => {
    results.forEach((item) => {
      const data = Array.from({ length: item.count }, (_, index) => index + 1);

      const type = [
        'films',
        'people',
        'planets',
        'species',
        'starships',
        'vehicles',
      ].find((el) => item.results[0].url.includes(el));

      if (type) {
        data.forEach((el) =>
          paths.push({
            params: {
              type,
              id: el.toString(),
            },
          }),
        );
      }
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<CardPageProps> = async ({
  params,
}) => {
  if (!params || !params.type || !params.id) {
    return {
      notFound: true,
    };
  }

  const id = typeof params.id === 'string' ? +params.id : +params.id[0];
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
