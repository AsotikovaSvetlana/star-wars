import s from './ContentSection.module.scss';
import { ContentList } from './components/ContentList';
import { ContentItemType } from './types';

interface ContentSectionProps {
  title: string;
  content: ContentItemType[];
  sectionRef: React.RefObject<HTMLDivElement>;
}

const ContentSection = ({
  sectionRef,
  title,
  content,
}: ContentSectionProps): JSX.Element => (
  <div className={s.section} ref={sectionRef}>
    <div className={s.section__content}>
      <h2>{title}</h2>
      <ContentList content={content} sectionRef={sectionRef} />
    </div>
  </div>
);

export { ContentSection };
