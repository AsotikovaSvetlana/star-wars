import s from './ContentSection.module.scss';
import { ContentList } from './components/ContentList';
import { ContentItemType } from './types';

interface ContentSectionProps {
  sectionRef: React.RefObject<HTMLDivElement>;
  title: string;
  content: ContentItemType[];
}

const ContentSection = ({
  sectionRef,
  title,
  content,
}: ContentSectionProps): JSX.Element => (
  <div className={s.section} ref={sectionRef}>
    <div className={s.section__content}>
      <h2>{title}</h2>
      <ContentList content={content} />
    </div>
  </div>
);

export { ContentSection };
