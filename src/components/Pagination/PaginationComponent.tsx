import { useRouter } from 'next/router';
import { Pagination } from 'antd';
import cn from 'classnames';
import s from './Pagination.module.scss';

interface PaginationProps {
  total: number;
  category: string;
  margin: 'mt-20' | 'mt-30' | 'mb-20';
}

export const PaginationComponent = ({
  total,
  category,
  margin,
}: PaginationProps): JSX.Element => {
  const { push } = useRouter();

  const onChangePage = (id: number) => {
    if (id === 1) {
      push(`/${category}`);
    } else {
      push(`/${category}?page=${id}`);
    }
  };

  return (
    <div className={cn(s.pagination, s[margin])}>
      {total > 10 && (
        <Pagination
          total={total}
          showSizeChanger={false}
          onChange={(page) => onChangePage(page)}
        />
      )}
    </div>
  );
};
