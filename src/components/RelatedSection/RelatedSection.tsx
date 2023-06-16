import s from './RelatedSection.module.scss';
import { Entities, Pages } from '@/src/types';
import useRelatedData from '@/src/components/RelatedSection/hooks/useRelatedData';
import RelatedMenu from './components/RelatedMenu/RelatedMenu';
import { RelatedContent } from './components/RelatedContent';
import useRelatedMenu from './hooks/useRelatedMenu';

interface RelatedSectionProps {
  data: Entities;
  category: Pages;
}

const RelatedSection = ({
  data,
  category,
}: RelatedSectionProps): JSX.Element => {
  const { cards, loader } = useRelatedData(data, category);
  const { menu, activeTab, handleActiveTab } = useRelatedMenu(category);

  return (
    <div className={s.related}>
      <div className={s.related__content}>
        <h2>Related</h2>
        <RelatedMenu
          menu={menu}
          activeItem={activeTab}
          onClick={handleActiveTab}
        />
        <RelatedContent
          data={cards ? cards : {}}
          category={menu[activeTab]?.name}
          loader={loader}
        />
      </div>
    </div>
  );
};

export { RelatedSection };
