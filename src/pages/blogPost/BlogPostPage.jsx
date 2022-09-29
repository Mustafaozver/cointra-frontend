/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from './BlogPostPage.module.scss';

import { MyPZContainer } from '../../mypzkit';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

const BlogPostPage = (props) => {
  const { post } = props;
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
  const schemaJson_BlogPosting = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.zeekeez.com' + postDetail.Url + '/' + post.slug,
    },
    headline: post.title,
    description: post.metaDescription,
    image: post.coverImageUrl,
    author: { // who is outhor
      '@type': 'Organization', // or zeekeez
      name: 'Zeekeez',
      url: 'https://www.zeekeez.com/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zeekeez',
      url: 'https://www.zeekeez.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.zeekeez.com/images/zeekeez-logo-black.svg'
      }
    },
    datePublished: (new Date(post.publishedAt)).toLocaleDateString().split('.').reverse().join('-'),
    dateModified: (new Date(post.updatedAt)).toLocaleDateString().split('.').reverse().join('-'),
  };
  console.log(schemaJson_BlogPosting);
  return (<div className={styles['page-blog-post']}>
    <MyPZContainer>
      <NavigationBar
        Paths={[
          { Path: 'Home', Url: '/' },
          { Path: postDetail.Path, Url: postDetail.Url },
          { Path: postDetail.Name, Url: postDetail.Name },
        ]}
      ></NavigationBar>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson_BlogPosting) }} />
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