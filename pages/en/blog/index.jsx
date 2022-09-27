import React from 'react';
import Head from 'next/head';
import { getBlogPosts } from '../../../src/api/blogs/postsApi';

import BlogPage from '../../../src/pages/blog/BlogPage';

export async function getServerSideProps(context) {
  const { query } = context;
  const posts = await getBlogPosts({ category: 'blog', page: query.page || 1 });

  return {
    props: {
      posts: posts.posts,
      paginationData: posts.stats,
    },
  };
};

export default (props) => {
  const { posts, paginationData } = props;

  return (
    <>
      <Head>
        <title>Best UAE Real Estate Blog: homes, property market | Zeekeez</title>
        <meta name="description" content="UAE’s Real Estate blog about property market analysis, trends, property loans, Real Estate experts, and all UAE’s Property Market news."/>
      </Head>
      <BlogPage
        posts={posts}
        paginationData={paginationData}
        title="Blog"
        baseUrl="/en/blog/"
      />
    </>);
};
