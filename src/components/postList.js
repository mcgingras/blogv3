import React from 'react';

/**
 * 
 * PostList
 * -- component for rendering the list of posts in the main page
 */
const PostList = (props) => {

  const colorList = [
    'Sun'
    // 'CornflowerBlue',
    // 'SlateGrey',
    // 'SteelBlue',
    // 'Navy',
    // 'RosyBrown',
    // 'Orange',
    // 'SeaGreen',
    // 'DarkGoldenRod',
    // 'DarkRed',
    // 'ForestGreen',
    // 'OrangeRed'
  ]


  props.posts.sort(function(a,b){
    return new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date);
  });


  return (
    
    <div>
      <div className='post--container--header'>
        <p className='desktop-only' style={{flex: 1}}>Date</p>
        <p className='desktop-only' style={{flex: 2}}>Title</p>
        <p className='desktop-only' style={{flex: 1}}>Type</p>
        <p className='mobile-only' style={{flex: 1}}>Recent Posts</p>
      </div>
      {props.posts.map((post, i) => {
        post = post.node.frontmatter;
        const color = colorList[Math.floor(Math.random()*colorList.length)]
        const newDate = new Date(post.date.split(' ')[0]);
        return (
          <a 
            className='post--container'
            href={post.path}>
              <p style={{flex: 1}} className={color, 'desktop-only'}>{newDate.toString().substring(3,15)}</p>
              <p style={{flex: 2}} className={color}>{post.title}</p>
              <p style={{flex: 1}} className={color, 'desktop-only'}>({post.tags})</p>
          </a>
        )
      })}
    </div>
  )
}

export default PostList;
