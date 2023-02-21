import s from "@/src/components/GridCollection/GridCollection.module.scss";
import { ICollectionItem } from "@/src/types";
import { CollectionCard } from "@/src/components/CollectionCard";

interface GridCollectionProps {
  collection: ICollectionItem[];
  showDetails?: boolean;
}

export const GridCollection = ({
  collection,
  showDetails,
}: GridCollectionProps): JSX.Element => {
  return (
    <div className={s.grid}>
      {collection.map(({ id, image, name, href }) => (
        <CollectionCard
          key={id}
          id={id}
          name={name}
          image={image}
          href={href}
          showDetails={showDetails}
        />
      ))}
    </div>
  );
};
