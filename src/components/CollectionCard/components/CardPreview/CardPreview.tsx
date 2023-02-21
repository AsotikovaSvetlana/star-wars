import Image, { StaticImageData } from "next/image";
import s from "./CardPreview.module.scss";

interface CardPreviewProps {
  name: string;
  image: StaticImageData;
}

export const CardPreview = ({ name, image }: CardPreviewProps): JSX.Element => (
  <div className={s.preview}>
    <div className={s.preview__image}>
      <Image src={image} alt={name} />
    </div>
    <div className={s.preview__title}>{name}</div>
  </div>
);
