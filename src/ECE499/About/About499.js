import React, { Component } from 'react';

//import components
import Navtop499 from '../../Navtop/Navtop499';
import { Title, Subtitle, Footer, CarouselHome } from '../../PageComponents/PageComponents';
import { Display, Citations } from '../Components/Display';
import Textbox1 from '../Components/Textbox1';
import { Button, Container, Row, Col, Collapse, CardBody, Card} from 'reactstrap';

import '../../css/generic.css';
import '../css/ece499.css';



class About499 extends Component{
	render(){
		return(
			<div>
				<Display />
				<Navtop499 />
				<br/>
				<br/>


				<Container>
				<Row>
					<Col>
					</Col>
					<Col>
						<h3>THE GOAL</h3>
						<br/>
						<div className="center">
						<img className="img1 img-responsive center-block" src={require('../../images/lock.png')} />
						</div>
					</Col>
					<Col>
					</Col>
				</Row>
				<br/>
				<br/>
				<Row>
					<div className="slogan">
					<h4 className="grey">
						This visual encryption project attempts to apply a secondary form of encryption to visual
						data on a device's screen, and decrypt it in real time through the use of a camera.
					</h4>
					</div>
				</Row>

				<div className="line"></div>
				<br/>

				<h3>THE VISION</h3>

				<Row>
					<Col>
					</Col>
					<Col>
						<br/>
						<div className="center">
						<img className="img1 img-responsive center-block" src={require('../../images/mind.png')} />
						<br/>
						</div>
					</Col>
					<Col>
					</Col>
				</Row>

				<br/>
				<Row>
					<div className="slogan">
					<h5>
						The ability to point a camera at an encrypted image or display, and have it decrypted to you in real time with the goal of
						using smaller embedded systems allowing portability and user-friendly interfaces.
					</h5>
					<br/>
					<div className="center">
						<img className="img2 img-responsive center-block" src={require('../../images/Picture1.png')} />
					</div>
					<br/>
					<h5>
						In the future, the system would be optimized to operate on low power embedded systems such as a smart phone or headset such as Google Glass, allowing
						a smartphone camera to be pointed at an image, and have the decrypted output displayed to the user.					
					</h5>
					</div>

					<br/>
					<br/>

				</Row>

				<div className="line"></div>

				<h3>ACKNOWLEDGEMENTS</h3>
				<br/>
				<h5>
				Thank you to the University of Victoria for providing us an opportunity to apply our knowledge and skills obtained throughout our degree. The ECE 499 project would not have been possible without the guidance of our faculty supervisor, Dr. Wu-Sheng Lu, course coordinator, Dr. Ilamparithi Chelvan and all other staff and faculty members who worked behind the scenes.
				</h5>

				<div className="line"></div>
				<br/>
				<Citations />





				</Container>
				
				<Footer />
			</div>
		);
	}
}

export default About499;