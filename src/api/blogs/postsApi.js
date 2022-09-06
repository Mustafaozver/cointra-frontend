import { get } from '../baseApi';

export const getBlogPostBySlug = async (slug) => {
  const res = await get(`/blogs/v1/public/posts/${slug}`);
  return res;
};

export const getBlogPosts = async (params) => {
  const res = await get('/blogs/v1/public/posts', params);
  return res;
};
