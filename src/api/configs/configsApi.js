import { get } from '../baseApi';

export const getSearchBarConfig = async () => {
  const res = await get('/properties/v1/public/properties/config-searchbar');
  return res;
};

export default getSearchBarConfig;
