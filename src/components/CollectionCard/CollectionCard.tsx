import { StaticImageData } from 'next/image';
import cn from 'classnames';
import s from './CollectionCard.module.scss';
import { Details, EntitiesTypes } from '@/src/types';
import { CardDetails } from '@/src/components/CollectionCard/components/CardDetails';
import { CardPreview } from '@/src/components/CollectionCard/components/CardPreview';
import { LinkComponent } from '@/src/components/LinkComponent';

interface CollectionCardProps {
  name: string;
  href: string;
  image: string | StaticImageData;
  variant: 'categories' | 'catalogue';
  showDetails?: boolean;
  showPreviewTitle?: boolean;
  details?: Details;
  category?: keyof EntitiesTypes;
}

export const CollectionCard = ({
  name,
  href,
  variant,
  image,
  showDetails,
  showPreviewTitle,
  details,
  category,
}: CollectionCardProps): JSX.Element => (
  <div className={cn(s.card, s[variant])}>
    <LinkComponent
      href={href}
      classes={s.card__link}
      poster={category}
      isSetPoster={!!category}
    >
      <CardPreview
        name={name}
        image={image}
        showPreviewTitle={showPreviewTitle}
        showDetails={showDetails}
      />
      {showDetails && <CardDetails name={name} details={details} />}
    </LinkComponent>
  </div>
);
