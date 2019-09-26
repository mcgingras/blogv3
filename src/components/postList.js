import React from 'react';
import { Link } from "gatsby"


const postList = (props) => {
  return (
    <div className="pb-6">
      <h6 className="table--header">{props.title}</h6>
      {props.posts.map((post) => {
        post = post.node.frontmatter;
        console.log(post);
        return (
          <a className="post--container" href={post.path}>
          <p className="post--date col col-2">{post.date.substring(0,10)}</p>
          <p className="post--title">{post.title}</p>
          </a>
        )
      })}
    </div>
  )
}

export default postList;
