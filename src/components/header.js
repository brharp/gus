import React from 'react';
import UoGsearch from '../components/UoGsearch';

const Header = () => (
<header id="top-header">
	<div className="container">
		<h1 className="logo">
			<a className="navbar-brand" href="//www.uoguelph.ca">
				<img alt="University of Guelph" src="//uoguelph.ca/img/uofg-cornerstone-alternate.png" /> 
			</a>
		</h1>
	</div>
	{/* utility-bar is the top dark-grey area for search and Resources menu */}
	<div className="utility-bar">
		<div className="container">
			<nav className="utility-nav">
			</nav>
		</div>
	</div> {/* end utility-bar */}
	<div className="top-primary-nav-wrapper">
		<div className="container">
			<nav className="navbar navbar-default navbar-static-top" role="navigation">
				<div className="row">
					<div id="searchMenuArea" className="accordion offset-sm-6 col-sm-6">
						<div id="search-menu-toggles">
							<button className="search-toggler toggler" type="button" data-toggle="collapse" data-target="#searchTest" aria-expanded="false" aria-label="Toggle search" id="searchButton">
								<i className="fa fa-search"></i>Search
							</button>
							<button className="navbar-toggler toggler" type="button" data-toggle="collapse" data-target="#global-nav" aria-controls="global-nav" aria-expanded="false" aria-label="Toggle navigation" id="mainMenuHamburger">
								<i className="fa fa-bars"></i>Menu
							</button>						
						</div>
						<UoGsearch />
						<div id="global-nav" className="collapse navbar-collapse" data-parent="#searchMenuArea">
							<ul id="main-menu" className="navbar-nav ml-auto">
									<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-1 nav-item shutter-out-horizontal">
										<a title="Future Students" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="header-menu-item-dropdown-26">Future Students</a>
										<ul className="dropdown-menu" aria-labelledby="header-menu-item-dropdown-26" role="menu">
											<li className="nav-item"><a title="Student Services" href="https://www.uoguelph.ca/students/" className="dropdown-item">Student Services</a></li>
											<li className="nav-item"><a title="Admissions" href="https://admission.uoguelph.ca/" className="dropdown-item">Admissions</a></li>
											<li className="nav-item"><a title="What's your student profile?" href="https://sites.uoguelph.ca/categories/" className="dropdown-item">What's your student profile?</a></li>
											<li className="nav-item"><a title="Admission requirements" href="https://admission.uoguelph.ca/admissionreqs" className="dropdown-item">Admission requirements</a></li>
											<li className="nav-item"><a title="International Students" href="https://www.uoguelph.ca/international/students/international-students" className="dropdown-item">International Students</a></li>
											<li className="nav-item"><a title="Apply at U of G" href="https://www.uoguelph.ca/applying" className="dropdown-item">Apply at U of G</a></li>
										</ul>
									</li>
									<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-2 nav-item shutter-out-horizontal">
										<a title="Current Students" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="header-menu-item-dropdown-27">Current Students</a>
										<ul className="dropdown-menu" aria-labelledby="header-menu-item-dropdown-27" role="menu">
											<li className="nav-item"><a title="Student Life" href="https://studentlife.uoguelph.ca/" className="dropdown-item">Student Life</a></li>
											<li className="nav-item"><a title="Undergraduate Calendar" href="https://www.uoguelph.ca/registrar/calendars/undergraduate/current/" className="dropdown-item">Undergraduate Calendar</a></li>
											<li className="nav-item"><a title="Graduate Calendar" href="https://www.uoguelph.ca/registrar/calendars/graduate/current/" className="dropdown-item">Graduate Calendar</a></li>
										</ul>
									</li>
									<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-3 nav-item shutter-out-horizontal">
										<a title="Faculty &amp; Staff" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="header-menu-item-dropdown-28">Faculty &amp; Staff</a>
										<ul className="dropdown-menu" aria-labelledby="header-menu-item-dropdown-28" role="menu">
											<li className="nav-item"><a title="Academic Departments" href="https://www.uoguelph.ca/academics/departments/" className="dropdown-item">Academic Departments</a></li>
											<li className="nav-item"><a title="Staff Departments" href="https://www.uoguelph.ca/faculty/" className="dropdown-item">Staff Departments</a></li>
											<li className="nav-item"><a title="Campus Directory" href="https://www.uoguelph.ca/directory/" className="dropdown-item">Campus Directory</a></li>
											<li className="nav-item"><a title="Faculty Jobs" href="https://www.uoguelph.ca/facultyjobs/" className="dropdown-item">Faculty Jobs</a></li>
											<li className="nav-item"><a title="Career Opportunities" href="https://www.uoguelph.ca/hr/careers-guelph/current-opportunities" className="dropdown-item">Career Opportunities</a></li>
										</ul>
									</li>
									<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-4 nav-item shutter-out-horizontal">
										<a title="Alumni &amp; Friends" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="header-menu-item-dropdown-29">Alumni &amp; Friends</a>
										<ul className="dropdown-menu menu-cutoff-right" aria-labelledby="header-menu-item-dropdown-29" role="menu">
											<li className="nav-item"><a title="Alumni Affairs" href="https://alumni.uoguelph.ca/" className="dropdown-item">Alumni Association</a></li>
											<li className="nav-item"><a title="Portico Magazine" href="http://porticomagazine.ca/" className="dropdown-item">Portico Magazine</a></li>
											<li className="nav-item"><a title="Give to U of G" href="https://alumni.uoguelph.ca/give" className="dropdown-item">Give to U of G</a></li>
										</ul>
									</li>
							</ul>
							<hr />
							<nav role="navigation" aria-label="Page Specific Menu">
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
						<hr />
						<h4>Quick Links</h4>
						<ul id="quick-links" className="d-flex flex-wrap">
							<li><a href="https://intranet.uoguelph.ca"><i className="icon-intranet"></i>Intranet</a></li>
							<li><a href="https://mail.uoguelph.ca"><i className="icon-mail"></i>GryphMail</a></li>
							<li><a href="https://courselink.uoguelph.ca"><i className="icon-pencil"></i>CourseLink</a></li>
							<li><a href="https://webadvisor.uoguelph.ca"><i className="icon-webadvisor"></i>WebAdvisor</a></li>
							<li><a href="https://gryphlife.uoguelph.ca"><i className="icon-gryphlife"></i>GryphLife</a></li>
							<li><a href="https://www.lib.uoguelph.ca/"><i className="icon-library"></i>Library</a></li>
							<li><a href="https://www.uoguelph.ca/campus/map/"><i className="icon-map"></i>Map</a></li>
							<li><a href="https://www.uoguelph.ca/directory/"><i className="icon-directory"></i>Directory</a></li>
						</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	</div>
</header>
)

export default Header
