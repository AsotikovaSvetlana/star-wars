import s from './BannerContent.module.scss';
import { Button } from '@/src/components/Button';
import { ImageComponent } from '@/src/components/ImageComponent';

interface BannerContentProps {
  category: string;
  title: string;
  id: number;
  handleButtonClick: () => void;
}

const BannerContent = ({
  title,
  category,
  id,
  handleButtonClick,
}: BannerContentProps): JSX.Element => {
  return (
    <div className={s.content}>
      <div className={s.content__text}>
        <h1>{title}</h1>
        <p>{`Star Wars ${category}`}</p>
        <Button
          color="primary-yellow"
          size="md"
          text="See more"
          onClick={handleButtonClick}
        />
      </div>
      <div className={s.content__image}>
        <ImageComponent
          image={`https://starwars-visualguide.com/assets/img/${
            category === 'people' ? 'characters' : category
          }/${id}.jpg`}
          alt={title}
        />
      </div>
    </div>
  );
};

export { BannerContent };
