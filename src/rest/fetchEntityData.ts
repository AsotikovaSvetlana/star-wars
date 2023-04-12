import { StarWarsAPI } from '@/src/api/StarWarsAPI';

export const fetchEntityData = async <T extends object>(
  id: number,
  type: string,
) => {
  try {
    const response = await StarWarsAPI.getEntityDetails<T>(id, type);
    return response;
  } catch (err) {
    return null;
  }
};
