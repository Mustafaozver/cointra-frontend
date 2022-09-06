import React from 'react';

import styles from './BlogPostPage.module.scss';

import { MyPZContainer } from '../../mypzkit';

const BlogPostPage = (props) => {
  const { post } = props;

  return (<div className={styles['page-blog-post']}>
    <MyPZContainer>
      <h1>{post.title}</h1>
      <div className={styles['page-blog-post__header']}>
        <img src={post.coverImageUrl} alt={post.title} />
      </div>
      <div
        className={styles['page-blog-post__container']}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      />
    </MyPZContainer>
  </div>);
};
  
export default BlogPostPage;