import Link from "next/link";
import cn from "classnames";
import s from "./CollectionCard.module.scss";
import { CardDetails } from "@/src/components/CollectionCard/components/CardDetails";
import { CardPreview } from "@/src/components/CollectionCard/components/CardPreview";
import { StaticImageData } from "next/image";

interface CollectionCardProps {
  name: string;
  href: string;
  image: string | StaticImageData;
  variant: "categories" | "catalogue";
  showDetails?: boolean;
  showPreviewTitle?: boolean;
}

export const CollectionCard = ({
  name,
  href,
  variant,
  image,
  showDetails,
  showPreviewTitle,
}: CollectionCardProps): JSX.Element => {
  return (
    <div className={cn(s.card, s[variant])}>
      <Link href={href} className={s.card__link}>
        <CardPreview
          name={name}
          image={image}
          showPreviewTitle={showPreviewTitle}
          showDetails={showDetails}
        />
        {showDetails && <CardDetails />}
      </Link>
    </div>
  );
};
