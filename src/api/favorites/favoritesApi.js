import { get, post, deleteRequest } from '../baseApi';

export const getFavorites = async () => {
  const res = await get('/properties/v1/user/properties/favorites');
  return res;
};

export const addPropertyToFavorites = async (propertyId) => {
  const res = await post('/properties/v1/user/properties/favorites', { propertyId });
  return res;
};

export const removePropertyToFavorites = async (propertyId) => {
  const res = await deleteRequest('/properties/v1/user/properties/favorites', { propertyId });
  return res;
};
