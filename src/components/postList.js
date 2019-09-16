import React from 'react';
import { Link } from "gatsby"


const postList = ({posts}) => {
  return (
    <div className="pb-6">
      <h6 className="table--header">BLOG POSTS</h6>
      {posts.map((post) => {
        post = post.node.frontmatter;
        console.log(post);
        return (
          <a className="post--container" href={post.path}>
          <p className="post--date">{post.date}</p>
          <p className="post--title">{post.title}</p>
          </a>
        )
      })}
    </div>
  )
}

export default postList;
