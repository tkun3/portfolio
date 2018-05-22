import React, { Component } from 'react';

//Import Components
import Navtop from '../Navtop/Navtop';
import { Title, Subtitle, Footer, CarouselHome } from '../PageComponents/PageComponents';
import { Table, Container, Row, Col, Media } from 'reactstrap';

import '../css/generic.css';


/*
							<Table dark striped bordered size="sm">
						        <thead>
						          <tr>
						            <th>#</th>
						            <th>Top 3 Games List</th>
						          </tr>
						        </thead>
						        <tbody>
						          <tr>
						            <th scope="row">1</th>
						            <td>Monster Hunter 3</td>
						          </tr>
						          <tr>
						            <th scope="row">2</th>
						            <td>Monster Hunter 2G</td>
						          </tr>
						          <tr>
						            <th scope="row">3</th>
						            <td>Monster Hunter Generations</td>
						          </tr>
						        </tbody>
						      </Table>
						      */




class About extends Component {
	render(){
		return(
			<div>
				<Navtop />
				<div className="container">
					<br /><br /><br />
					<CarouselHome />
					<Title title="About me" />
					<p>
						I'm a 4th year Computer Engineering student at the University of Victoria. I loved drawing and designing any number of things since I was young and was lucky enough to figure out my passion for engineering near the end of high school. Since then I've been polishing and gathering new skills to further my career in the tech world with various personal and group projects pursued with friends.
						I love web development and high level UI design, and designing/building systems that can be utilized to interact with the real world. 
                 		<br /><br />
	                    I gathered some experience working for a private school's technology department as a summer job, which lead to the opportunity to work part-time at a tech company called PARC Systems inc. which I am currently working at alternating between
	                    both full and part time.
	               	
                   		I'm happy to be in a field surrounded by technology and the limitless future it offers.
                    </p>
					<Title title="Hobbies" />
					<Subtitle title="Music"/>
					<Row>
						<Col lg="10">
							<p>
								Growing up I (reluctantly) played classical music on the piano, eventually leading to my "Rock" phase and switching over to guitar. Guitar was how I fell in love with music. My friends and I would 
								get together to play, jamming, making covers, and record music day in and day out. As my love of music grew I rediscovered the beauty of classical music. Since then I've slowly cultivated a
								small collection of instruments which I play as often as I can.
							</p>
							<Subtitle title="Games and Technology"/>
							<p>
								I've loved technology and games since I can remember, with the first interaction being on the classic Gameboy playing mario. I owned most of the consoles as they came out, and since I was so busy
								with so many extracurricular activites, I savored and loved the time I would have alone with consoles. I would wake up early to play Star Fox Adventures, Soul Caliber, and hunt 
								monsters on games like Monster Hunter (Co-op play on the PSP was the best).
								Growing up in a MAC house I never had a PC, so I never was able to experience the PC gaming until the last year of highschool, where my friends convinced me to build one with them. I have never looked back
								since (with the exception of innovative consoles like the Nintendo Switch) and have been a PC gamer since. Though its hard to find time to game regularly now, my most played game at the moment is CS:GO. Aside from gaming I love
								all forms of technology, and enjoy staying up to date with the most recent iterations of computer hardware, cellphones, laptops, etc.
							</p>
						</Col>
						<Col >
							<img className="rounded mx-auto d-block guitar" src={require('../images/guitar.jpg')}/>
						</Col>
					</Row>
					<Subtitle title="Sports"/>
					<p>
						I was really involved as a kid, and figure skated competetively for years, while also doing soccer, track, swimming and kendo. As I got older I slowly grew out of them, but still love the outside and enjoy hiking
						with friends and kicking the ball around. I currently enjoy weight-lifting, the occasional badminton and good ol' soccer.
					</p>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default About;

