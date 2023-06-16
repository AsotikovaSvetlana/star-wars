import { useMemo } from 'react';
import cn from 'classnames';
import s from './RelatedContent.module.scss';
import { RelatedData, isIFilm } from '@/src/types';
import { ContentCard } from './components/ContentCard';
import { Loader } from '@/src/components/Loader';

interface RelatedContentProps {
  data: RelatedData;
  category: keyof RelatedData;
  loader: boolean;
}

const RelatedContent = ({
  data,
  category,
  loader,
}: RelatedContentProps): JSX.Element => {
  const getContent = useMemo(() => {
    if (loader) {
      return <Loader />;
    }

    if (!loader && category in data && !data[category]?.length) {
      return <p>{`There are no related ${category}`}</p>;
    }

    const arrLength = data[category]?.length;
    const isExtended = arrLength && arrLength > 3;

    return (
      <ul className={cn(s.content, { [s.extended]: isExtended })}>
        {data[category]?.map((item) => {
          const name = isIFilm(item) ? item.title : item.name;
          return (
            <ContentCard
              key={name}
              name={name}
              url={item.url}
              category={category}
            />
          );
        })}
      </ul>
    );
  }, [data, category, loader]);

  return <div className={s.wrapper}>{getContent}</div>;
};

export { RelatedContent };
