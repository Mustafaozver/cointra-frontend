import { get, put } from '../baseApi';

export const getUserInfos = async () => {
  const res = await get('/users/v1/user/');
  return res;
};

export const updateProfile = async (data) => {
  const res = await put('/users/v1/user/profile', data);
  return res;
};

export const updatePassword = async (data) => {
  const res = await put('/users/v1/user/password', data);
  return res;
};
