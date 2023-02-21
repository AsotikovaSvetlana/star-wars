import Link from "next/link";
import { ICollectionItem } from "@/src/types";
import s from "./CollectionCard.module.scss";
import { CardDetails } from "@/src/components/CollectionCard/components/CardDetails";
import { CardPreview } from "@/src/components/CollectionCard/components/CardPreview";

interface CollectionCardProps extends ICollectionItem {
  showDetails?: boolean;
}

export const CollectionCard = ({
  image,
  name,
  href,
  showDetails,
}: CollectionCardProps): JSX.Element => {
  return (
    <div className={s.card}>
      <Link href={href} className={s.card__link}>
        <CardPreview name={name} image={image} />
        {showDetails && <CardDetails />}
      </Link>
    </div>
  );
};
