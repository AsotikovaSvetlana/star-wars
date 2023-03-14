import Link from "next/link";
import s from "./ErrorPage.module.scss";
import Yoda from "@/src/assets/images/error/yoda.svg";
import { MainLayout } from "@/src/layouts/MainLayout";
import { Flex } from "@/src/components/Flex";

const ErrorPage = () => {
  return (
    <MainLayout>
      <Flex
        direction="column"
        align="ai-center"
        justify="jc-center"
        classNames={{ flex: s.flex }}
      >
        <div className={s.icon}>
          <Yoda />
        </div>
        <div className={s.text}>
          <p>Page not found</p>
          <p>
            Click to try <Link href="/">again</Link> and{" "}
            <span>May the Force be with you</span>!
          </p>
        </div>
      </Flex>
    </MainLayout>
  );
};

export default ErrorPage;
