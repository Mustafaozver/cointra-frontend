import React from 'react';
import { getBlogPosts } from '../../../src/api/blogs/postsApi';

import BlogPage from '../../../src/pages/blog/BlogPage';

export async function getServerSideProps(context) {
  const { query } = context;
  const posts = await getBlogPosts({ category: 'guide', page: query.page || 1 });

  return {
    props: {
      posts: posts.posts,
      paginationData: posts.stats,
    },
  };
};

export default (props) => {
  const { posts, paginationData } = props;

  return (<BlogPage
    posts={posts}
    paginationData={paginationData}
    title="Guide"
    baseUrl="/en/guides/"
  />);
};
