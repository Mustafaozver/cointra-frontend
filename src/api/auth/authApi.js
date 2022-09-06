import { post, get } from '../baseApi';

export const createEmailAccount = async (data) => {
  const res = await post('/auth/v1/public/users/create-with-email', data);
  return res;
};

export const forgotPassword = async (email) => {
  const res = await post('/auth/v1/public/users/forgot-password', {
    email,
  });
  return res;
};

export const verifyEmail = async (userId, token) => {
  const res = await post('/auth/v1/public/users/verify-email', {
    userId,
    token,
  });
  return res;
};

export const resetPassword = async (password, userId, token) => {
  const res = await post('/auth/v1/public/users/reset-password', {
    password,
    userId,
    token,
  });
  return res;
};

export const emailLogin = async (email, password) => {
  const res = await post('/auth/v1/public/users/email-login', {
    email,
    password,
  });
  return res;
};

export const authFacebook = async (accessToken) => {
  const res = await post('/auth/v1/public/users/login-user-facebook', { accessToken });
  return res;
};

export const authGoogle = async (accessToken) => {
  const res = await post('/auth/v1/public/users/login-user-google', { accessToken });
  return res;
};

export const getAppleLoginUri = async () => {
  const res = await get('/auth/v1/public/users/login-user-apple/redirect-uri');
  return res;
};

export default authFacebook;
