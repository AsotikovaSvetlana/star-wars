export const convertFetchData = <T extends object>(data: T[], page: string) => {
  const result: T[] = data.map((item) => {
    const matchId =
      'url' in item && typeof item.url === 'string'
        ? item.url.match(/\d+/g)
        : '';
    const id = matchId ? +matchId[0] : 0;
    let name = '';

    if ('title' in item && typeof item.title === 'string') {
      name = item.title;
    } else if ('name' in item && typeof item.name === 'string') {
      name = item.name;
    }
    const href = `/${page}/${id}`;
    const image = `https://starwars-visualguide.com/assets/img/${
      page === 'people' ? 'characters' : page
    }/${id}.jpg`;

    return {
      ...item,
      id,
      href,
      image,
      name,
    };
  });

  return result;
};
