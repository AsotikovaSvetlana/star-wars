import s from './ContentItem.module.scss';
import { ContentItemType } from '../../types';

interface ContentItemProps extends ContentItemType {}

const ContentItem = ({ name, value }: ContentItemProps): JSX.Element => (
  <li className={s.item}>
    <span>{name}:</span> <span>{value}</span>
  </li>
);

export { ContentItem };
