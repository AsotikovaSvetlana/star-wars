export const getTypeOfLoader = (url: string): string => {
  const categories = [
    '/people',
    '/films',
    '/planets',
    '/species',
    '/starships',
    '/vehicles',
  ];

  if (categories.includes(url) || url.includes('?page=')) return 'category';

  if (/\d/.test(url) && !url.includes('?page=')) return 'card';

  return '';
};
