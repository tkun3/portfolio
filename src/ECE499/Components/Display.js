import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Collapse, CardBody, Card} from 'reactstrap';


export class Display extends Component{
	render(){
		return(
			<div class="display">
				<div class="titleContainer499">
					<h2>BRINGING DIGITAL CRYTPOGRAPHY TO THE REAL WORLD</h2>
					<br/>
					<Link to="/implementation">
					<Button size="lg" outline color="success"><a class="titleButton">Real-time Encryption & Decryption Demo</a></Button>
					</Link>
				</div>
		  	</div>
		);
	}
}



export class Footer extends Component{
	render(){
		return(
			<div className="footer">



			</div>
		);
	}

}

export class DisplayGeneric extends Component{
	render(){
		return(
			<div class="displayGeneric">
				<div class="titleContainer499Generic">
					<h2>Decryption and Encryption Implementation</h2>
					<br/>
					<Link to="/implementation">
					</Link>
				</div>
		  	</div>
		);
	}
}


export class Citations extends Component{
	constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className="center">
        <Button size="lg" outline color="success" onClick={this.toggle} style={{ marginBottom: '1rem' }}>References for Concepts and Implementation</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card style={{backgroundColor: '#343a40'}}>
            <CardBody>
[1] 	"Edge Detection," Mathworks.com, 2018. [Online]. Available: https://www.mathworks.com/discovery/edge-detection.html.<br/>
[2] 	I. Sobel, "An Isotropic 3x3 Image Gradient Operator," in Presentation at Standford A.I. Project, Stanford, 1968. <br/>
[3] 	R. Fisher, S. Perkins, A. Walker and E. Wolfart, "Feature Detectors - Sobel Edge Detector," 2003. [Online]. Available: http://homepages.inf.ed.ac.uk/rbf/HIPR2/sobel.htm.<br/>
[4] 	R. Deriche, "Using Canny's criteria to derive a recursively implemented optimal edge detector," International Journal of Computer Vision, vol. 1, no. 2, pp. 167-187, 1987. <br/>
[5] 	U. Sinha, "The Canny Edge Detector: Introduction the edge detector - AI Shack," AI Shack, 2018. [Online]. Available: http://www.aishack.in/tutorials/canny-edge-detector/.<br/>
[6] 	R. Wang, Canny Edge Detection, Claremont: Harvey Mudd College, 2013. <br/>
[7] 	"Detecting a Cell Using Image Segmentation- MATLAB & Simulink Example," Mathworks.com, 2018. [Online]. Available: https://www.mathworks.com/help/images/examples/detecting-a-cell-using-image-segmentation.html.<br/>
[8] 	"Boundary Tracing in Images- MATLAB & Simulink," Matworks.com, 2018. [Online]. Available: https://www.mathworks.com/help/images/boundary-tracing-in-images.html.<br/>
[9] 	"Trace region boundaries in binary image - MATLAB bwboundaries," Matworks.com, 2018. [Online]. Available: https://www.mathworks.com/help/images/ref/bwboundaries.html.<br/>
[10] 	Alabama University, School of Fisheries, Aquaculture and Aquatic Sciences, "Explanation of the LAB Color Space," 2018. [Online]. Available: https://www.aces.edu/dept/fisheries/education/pond_to_plate/documents/ExplanationoftheLABColorSpace.pdf.<br/>
[11] 	"Introduction to Colour Spaces," 4 July 2018. [Online]. Available: https://www.colourphil.co.uk/lab_lch_colour_space.shtml.<br/>
[12] 	"Color-Based Segmentation Using the L*a*b* Color Space- MATLAB & Simulink Example," Mathworks.com, 2018. [Online]. Available: https://www.mathworks.com/help/images/examples/color-based-segmentation-using-the-l-a-b-color-space.html?prodcode=IP&language=en.<br/>
[13] 	"Color-Based Segmentation Using K-Means Clustering- MATLAB & Simulink Example," Mathworks.com, 2018. [Online]. Available: https://www.mathworks.com/help/images/examples/color-based-segmentation-using-k-means-clustering.html?prodcode=IP&language=en.<br/>
[14] 	R. Fisher, S. Perkins, A. Walker and E. Wolfary, "Image Analysis - Intensity Histogram," HIPR2, 2003. [Online]. Available: https://homepages.inf.ed.ac.uk/rbf/HIPR2/histgram.htm.<br/>

            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }

}