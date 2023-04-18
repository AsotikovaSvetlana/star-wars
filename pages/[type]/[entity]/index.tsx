import { useContext, useRef } from 'react';
import { GetServerSideProps } from 'next';
import s from '@/src/pages/CollectionCardPage/CollectionCardPage.module.scss';
import { Entities, EntitiesTypes, Pages } from '@/src/types';
import { MainLayout } from '@/src/layouts/MainLayout';
import { AppContext } from '@/src/context';
import { fetchEntityData } from '@/src/rest/fetchEntityData';
import { BannerComponent } from '@/src/components/BannerComponent';
import { AppHead } from '@/src/components/AppHead';

interface CardPageProps {
  data: Entities;
  category: Pages;
  id: number;
}

const CardPage = ({ data, category, id }: CardPageProps): JSX.Element => {
  const { poster } = useContext(AppContext);
  const src = typeof poster === 'string' ? poster : poster.src;
  const title = 'title' in data ? data.title : data.name;
  const infoRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    infoRef.current &&
      infoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
      {/* <div className={s.container} ref={infoRef}>
        <div className={s.container__content}>
          <h2>Character facts</h2>
          <ul className={s.container__list}>
            <li>
              <span>First Appearance:</span> <span>WHIZ COMICS #2 (1940)</span>
            </li>
            <li>
              <span>First Appearance:</span> <span>WHIZ COMICS #2 (1940)</span>
            </li>
            <li>
              <span>First Appearance:</span> <span>WHIZ COMICS #2 (1940)</span>
            </li>
            <li>
              <span>First Appearance:</span> <span>WHIZ COMICS #2 (1940)</span>
            </li>
            <li>
              <span>Powers:</span>{' '}
              <span>
                super strength, flight, invulnerability, superhuman agility,
                super speed, living lightning
              </span>
            </li>
            <li>
              <span>First Appearance:</span> <span>WHIZ COMICS #2 (1940)</span>
            </li>
            <li>
              <span>First Appearance:</span> <span>WHIZ COMICS #2 (1940)</span>
            </li>
          </ul>
        </div>
      </div> */}
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
