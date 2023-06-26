import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import s from './Skeleton.module.scss';
import GridLoader from './components/GridLoader';
import { getTypeOfLoader } from './utils/getTypeOfLoader';
import BannerLoader from './components/BannerLoader';
import SectionLoader from './components/SectionLoader';

interface SkeletonProps {
  children: React.ReactNode;
}

const Skeleton: React.FC<SkeletonProps> = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState('');

  useEffect(() => {
    const handleStart = (url: string) => {
      const pageType = getTypeOfLoader(url);

      setLoading(true);
      setType(pageType);
    };
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
    };
  }, []);

  const renderLoader = useMemo(() => {
    switch (type) {
      case 'category':
        return <GridLoader count={15} />;
      case 'card':
        return (
          <>
            <BannerLoader />
            <SectionLoader />
            <SectionLoader />
          </>
        );
      default:
        return <></>;
    }
  }, [type]);

  if (loading) {
    return <div className={s.skeleton}>{renderLoader}</div>;
  }

  return <>{children}</>;
};

export default React.memo(Skeleton);
