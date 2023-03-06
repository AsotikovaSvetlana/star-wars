export const convertFetchData = <T extends object>(data: T[], page: string) => {
  const res: T[] = [];

  const result: T[] = data.map((item) => {
    const matchId =
      "url" in item && typeof item.url === "string"
        ? item.url.match(/\d+/g)
        : "";
    const id = matchId ? +matchId[0] : 0;
    let href: string = "";
    let name: string = "";

    if ("title" in item && typeof item.title === "string") {
      href = `/${page}/${item.title.replace(" ", "-").toLowerCase()}`;
      name = item.title;
    } else if ("name" in item && typeof item.name === "string") {
      href = `/${page}/${item?.name.replace(" ", "-").toLowerCase()}`;
      name = item.name;
    }

    const image = `https://starwars-visualguide.com/assets/img/${
      page === "people" ? "characters" : page
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
