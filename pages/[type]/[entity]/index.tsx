import { GetServerSideProps } from "next";
import s from "@/src/pages/CollectionCardPage/CollectionCardPage.module.scss";
import { MainLayout } from "@/src/layouts/MainLayout";
import { useContext, useRef } from "react";
import { AppContext } from "@/src/context";
import { fetchEntityData } from "@/src/rest/fetchEntityData";
import { Button } from "@/src/components/Button";
import DefaultPoster from "@/src/assets/images/home/default.jpeg";
import Image from "next/image";
import { ImageComponent } from "@/src/components/ImageComponent";
import { Entities, EntitiesTypes, Pages } from "@/src/types";

interface CardPageProps {
  data: Entities;
  category: Pages;
  id: number;
}

const CardPage = ({ data, category, id }: CardPageProps): JSX.Element => {
  const { poster } = useContext(AppContext);
  const src = typeof poster === "string" ? poster : poster.src;
  const title = "title" in data ? data.title : data.name;
  const infoRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    infoRef.current &&
      infoRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <MainLayout>
      <div className={s.banner}>
        {src ? (
          <img src={src} alt="" className={s.banner__cover} />
        ) : (
          <Image className={s.banner__cover} src={DefaultPoster} alt="" />
        )}
        <div className={s.banner__info}>
          <div className={s.banner__text}>
            <h1>{title}</h1>
            <p>{`Star Wars ${category}`}</p>
            <Button
              color="primary-yellow"
              size="md"
              text="See more"
              onClick={handleClick}
            />
          </div>
          <div className={s.banner__image}>
            <ImageComponent
              image={`https://starwars-visualguide.com/assets/img/${
                category === "people" ? "characters" : category
              }/${id}.jpg`}
              alt={title}
            />
          </div>
        </div>
      </div>
      <div className={s.container} ref={infoRef}>
        <div className={s.container__content}>
          <h2>Character facts</h2>
          <ul className={s.container__list}>
            <li>
              <span>First Appearance:</span> <span>WHIZ COMICS #2 (1940)</span>
            </li>
            <li>
              <span>First Appearance:</span> <span>WHIZ COMICS #2 (1940)</span>
            </li>
            <li>
              <span>First Appearance:</span> <span>WHIZ COMICS #2 (1940)</span>
            </li>
            <li>
              <span>First Appearance:</span> <span>WHIZ COMICS #2 (1940)</span>
            </li>
            <li>
              <span>Powers:</span>{" "}
              <span>
                super strength, flight, invulnerability, superhuman agility,
                super speed, living lightning
              </span>
            </li>
            <li>
              <span>First Appearance:</span> <span>WHIZ COMICS #2 (1940)</span>
            </li>
            <li>
              <span>First Appearance:</span> <span>WHIZ COMICS #2 (1940)</span>
            </li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<CardPageProps> = async ({
  params,
}) => {
  if (!params || !params.type || !params.entity) {
    return {
      notFound: true,
    };
  }

  const id =
    typeof params.entity === "string" ? +params.entity : +params.entity[0];
  const category = (
    typeof params.type === "string" ? params.type : params.type[0]
  ) as Pages;
  console.log(category);

  const data = await fetchEntityData<EntitiesTypes[typeof category]>(
    id,
    category
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      category,
      id,
    },
  };
};

export default CardPage;
