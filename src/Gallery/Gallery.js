import React, { Component } from 'react';

//import components
import Navtop from '../Navtop/Navtop';
import { Title, Subtitle, Footer, CarouselHome } from '../PageComponents/PageComponents';

import '../css/generic.css';



class Gallery extends Component{
	render(){
		return(
			<div>
				<Navtop />
				<h1>Gallery</h1>
			</div>
		);
	}
}

export default Gallery;