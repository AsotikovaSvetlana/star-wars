import { StarWarsAPI } from "@/src/api/StarWarsAPI";
import { convertFetchData } from "./utils/convertFetchData";

export const fetchCategoriesData = async <T extends object>(
  category: string,
  pageNumber?: string
) => {
  try {
    const response = await StarWarsAPI.getEntitiesData<T>(category, pageNumber);
    const totalPages = Math.ceil(+response.count / 10);
    const peopleCollection = convertFetchData<T>(response.results, category);
    return { totalPages, collection: peopleCollection };
  } catch (err) {
    return null;
  }
};
