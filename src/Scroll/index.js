// https://kempsterrrr.xyz/articles/handling-scroll-events-in-react

import React, { Component } from 'react';


class ScrollTest extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }


  handleScroll = (e) => {
  	console.log('e: ', e);
    let element = e.target;
    console.log('element: ', element);
    console.log('element.scrollHeight: ', element.scrollHeight);// fixed...this is the height in pixels of the elements content, including content not visible on the screen due to css overflow.
    console.log('element.scrollTop: ', element.scrollTop);// variable...the height in pixels that an element's content is scrolled vertically.
    console.log('element.clientHeight: ', element.clientHeight);// fixed...the height in pixels of the scrollable part of the element.
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // do something at end of scroll
      alert('This element hit the bottom of the scroll');
		
    }
  }

  render() {
    return (
        <React.Fragment>
        <style>
			{`
				body {
				  overflow: visible;
				}

				.content-container {
					width: 250px;
					height: 250px;
					border: 2px solid blue;
					overflow: auto;
				}
			`}
        </style>

			<div className="content-container" onScroll={this.handleScroll}>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate, massa eget dapibus hendrerit, lorem purus congue odio, at consequat leo lacus at felis. Ut imperdiet metus condimentum dignissim suscipit. Donec sapien neque, fringilla et pretium eget, vehicula nec tortor. Sed nec commodo purus. Pellentesque mattis convallis lacus, ac mollis eros finibus sit amet. Sed id massa malesuada, porttitor augue condimentum, tincidunt turpis. Nam suscipit vel arcu ut ornare. Pellentesque consectetur maximus quam, semper malesuada purus vehicula id. Duis condimentum mauris eget arcu lobortis cursus. Proin imperdiet porta auctor. Pellentesque scelerisque semper justo, vitae bibendum nulla dignissim nec. Fusce tortor leo, porta at ex non, tincidunt accumsan nisi. Phasellus iaculis, velit vitae scelerisque vehicula, sapien libero tincidunt diam, eu condimentum enim ligula vitae nunc. Morbi in feugiat enim, sit amet vestibulum lacus.</p>

				<p>In nec magna imperdiet, fermentum dui ac, lobortis velit. Nulla dictum diam nec nibh euismod, quis tincidunt nulla vulputate. Pellentesque rutrum, neque eget dignissim fermentum, est lectus suscipit justo, eu vestibulum nisi sapien eget lacus. Sed libero elit, volutpat id sem id, euismod dictum nibh. Vivamus lectus turpis, venenatis et diam ac, mattis egestas justo. Mauris sed est mollis, condimentum justo quis, molestie nibh. Nulla congue nisi sit amet felis tristique, id euismod sem pharetra. Nam placerat, elit a aliquet efficitur, orci libero consequat felis, ut tincidunt orci libero in urna. Ut suscipit lectus magna, et molestie purus luctus sed. Nulla luctus ante quis sapien tincidunt maximus. Praesent posuere nulla vitae pulvinar iaculis. Donec mollis mattis velit, id euismod mi varius ac. Etiam viverra, risus non ullamcorper interdum, justo justo feugiat sapien, rutrum ultricies tellus quam non magna.</p>
			</div>
		</React.Fragment>
    )
  }
}

export default ScrollTest;
