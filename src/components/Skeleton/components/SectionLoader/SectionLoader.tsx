import React from 'react';
import s from './SectionLoader.module.scss';
import ShimmerItem from '../ShimmerItem';

const SectionLoader = () => (
  <div className={s.section}>
    <ShimmerItem />
  </div>
);

export default React.memo(SectionLoader);
