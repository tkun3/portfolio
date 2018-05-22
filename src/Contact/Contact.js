import React, { Component } from 'react';

//Import components
import Navtop from '../Navtop/Navtop';
import { Title, Subtitle, Footer, CarouselHome, Project, Projectv1, SimpleProjectDisplay, Modal1, ContactBox} from '../PageComponents/PageComponents';

import '../css/generic.css';


class Contact extends Component{


	render(){
		const email = ["tpimlott@uvic.ca","tapimlott@live.ca"];
		return(
			<div className="container">
				<br /><br /><br />
				<Navtop />
				<Title title="Contact" />
				<ContactBox name="Takuma Pimlott" email={email}/>
				<Footer />
			</div>
		);	
	}
}

export default Contact;