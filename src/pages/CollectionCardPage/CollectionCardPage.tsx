import { GetServerSideProps } from "next";
import s from "./CollectionCardPage.module.scss";
import { MainLayout } from "@/src/layouts/MainLayout";

interface CollectionCardPageProps {
  params: any;
}

const CollectionCardPage = ({
  params,
}: CollectionCardPageProps): JSX.Element => {
  console.log(params);

  return (
    <MainLayout>
      <div className={s.banner}>Test</div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<
  CollectionCardPageProps
> = async (context) => {
  // if (!params || !params.type) {
  //   return {
  //     notFound: true,
  //   };
  // }
  console.log(context);

  return {
    props: {
      params: "",
    },
  };
};

export default CollectionCardPage;
