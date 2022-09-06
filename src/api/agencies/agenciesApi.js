import { post } from '../baseApi';

export const startNewAgency = async (data) => {
  const res = await post('/agencies/v1/public/agencies/start', data);
  return res;
};
