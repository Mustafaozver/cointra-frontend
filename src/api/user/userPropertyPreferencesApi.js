import { get, post } from '../baseApi';

export const getUserPropertyPreferences = async () => {
  const res = await get('/users/v1/user/userPropertyPreferences');
  return res;
};

const emptyData = {
  bedrooms: '',
  businessType: '',
  category: 0,
  locations: '',
  priceMax: 'Any',
  priceMin: '0',
  propertyTypes: '',
  sizeMax: 'Any',
  sizeMin: '0',
};

export const updateUserPropertyPreferences = async (data) => {
  const res = await post('/users/v1/user/userPropertyPreferences', { ...emptyData, ...data });
  return res;
};
