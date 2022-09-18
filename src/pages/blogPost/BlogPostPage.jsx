/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from './BlogPostPage.module.scss';

import { MyPZContainer } from '../../mypzkit';
import NavBar from '../../components/navbar/navbar';

const BlogPostPage = (props) => {
  const { post } = props;
  console.log(post);
  const postDetail = (()=>{
    switch (post.category.toLowerCase()) {
    case 'guide':
      return {
        Url: '/en/guides',
        Path: 'Guides',
        Name: post.title
      };
    default:
    case 'blog':
      return {
        Url: '/en/blog',
        Path: 'Blog',
        Name: post.title
      };
    }
  })();
  return (<div className={styles['page-blog-post']}>
    <MyPZContainer>
      <h1>{post.title}</h1>
      <NavBar
        Paths={[
          { Path: 'Home', Url: '/' },
          { Path: postDetail.Path, Url: postDetail.Url },
          { Path: postDetail.Name, Url: postDetail.Name },
        ]}
      ></NavBar>
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