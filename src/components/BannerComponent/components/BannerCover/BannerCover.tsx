import Image from 'next/image';
import s from './BannerCover.module.scss';
import DefaultPoster from '@/src/assets/images/home/default.jpeg';
import { useMemo } from 'react';

interface BannerCoverProps {
  src?: string;
}

const BannerCover = ({ src }: BannerCoverProps): JSX.Element => {
  const imageData = useMemo(() => {
    if (src) {
      return {
        src,
        alt: 'cover',
      };
    }

    return {
      src: DefaultPoster,
      alt: 'default cover',
    };
  }, [src]);

  return (
    <Image
      className={s.cover}
      src={imageData.src}
      alt={imageData.alt}
      width="100"
      height="100"
    />
  );
};

export { BannerCover };
