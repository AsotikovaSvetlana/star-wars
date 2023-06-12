import { useEffect, useMemo, useState } from 'react';
import cn from 'classnames';
import s from './ContentItem.module.scss';
import { ContentItemType } from '../../types';

interface ContentItemProps extends ContentItemType {
  isExpand: boolean;
  sectionRef: React.RefObject<HTMLDivElement>;
}

const ContentItem = ({
  name,
  value,
  isExpand,
  sectionRef,
}: ContentItemProps): JSX.Element => {
  const [description, setDescription] = useState('');
  const [expand, setExpand] = useState(false);

  const handleValueClick = () => {
    if (expand) {
      setDescription(value.slice(0, 100));
      setExpand(false);
      sectionRef.current &&
        sectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
    } else {
      setDescription(value);
      setExpand(true);
    }
  };

  const renderItemValue = useMemo(() => {
    if (isExpand) {
      return (
        <div className={s.expand}>
          <div className={s.expand__value}>
            <p>{description}</p>
            <div className={cn(s.expand__gradient, { [s.hidden]: expand })} />
          </div>
          <button
            type="button"
            className={s.expand__button}
            onClick={handleValueClick}
          >
            {`Show ${expand ? 'less' : 'all'}`}
          </button>
        </div>
      );
    }

    return <span>{value}</span>;
  }, [name, value, isExpand, description]);

  useEffect(() => {
    const visibleValue = value.length > 100 ? value.slice(0, 100) : value;
    setDescription(visibleValue);
  }, []);

  return (
    <li className={s.item}>
      <span>{name}:</span> {renderItemValue}
    </li>
  );
};

export { ContentItem };
