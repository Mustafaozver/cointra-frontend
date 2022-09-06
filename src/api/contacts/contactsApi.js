import { post } from '../baseApi';

export const contactUs = async (data) => {
  const res = await post('/contacts/v1/public/contacts/contact-us', data);
  return res;
};
