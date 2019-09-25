import React from 'react';

var elHeight		= 0,
     elTop			= 0,
    dHeight			= 0,
    wHeight			= 0,
wScrollCurrent	= 0,
  wScrollBefore	= 0,
  wScrollDiff		= 0,
 elNarrowOffset = 96;

class StickyHeader extends React.Component {

  constructor(props){
    super(props);
    this.sticky = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  hasElementClass( element, className ){ return element.classList ? element.classList.contains( className ) : new RegExp( '(^| )' + className + '( |$)', 'gi' ).test( element.className ); }
	addElementClass( element, className ){ element.classList ? element.classList.add( className ) : element.className += ' ' + className; }
  removeElementClass( element, className ){ element.classList ? element.classList.remove( className ) : element.className = element.className.replace( new RegExp( '(^|\\b)' + className.split( ' ' ).join( '|' ) + '(\\b|$)', 'gi' ), ' ' ); };

  handleScroll(){
     var element = this.sticky.current;
     var child = element.children[0];

		 elHeight		= element.offsetHeight;
		 dHeight			= document.body.offsetHeight;
		 wHeight			= window.innerHeight;
		 wScrollCurrent	= window.pageYOffset;
		 wScrollDiff		= wScrollBefore - wScrollCurrent;
		 elTop			= parseInt( window.getComputedStyle( element ).getPropertyValue( 'top' ) ) + wScrollDiff;


     // to toggle the narrow
     if( wScrollCurrent > elNarrowOffset ) {
         if( !this.hasElementClass( element, 'narrow' ) ) {
             this.addElementClass( element, 'narrow' );
           }
     }
     else{
       this.removeElementClass( element, 'narrow' );
     }



    if( wScrollCurrent <= 0 ) { // scrolled to the very top; element sticks to the top
        element.style.top = '0px';
    }

    else if( wScrollDiff > 0 ) { // scrolled up; element slides in
        element.style.top = ( elTop > 0 ? 0 : elTop ) + 'px';
        console.log("scrolling up");
    }

    else if( wScrollDiff < 0 ) // scrolled down
    {
        if( wScrollCurrent + wHeight >= dHeight - elHeight )  // scrolled to the very bottom; element slides in
            element.style.top = ( ( elTop = wScrollCurrent + wHeight - dHeight ) < 0 ? elTop : 0 ) + 'px';

        else // scrolled down; element slides out
            element.style.top = ( Math.abs( elTop ) > elHeight ? -elHeight : elTop ) + 'px';
    }

    wScrollBefore = wScrollCurrent;
  }

  render() {
    return (
      <div className="sticky" ref={this.sticky}>
        <div className='container flex space-between align-center nav'>
          <a href="/">M's Studio</a>
          <div className="flex space-between hide--mobile">
            <a href="/blog" className="nav--item">Blog</a>
            <a href="/about" className="nav--item">About</a>
          </div>
        </div>
      </div>
    )
  }
}

export default StickyHeader;
