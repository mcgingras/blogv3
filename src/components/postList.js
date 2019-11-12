import React, {useState} from 'react';

const PostList = (props) => {

  const colorList = [
    'CornflowerBlue',
    'SlateGrey',
    'SteelBlue',
    'Navy',
    'RosyBrown',
    'Orange',
    'SeaGreen',
    'DarkGoldenRod',
    'DarkRed',
    'ForestGreen',
    'OrangeRed'
  ]

  return (
    <div>
      {props.posts.map((post, i) => {
        post = post.node.frontmatter;
        const color = colorList[Math.floor(Math.random()*colorList.length)]
        return (
          <a 
            className='post--container'
            href={post.path}>
              <p className={color}>{post.date.substring(0,10)}</p>
              <p className={color}>{post.title}</p>
              <p className={color}>(blog)</p>
          </a>
        )
      })}
    </div>
  )
}

export default PostList;
