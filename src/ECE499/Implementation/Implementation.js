import React, {Component} from 'react';

import '../../css/generic.css';
import '../css/ece499.css';

import Navtop499 from '../../Navtop/Navtop499';
import {DisplayGeneric, Footer} from '../Components/Display';
import {Container} from 'reactstrap';

import "../../../node_modules/video-react/dist/video-react.css";

import { Player } from 'video-react';


class Implementation extends Component{
	render(){
		return(

			<div>
				<DisplayGeneric />
				<Navtop499 />
				<Container>
					<div>
						<div className="playerCon center1">
						<br/>
							<Player muted="true" ref="player">
								<source src={require('../../images/demo.mp4')} />


							</Player>
						</div>
						<br/>

						<h4 className="grey">
							The leftside of the video is an encrypted video file, and the right side is the decrypted output done in real-time.
							The input video is skipped forward and back showing the real-time nature of the process.
						</h4>

						
						<div className="line"></div>
						<h3> COMPLEXITY </h3>
						<br/>
						<div class="center">
							<img className="rail img-responsive center-block" src={require('../../images/rail.png')} />
						</div>
						<br/>
						<br/>
						<h4 className="grey">
							As the gridding count increases, the encryption complexity also increases, making the image difficult to visually identify.
							The above is an example of a higher amount of pseudo pixels (the green boxes) and the decrypted counter-part on the right side.
						</h4>
						<br/>
						<div className="line"></div>

						<h3> PERFORMANCE </h3>
						<br/>
						<h4 className="grey">
							
							Encrypting the data before it’s displayed takes an average time of 0.061 seconds per frame (or image), once the data is captured by the receiver it is processed for the decrypting. The decryption (including processing) takes an average time of 0.095 seconds per frame (or image). Overall, this achieves a total processing performance of 9 frames per second allowing a user to watch videos at a low frame rate.						
							Having said this performance is significantly hampered at the moment due to the speed limitations within matlab, and can be further optimized
							by converting the code to a language such as C or C++, with utilizations of parallelization libraries such as openMP.
						</h4>



					</div>
				</Container>
				<Footer />

			</div>
		);
	}
}


export default Implementation;