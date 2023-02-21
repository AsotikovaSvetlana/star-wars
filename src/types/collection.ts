import { StaticImageData } from "next/image";

export type ICollectionItem = {
  id: number;
  name: string;
  href: string;
  image: StaticImageData;
};
