import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

var elHeight		= 0,
     elTop			= 0,
    dHeight			= 0,
    wHeight			= 0,
wScrollCurrent	= 0,
  wScrollBefore	= 0,
  wScrollDiff		= 0,
 elNarrowOffset = 96;

 function StickyHeader() {

   const data = useStaticQuery(graphql`
     query LogoQuery {
       file(relativePath: { eq: "logo.png" }) {
         childImageSharp {
           # Specify the image processing specifications right in the query.
           # Makes it trivial to update as your page's design changes.
           fixed(width: 50) {
             ...GatsbyImageSharpFixed_noBase64
           }
         }
       }
     }
   `)

   console.log(data);

  /*
     NOTE:
     All of the following is for the sticky header.
     just some javascript to monitor the scroll position and hide or show
     depending on direction and height of the current page.

     end.
  */
  const sticky = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  function hasElementClass( element, className ){ return element.classList ? element.classList.contains( className ) : new RegExp( '(^| )' + className + '( |$)', 'gi' ).test( element.className ); }
  function addElementClass( element, className ){ element.classList ? element.classList.add( className ) : element.className += ' ' + className; }
  function removeElementClass( element, className ){ element.classList ? element.classList.remove( className ) : element.className = element.className.replace( new RegExp( '(^|\\b)' + className.split( ' ' ).join( '|' ) + '(\\b|$)', 'gi' ), ' ' ); };

  function handleScroll(){
    var element = sticky.current;
    var child = element.children[0];

  	 elHeight		= element.offsetHeight;
  	 dHeight			= document.body.offsetHeight;
  	 wHeight			= window.innerHeight;
  	 wScrollCurrent	= window.pageYOffset;
  	 wScrollDiff		= wScrollBefore - wScrollCurrent;
  	 elTop			= parseInt( window.getComputedStyle( element ).getPropertyValue( 'top' ) ) + wScrollDiff;

    //  to toggle the narrow
     if( wScrollCurrent > elNarrowOffset ) {
         if( !hasElementClass( element, 'narrow' ) ) {
             addElementClass( element, 'narrow' );
           }
     }
     else{
       removeElementClass( element, 'narrow' );
     }

    // scrolled to the very top; element sticks to the top
    if( wScrollCurrent <= 0 ) {
        element.style.top = '0px';
    }

    // scrolled up; element slides in
    else if( wScrollDiff > 0 ) {
        element.style.top = ( elTop > 0 ? 0 : elTop ) + 'px';
    }

    // scrolled down
    else if( wScrollDiff < 0 )
    {
        // scrolled to the very bottom; element slides in
        if( wScrollCurrent + wHeight >= dHeight - elHeight )
            element.style.top = ( ( elTop = wScrollCurrent + wHeight - dHeight ) < 0 ? elTop : 0 ) + 'px';

        // scrolled down; element slides out
        else
            element.style.top = ( Math.abs( elTop ) > elHeight ? -elHeight : elTop ) + 'px';
    }

    wScrollBefore = wScrollCurrent;
  }

    return (
      <div className="sticky" ref={sticky}>
        <div className='container flex space-between align-center nav'>
          <a href="/"><Img fixed={data.file.childImageSharp.fixed} /></a>
          <div className="flex space-between hide--mobile">
            <a href="/blog" className="nav--item">Blog</a>
            <a href="/about" className="nav--item">About</a>
            <a href="/map" className="nav--item">Map (beta)</a>
          </div>
        </div>
      </div>
    )
 }


export default StickyHeader;
