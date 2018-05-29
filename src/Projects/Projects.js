import React, { Component } from 'react';

//Import Components
import Navtop from '../Navtop/Navtop';
import { Title, Subtitle, Footer, CarouselHome, Project, Projectv1, SimpleProjectDisplay, Modal1 } from '../PageComponents/PageComponents';
import { Table, Container, Row, Col, Media } from 'reactstrap';

import '../css/generic.css';




const imageData = [['./images/parcsystems.ca.png','Parcsystems.ca'],['./images/logparse.png','Mail Gateway Log Parse Tool'],['./images/rat.png','Distributed Investment Platform'],['./images/takumapimlott.png','Portfolio Website'],['./images/battleship.png','Super BattleShipS 2D'],['./images/service.png','Centos Service Manager'],['./images/dd.png','Deadline Driven Task Scheduler'],['./images/k2b.png','Ingredients Checker'],['./images/robot.jpg','Robot (PCB / Motor Controller)'],['./images/amp1.jpg','Portable Guitar Amp'],['./images/contact.png','Online Address Book']];


const pdesc= "Current public facing information website about PARC's business and offered services. This website was built utilizing Bootstrap and jQuery, with the overall design being done from scratch. A PHP based backend content management system was coded to dynamically generate the webpages based off a set of parameters referencing pre-designed templates to allow for easier site maintainability by office administrators. The CMS grabs data from other setup files that allow for quick and instant changes";

const logparse = "JAVA, PHP, and Bash utilizing application to parse ~100,000 line log files to examine the mail logging information that passes through the mail gateway. JAVA parses the constantly updating log file, and creates a file based database with a less verbose and formatted set of strings for each relevant log line. The database is examined with a PHP backend allowing users to query the database to find mail data by Sender, Reciever, Date, and also identifies the SPAM level of the mail in question. A Cron job runs every 5 minutes to execute the JAVA los parser whenever the mail log file has been updated by spamassain/postfix.";

const distributed = "A GoLang, Bootstrap, Redis, Apache Cassandra, NGINX and Docker utilizing distributed investment platform with the ability to process a workload of ~5000tps (tested 3 processing nodes, but can increase). The system had 2 primary components: processing server and audit server. The processing server handled HTTP requests from a client (or workload generator) and the audit server handled the logging to the Cassandra database. Each server was built stateless to allow increasing of the processing servers and audit servers. Docker was used for deployments and docker swarm for round robin load balancing to each web server on the processing servers. Apache Cassandra was clustered and used as the primary database to avoid horizontal database partitioning, with the Redis instance as a Cache.";

const portfolio = "Built with React, and Bootstrap (react-strap), running on a node server hosted on AWS. React was used as a learning experience to understand the component and element based transcriber, and to better understand ES6. This website will be used to test new technologies and slowly implement more features as time progresses.";

const ingredients = "Built with PHP, Bootstrap, jQuery, mySQL hosted on AWS with apache. The application had a database of cosmetic ingredients to identify harmful substances. Tesseract-OCR was used to recognize characters from images of labels. The system was only tuned to support English. Manually querying via a form was also enabled.";

const battleships = "A multiplayer game utilizing a LAMP stack to allow for multiplayer battleship. Sessions were used as the primary form of multiplayer maintainability with the database existing to facilitate states to initially connect users.";

const service = "Used private keys / certificates to authenticate between a central manager node that utilizes SSH to facilitate service control commands and is able to extract running services, and perform start, restart, or stop commands if they are relevant. The project utilized a php back-end to facilitate the SSH commands.";

const deadline = "Written in C and MQX to run on a FRDM-K64F microcontroller. The program used deadline driven task scheduling theory to change the priorities of a running task with respect to the execution time of the task, the priority, and period to maximize CPU utilization.";

const robot = "VEX components were utilized to build the structure of the robot. Everything aside from the microcontroller and motor controller was a vex component. A motor controller with an h-bridge was designed and manufactured to be layed on top of the microcontroller. The system then utilized IR sensors to track black tape layed out to depict maze, and to find the exit. ";

const guitar = "A portable battery powered guitar amp was something I wanted for a while. I looked up a simple LM386 audio amplifier based circuit, and soldered the components together to get a nice little amplifier.";

const addressbook = "A simple Laravel based LAMP stack with varying address book parameters which could be accessed via a browser or android client.";

const desc = [pdesc,logparse, distributed, portfolio, ingredients, battleships, service, deadline, robot, guitar, addressbook];

class Projects extends Component{
	render(){
		return(
			<div>
				<Navtop />
				<div className="container">
					<br /><br /><br />
					<p className="alert1">*Though I've contributed to other projects, these are ones I implemented from start to finish</p>
					<Title title="Projects"/>

					<SimpleProjectDisplay directory="./images/takumapimlott.png" title="Personal Portfolio Website" description={desc[3]}/>
					<SimpleProjectDisplay directory="./images/parcsystems.ca.png" title="Parcsystems.ca" description={desc[0]}/>
					<SimpleProjectDisplay directory="./images/logparse.png" title="Mail Gateway Log Parse Tool" description={desc[1]}/>
					<SimpleProjectDisplay directory="./images/rat.png" title="Distributed Investment Platform" description={desc[2]}/>
					<SimpleProjectDisplay directory="./images/k2b.png" title="Ingredients Checker with OCR" description={desc[4]}/>
					<SimpleProjectDisplay directory="./images/battleship.png" title="Super BattleShipS 2D" description={desc[5]}/>
					<SimpleProjectDisplay directory="./images/service.png" title="Centos Service Manager" description={desc[6]}/>
					<SimpleProjectDisplay directory="./images/dd.png" title="Deadline Driven Task Scheduler" description={desc[7]}/>
					<SimpleProjectDisplay directory="./images/robot.jpg" title="Robot (PCB / Motor Controller)" description={desc[8]}/>
					<SimpleProjectDisplay directory="./images/amp1.jpg" title="Portable Guitar Amp" description={desc[9]}/>
					<SimpleProjectDisplay directory="./images/contact.png" title="Online Address Book" description={desc[10]}/>
					
				</div>
				<Footer />
			</div>

		);
	}
}

export default Projects;