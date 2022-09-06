import { get, post } from '../baseApi';

export const getProperties = async (filters = {}) => {
  const res = await get('/properties/v1/public/properties', filters);
  return res;
};

export const getProperty = (slug) => get(`/properties/v1/public/properties/${slug}`);

export const getPropertyPhone = (slug) => get(`/properties/v1/public/properties/${slug}/phone`);

export const getPropertyEmail = (slug) => get(`/properties/v1/public/properties/${slug}/email`);

export const contactAgent = (params) => post('/properties/v1/public/properties/contact-agent', params);
