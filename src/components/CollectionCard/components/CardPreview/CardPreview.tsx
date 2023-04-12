import { StaticImageData } from 'next/image';
import dynamic from 'next/dynamic';
import cn from 'classnames';
import s from './CardPreview.module.scss';

const ImageComponent = dynamic(
  import('../../../ImageComponent/ImageComponent').then(
    (mod) => mod.ImageComponent,
  ),
  { ssr: false },
);

interface CardPreviewProps {
  name: string;
  image: StaticImageData | string;
  showPreviewTitle?: boolean;
  showDetails?: boolean;
}

export const CardPreview = ({
  name,
  image,
  showPreviewTitle,
  showDetails,
}: CardPreviewProps): JSX.Element => (
  <div className={s.preview}>
    <div className={cn(s.preview__image, { [s.rounded]: !showDetails })}>
      <ImageComponent image={image} alt={name} />
    </div>
    {showPreviewTitle && <div className={s.preview__title}>{name}</div>}
  </div>
);
