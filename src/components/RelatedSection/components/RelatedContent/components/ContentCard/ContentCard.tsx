import Link from 'next/link';
import s from './ContentCard.module.scss';
import { ImageComponent } from '@/src/components/ImageComponent';
import { RelatedData } from '@/src/types';

interface ContentCardProps {
  name: string;
  category: keyof RelatedData;
  url: string;
}

const ContentCard = ({
  name,
  url,
  category,
}: ContentCardProps): JSX.Element => (
  <li className={s.card}>
    <Link
      className={s.card__link}
      href={url.replace('https://swapi.dev/api', '')}
    >
      <div className={s.card__image}>
        <ImageComponent
          image={`https://starwars-visualguide.com/assets/img/${
            category === 'pilots' || category === 'residents'
              ? 'characters'
              : category
          }/${url.match(/\d+/g)}.jpg`}
          alt={name}
        />
      </div>
      <div className={s.card__title}>{name}</div>
    </Link>
  </li>
);

export { ContentCard };
