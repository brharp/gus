import React from 'react';
import QuickLinks from '../components/quicklinks';
import "../styles/resources-menu.css";

function ResourcesMenu() {
	return (
	<nav className="utility-nav">
		<a data-toggle="collapse" href="#collapseResources" role="button" aria-expanded="false" aria-controls="collapseResources" className="utility-button resources-button">
			Resources <i className="fa fa-bars"></i>
		</a>
		<div className="collapse" id="collapseResources">
			<div className="row">
				<QuickLinks />
				<div className="col-lg-4">
					<h3>Campus Resources</h3>
					<ul className="campus-resources resources-list">
						<li><a href="https://housing.uoguelph.ca/">University Housing</a></li>
						<li><a href="https://hospitality.uoguelph.ca/on-campus-dining">Campus Dining</a></li>
						<li><a href="http://bookstore.uoguelph.ca/">The Bookstore</a></li>
					</ul>
				</div>
				<div className="col-lg-4">
					<h3>Academic Resources</h3>
					<ul className="academic-resources resources-list">
						<li><a href="https://www.uoguelph.ca/academics/calendars">Academic Calendars</a></li>
						<li><a href="https://www.uoguelph.ca/studentaffairs/student-resources">Student Resources</a></li>
						<li><a href="https://www.uoguelph.ca/registrar/">Registrar</a></li>
					</ul>
				</div>
				<div className="col-lg-4">
					<h3>Other Resources</h3>
					<ul className="other-resources resources-list">
						<li><a href="https://www.uoguelph.ca/police/">Campus Police</a></li>
						<li><a href="https://parking.uoguelph.ca/">Parking</a></li>
						<li><a href="http://bookstore.uoguelph.ca/">Fitness &amp; Recreation</a></li>
					</ul>
				</div>
			</div>									
		</div>
	</nav>
)}

export default ResourcesMenu