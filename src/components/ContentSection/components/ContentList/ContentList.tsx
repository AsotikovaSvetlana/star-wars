import s from './ContentList.module.scss';
import { ContentItem } from '../ContentItem';
import { ContentItemType } from '../../types';

interface ContentListProps {
  content: ContentItemType[];
}

const ContentList = ({ content }: ContentListProps): JSX.Element => (
  <ul className={s.list}>
    {content.map(({ name, value }) => (
      <ContentItem key={name} name={name} value={value} />
    ))}
  </ul>
);

export { ContentList };
