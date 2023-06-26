import s from './ErrorPage.module.scss';
import Yoda from '@/src/assets/images/error/yoda.svg';
import MainLayout from '@/src/layouts/MainLayout';
import { Flex } from '@/src/components/Flex';
import { LinkComponent } from '@/src/components/LinkComponent';

const ErrorPage = () => (
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
          Click to try <LinkComponent href="/">again</LinkComponent> and{' '}
          <span>May the Force be with you</span>!
        </p>
      </div>
    </Flex>
  </MainLayout>
);

export default ErrorPage;
