import React, { Fragment } from 'react'

import useSiteMetadata from '../hooks/use-site-config'
import styled from 'styled-components'
import SeriesListItem from './SeriesListItem'

const SeriesListLayout = styled.ul`
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  display: grid;
  justify-items: center;
  grid-gap: 50px;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 420px) {
    & {
      margin-left: auto;
      margin-right: auto;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`


const AllSeriesList = ({ allSeries }) => {
  const SeriesList = allSeries.map(series => {
    const props = {
      title: series.node.frontmatter.title,
      excerpt: series.node.excerpt,
      slug: series.node.frontmatter.slug,
      cover: series.node.frontmatter.cover,
    }
    
    return ( 
      <SeriesListItem key={props.slug} {...props} />            


    )});

  return (
      <SeriesListLayout type='button'>{SeriesList}</SeriesListLayout>
  );

  // const PostList = posts.map(({ frontmatter, fields, excerpt, timeToRead }) => {
  //   const { title, topics, date, description } = frontmatter;
  //   const { slug } = fields;

  //   return (
  //     <PostsListItem
  //       key={slug}
  //       topics={topics}
  //       title={title}
  //       date={date}
  //       slug={slug}
  //       timeToRead={timeToRead}
  //       description={description}
  //       excerpt={excerpt}
  //     />
  //   );
  // });

  // return <PostListLayout>{PostList}</PostListLayout>;

  // // const { defaultLang } = useSiteMetadata()

  // // return (

  // //     <Fragment>
  // //       {posts.map(post => {
  // //         const props = {
  // //           title: post.node.frontmatter.title,
  // //           excerpt: post.node.excerpt,
  // //           slug: post.node.frontmatter.slug,
  // //           timeToRead: post.node.timeToRead,
  // //           language: post.node.frontmatter.language || defaultLang,
  // //           topics: post.node.frontmatter.topics || [],
  // //         }
  // //         return ( 
  // //             <PostListLayout>
  // //               <PostsListItem key={props.slug} {...props} />
  // //               <PostsListItem key={props.slug} {...props} />
  // //             </PostListLayout>



              
  // //         )
  // //       })}
  // //     </Fragment>
}
export default AllSeriesList
