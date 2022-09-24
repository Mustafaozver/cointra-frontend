
import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './BlogPage.module.scss';

import { MyPZButton, MyPZContainer, MyPZPagination } from '../../mypzkit';
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

const BlogPage = (props) => {
  const {
    posts,
    paginationData,
    baseUrl,
    title,
  } = props;
  const router = useRouter();

  const renderPost = (post) => {
    return (
      <div className={styles['page-blog__post']} key={post.id}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />
        <Link href={`${baseUrl}${post.slug}`} passHref>
          <a>
            <div className={styles['page-blog__post-header']}>
              <img src={post.miniatureImageUrl} />
              
            </div>
            <div className={styles['page-blog__post-content']}>
              <div className={styles['page-blog__post-title']}>{post.title}</div>
              <div className={styles['page-blog__post-short-description']} title={post.shortDescription}>{post.shortDescription}</div>
              <div>
                <div className={styles['page-blog__post-minute-to-read']}>{post.minutesToRead} minutes</div>
                <div className={styles['page-blog__post-action']}>
                  <div className={styles['page-blog__post-published-at']}>{moment(post.publishedAt).format('DD MMMM YYYY')}</div>
                  <div><MyPZButton>Read more</MyPZButton></div>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    );
  };

  const renderPosts = () => {
    return (<div className={styles['page-blog__posts']}>
      {posts.map(renderPost)}
    </div>);
  };

  return (<div className={styles['page-blog']}>
    <MyPZContainer>
      <NavigationBar Paths={[
        { Path: 'Home', Url: '/' },
        { Path: title, Url: '/en/' + title },
      ]}></NavigationBar>
      <h1>{title}</h1>
      {renderPosts()}
      <div className={styles['page-blog__pagination']}>
        <MyPZPagination
          maxPage={paginationData.totalPages}
          currentPage={paginationData.currentPage}
          baseUrl={router.asPath}
        />
      </div>
    </MyPZContainer>
  </div>);
};
  
export default BlogPage;