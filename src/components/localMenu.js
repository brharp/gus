import React from 'react';
import "../styles/local-menu.css";

const LocalMenu = () => (

<nav id="localMenu" role="navigation" aria-label="Page Specific Menu">
	<div className="container">
		<ul className="nav navbar-nav navbar-right nav-clear" role="menu">
			<li><a href="index" role="menuitem">Home</a></li>
			<li className="dropdown" role="menuitem"><a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">The Event<span className="caret"></span></a>
				<ul className="dropdown-menu navbar-default dropdown-menu-left" role="menu">
					<li><a href="schedule" role="menuitem">Schedule</a></li>
					<li><a href="watch" role="menuitem">Watch & Engage</a></li>
					<li><a href="maps" role="menuitem">Maps</a></li>
					<li><a href="program" role="menuitem">Program</a></li>
				</ul>
			</li>
			<li className="dropdown" role="menuitem"><a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">The People<span className="caret"></span></a>
				<ul className="dropdown-menu navbar-default dropdown-menu-left" role="menu">
					<li><a href="students" role="menuitem">Students</a></li>
					<li><a href="guests" role="menuitem">Family & Guests</a></li>
					<li><a href="volunteers" role="menuitem">Faculty & Staff</a></li>
				</ul>
			</li>
			<li><a href="contact" role="menuitem">Contact Us</a></li>
		</ul>
	</div>
</nav>

)

export default LocalMenu