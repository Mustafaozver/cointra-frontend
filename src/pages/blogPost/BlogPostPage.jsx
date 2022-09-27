/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from './BlogPostPage.module.scss';

import { MyPZContainer } from '../../mypzkit';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

const schemaJson = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zeekeez',
  url: 'https://www.zeekeez.com',
  logo: 'https://www.zeekeez.com/images/zeekeez-logo-black.svg',
  description: 'Zeekez.com is the 1st UAE’s Property Portal for people to explore, research and share their interests for the UAE property market.',
  telephone: '+97145781335',
  foundingDate: '2022',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+97145781335',
    contactType: 'customer service',
    areaServed: 'AE',
    availableLanguage: ['en', 'ar']
  },
  sameAs: [
    'https://www.facebook.com/people/Zeekeez/100079499966747/',
    'https://www.instagram.com/zeekeez_official/',
    'https://www.linkedin.com/company/zeekeez',
    'https://www.zeekeez.com/'
  ]
};

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
  schemaJson.description = postDetail.Name;
  return (<div className={styles['page-blog-post']}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />
    <MyPZContainer>
      <NavigationBar
        Paths={[
          { Path: 'Home', Url: '/' },
          { Path: postDetail.Path, Url: postDetail.Url },
          { Path: postDetail.Name, Url: postDetail.Name },
        ]}
      ></NavigationBar>
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