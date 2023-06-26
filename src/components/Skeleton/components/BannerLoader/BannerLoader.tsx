import React from 'react';
import s from './BannerLoader.module.scss';
import ShimmerItem from '../ShimmerItem';

const BannerLoader = () => (
  <div className={s.banner}>
    <ShimmerItem />
  </div>
);

export default BannerLoader;
