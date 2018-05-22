import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Row,
  Col
} from 'reactstrap';

import bg1 from '../images/bg1.jpg';
import bg2 from '../images/bg2.jpg';
import bg3 from '../images/bg3.jpg';


export class Title extends Component{
	render(){
		return(
			<div className="titleContainer">
				<h1>{this.props.title}</h1>
			</div>
		);
	}
}

export class Project extends Component{
	render(){

		//Value to append project components to

		//gets all image links
		const images = this.props.imageData;
		if(images.length == 0){
			return(
				<h1>No Directory Specified</h1>
			);
		}
		//Groups amount of project components per row
		let imagesPerRow = this.props.row;
		let innerLoop = Math.round(images.length / imagesPerRow);
		console.log(innerLoop);
		let i;
		let e;
		for(i = 0; i < images.length; i++){
			for(e = 0; e < imagesPerRow; e++){


			}
		}

		return(
			<div className="project">
				<h1>Test</h1>
			</div>
		);
	}
}

export class SimpleProjectDisplay extends Component{
	render(){
		return(
			<div className="simpleContainer">
			<Row>
				<Col lg="3">
					<Modal1 directory={this.props.directory}>
						<img className="simpleProjectImage mx-auto d-block rounded" src={this.props.directory}/>
					</Modal1>
				</Col>
				<Col>
					<h3 className="imageText">{this.props.title}</h3>
					<p className="projectDesc">
						{this.props.description}
					</p>
				</Col>
			</Row>
			</div>
		);
	}
}


export class Projectv1 extends Component{
	render(){
		return(

			<div className="projectContainer">
				<div className="imageInfo">
					<h3 className="imageText">{this.props.title}</h3>
				</div>
				<img className="projectImage" src={this.props.directory}/>
			</div>

		);
	}
}


export class Subtitle extends Component{
	render(){
		return(
			<div className="subContainer">
				<h4>{this.props.title}</h4>
			</div>
		);
	}
}

export class Footer extends Component{
	render(){
		return(
			<div className="footer"></div>
		);
	}
}



const items = [
  {
    src: bg1,
    altText: 'Camping 2017',
    caption: 'Caycuse'
  },
  {
    src: bg2,
    altText: 'Japan Trip: Home',
    caption: 'Japan Trip: Home'
  },
  {
    src: bg3,
    altText: 'Sapporo Station',
    caption: 'Sapporo Station'
  }
];

export class CarouselHome extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export class ContactBox extends Component{
	render(){
		return(
			<div className="contactBox">
				<h3>{this.props.email[0]} or {this.props.email[1]}</h3>
			</div>
		);
	}
}




export class Modal1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <img onClick={this.toggle} className="simpleProjectImage mx-auto d-block rounded" src={this.props.directory}/>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="lg">
          	<img className="modaled -auto d-block" src={this.props.directory}/>
        </Modal>
      </div>
    );
  }
}


