import React, { useMemo, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import s from './ImageComponent.module.scss';
import DefaultImage from '@/src/assets/icons/default.svg';

interface ImageComponentProps {
  image: StaticImageData | string;
  alt: string;
}

export const ImageComponent = ({
  image,
  alt,
}: ImageComponentProps): JSX.Element => {
  const [error, setError] = useState(false);

  const setDefaultImage = () => {
    setError(true);
  };

  const getImageChildren = useMemo(() => {
    if (error) {
      return (
        <div className={s.error}>
          <DefaultImage />
        </div>
      );
    }

    if (typeof image === 'string') {
      return <img src={image} alt={alt} onError={setDefaultImage} />;
    } else {
      return <Image src={image} alt={alt} onError={setDefaultImage} />;
    }
  }, [image, alt, error]);

  return <>{getImageChildren}</>;
};
