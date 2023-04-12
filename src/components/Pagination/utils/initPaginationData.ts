import { PaginationItem } from '@/src/types';

export const initPaginationData = (
  total: number,
  category: string,
): PaginationItem[] => {
  const paginationData: PaginationItem[] = new Array(total)
    .fill({ id: 0, count: 0, href: '' })
    .map((item, i) => {
      return {
        ...item,
        id: i + 1,
        count: i + 1,
        href: i === 0 ? `/${category}` : `/${category}?page=${i + 1}`,
      };
    });

  return paginationData;
};
