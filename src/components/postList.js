import React from 'react';

/**
 * 
 * PostList
 * -- component for rendering the list of posts in the main page
 */
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
        const newDate = new Date(post.date.split(' ')[0]);
        return (
          <a 
            className='post--container'
            href={post.path}>
              <p className={color}>{newDate.toString().substring(3,15)}</p>
              <p className={color}>{post.title}</p>
              <p className={color}>({post.tags})</p>
          </a>
        )
      })}
    </div>
  )
}

export default PostList;
