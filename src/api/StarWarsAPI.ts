import axios from "axios";
import { IEntitiesResponse } from "../types";

export const StarWarsAPI = {
  baseUrl: "https://swapi.dev/api",
  async getEntitiesData<T>(slug: string): Promise<T[]> {
    const { data } = await axios.get<IEntitiesResponse<T>>(
      `${this.baseUrl}/${slug}`
    );
    return data.results;
  },
};
