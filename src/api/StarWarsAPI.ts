import axios from 'axios';
import { IEntitiesResponse, IEntityDetailsResponse } from '../types';

export const StarWarsAPI = {
  baseUrl: 'https://swapi.dev/api',
  async getEntitiesData<T>(
    slug: string,
    pageNumber?: string,
  ): Promise<IEntitiesResponse<T>> {
    const { data } = await axios.get<IEntitiesResponse<T>>(
      `${this.baseUrl}/${slug}${pageNumber ? `/?page=${pageNumber}` : ''}`,
    );
    return data;
  },
  async getEntityDetails<T>(
    id: number,
    type: string,
  ): Promise<IEntityDetailsResponse<T>> {
    const { data } = await axios.get<IEntityDetailsResponse<T>>(
      `${this.baseUrl}/${type}/${id}/`,
    );
    return data;
  },
  async getRelatedData<T>(url: string): Promise<IEntityDetailsResponse<T>> {
    const { data } = await axios.get<IEntityDetailsResponse<T>>(url);
    return data;
  },
};
