import React from "react";
import cn from "classnames";
import s from "@/src/components/GridCollection/GridCollection.module.scss";

type PropsWithChildrenFunction<P, T> = P & {
  children?: (item: T) => React.ReactNode;
};

interface GridCollectionProps<T> {
  collection: T[];
  variant: "categories" | "catalogue";
}

export const GridCollection = <T,>({
  collection,
  variant,
  children,
}: PropsWithChildrenFunction<GridCollectionProps<T>, T>): JSX.Element => {
  return (
    <div className={cn(s.grid, s[variant])}>
      {children &&
        collection.length &&
        collection.map((item) => children(item))}
    </div>
  );
};
