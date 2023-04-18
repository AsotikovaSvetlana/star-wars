import s from './BannerComponent.module.scss';
import { BannerCover } from './components/BannerCover';
import { BannerContent } from './components/BannerContent';

interface BannerComponentProps {
  title: string;
  category: string;
  id: number;
  src: string;
  handleButtonClick: () => void;
}

const BannerComponent = ({
  title,
  category,
  id,
  src,
  handleButtonClick,
}: BannerComponentProps): JSX.Element => (
  <div className={s.banner}>
    <BannerCover src={src} />
    <BannerContent
      title={title}
      category={category}
      id={id}
      handleButtonClick={handleButtonClick}
    />
  </div>
);

export { BannerComponent };
