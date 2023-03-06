import Image, { StaticImageData } from "next/image";
import cn from "classnames";
import s from "./CardPreview.module.scss";

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
      {typeof image === "string" ? (
        <img src={image} alt={name} />
      ) : (
        <Image src={image} alt={name} />
      )}
    </div>
    {showPreviewTitle && <div className={s.preview__title}>{name}</div>}
  </div>
);
