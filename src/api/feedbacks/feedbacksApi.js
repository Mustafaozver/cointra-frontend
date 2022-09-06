import { post } from '../baseApi';

export const postFeedback = async (rate) => {
  const res = await post('/feedback/v1/public/feedback', { rate });
  return res;
};

export default postFeedback;
