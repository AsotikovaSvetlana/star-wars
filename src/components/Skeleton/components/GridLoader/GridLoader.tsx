import React, { useMemo } from 'react';
import s from './GridLoader.module.scss';
import ShimmerItem from '../ShimmerItem';

interface GridProps {
  count: number;
}

const Grid: React.FC<GridProps> = ({ count }) => {
  const renderItems = useMemo(
    () => new Array(count).fill('').map((_, index) => index),
    [count],
  );

  return (
    <div className={s.grid}>
      {renderItems.map((item) => (
        <ShimmerItem key={item} />
      ))}
    </div>
  );
};

export default React.memo(Grid);
