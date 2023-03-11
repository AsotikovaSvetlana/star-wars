import axios from "axios";
import { IEntitiesResponse } from "../types";

export const StarWarsAPI = {
  baseUrl: "https://swapi.dev/api",
  async getEntitiesData<T>(
    slug: string,
    pageNumber?: string
  ): Promise<IEntitiesResponse<T>> {
    const { data } = await axios.get<IEntitiesResponse<T>>(
      `${this.baseUrl}/${slug}${pageNumber ? `/?page=${pageNumber}` : ""}`
    );
    return data;
  },
};
