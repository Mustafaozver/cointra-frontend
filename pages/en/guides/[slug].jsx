import React from 'react';
import Head from 'next/head';

import BlogPostPage from '../../../src/pages/blogPost/BlogPostPage';
import { getBlogPostBySlug } from '../../../src/api/blogs/postsApi';

export async function getServerSideProps(context) {
  const post = await getBlogPostBySlug(context.params.slug);

  return {
    props: {
      post: post.post,
    },
  };
};

export default (props) => {
  const { post } = props;

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.metaDescription} />
      </Head>
      <BlogPostPage post={post} />
    </>
  );
}
