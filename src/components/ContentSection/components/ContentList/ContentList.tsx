import s from './ContentList.module.scss';
import { ContentItem } from '../ContentItem';
import { ContentItemType } from '../../types';

interface ContentListProps {
  content: ContentItemType[];
  sectionRef: React.RefObject<HTMLDivElement>;
}

const ContentList = ({
  content,
  sectionRef,
}: ContentListProps): JSX.Element => (
  <ul className={s.list}>
    {content.map(({ name, value }) => (
      <ContentItem
        key={name}
        name={name}
        value={value}
        isExpand={value.length > 100}
        sectionRef={sectionRef}
      />
    ))}
  </ul>
);

export { ContentList };
