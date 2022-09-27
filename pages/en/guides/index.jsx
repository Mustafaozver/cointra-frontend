import React from 'react';
import Head from 'next/head';

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

  return (
    <>
      <Head>
        <title>Area guides: Dubai, Abu Dhabi and UAE | Zeekeez</title>
        <meta name="description" content="UAE’s Real Estate area guides by Zeekeez to choose the best neighborhoods to live in Dubai, Abu Dhabi, lifestyle, community, amenities, transportation, schools..."/>
      </Head>
      <BlogPage
        posts={posts}
        paginationData={paginationData}
        title="Guide"
        baseUrl="/en/guides/"
      />
    </>
  );
};
