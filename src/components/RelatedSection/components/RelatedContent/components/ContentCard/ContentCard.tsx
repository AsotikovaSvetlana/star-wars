import { useMemo } from 'react';
import s from './ContentCard.module.scss';
import { ImageComponent } from '@/src/components/ImageComponent';
import { RelatedData } from '@/src/types';
import { LinkComponent } from '@/src/components/LinkComponent';

interface ContentCardProps {
  name: string;
  category: keyof RelatedData;
  url: string;
}

const ContentCard = ({
  name,
  url,
  category,
}: ContentCardProps): JSX.Element => {
  const cardData = useMemo(() => {
    const href = url.replace('https://swapi.dev/api', '');
    const image = `https://starwars-visualguide.com/assets/img/${
      category === 'pilots' || category === 'residents'
        ? 'characters'
        : category
    }/${url.match(/\d+/g)}.jpg`;

    return { href, image };
  }, [name, url, category]);

  return (
    <li className={s.card}>
      <LinkComponent
        classes={s.card__link}
        href={cardData.href}
        poster={category}
        isSetPoster
      >
        <div className={s.card__image}>
          <ImageComponent image={cardData.image} alt={name} />
        </div>
        <div className={s.card__title}>{name}</div>
      </LinkComponent>
    </li>
  );
};

export { ContentCard };
