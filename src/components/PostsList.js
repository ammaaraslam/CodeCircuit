import React, { Fragment } from 'react'

import useSiteMetadata from '../hooks/use-site-config'
import styled from 'styled-components'
import PostsListItem from './PostsListItem'

const PostListLayout = styled.ul`
  padding: 0;
  list-style: none;
  display: grid;
  justify-items: center;
  grid-gap: 50px;
  grid-template-columns: repeat(2, 1fr);
`


const PostsList = ({ posts }) => {
  const PostList = posts.map(post => {
    const { defaultLang } = useSiteMetadata()
    const props = {
      title: post.node.frontmatter.title,
      excerpt: post.node.excerpt,
      slug: post.node.frontmatter.slug,
      timeToRead: post.node.timeToRead,
      cover: post.node.frontmatter.cover,
      language: post.node.frontmatter.language || defaultLang,
      tags: post.node.frontmatter.tags || [],
    }
    
    return ( 
      <PostsListItem key={props.slug} {...props} />            


    )});

  return (
      <PostListLayout type='button'>{PostList}</PostListLayout>
  );

  // const PostList = posts.map(({ frontmatter, fields, excerpt, timeToRead }) => {
  //   const { title, tags, date, description } = frontmatter;
  //   const { slug } = fields;

  //   return (
  //     <PostsListItem
  //       key={slug}
  //       tags={tags}
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
  // //           tags: post.node.frontmatter.tags || [],
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
export default PostsList
