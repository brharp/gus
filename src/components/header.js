import React from 'react';

const Header = () => (
<header id="top-header">
	<div className="container">
		<h1 className="logo">
			<a className="navbar-brand" href="//www.uoguelph.ca">
				<img alt="University of Guelph" src="//uoguelph.ca/img/uofg-cornerstone-alternate.png" /> 
			</a>
		</h1>
	</div>
	<div className="utility-bar">
		<div className="container">
			<form id="header-searchform" method="get" className="navbar-form navbar-right" role="form" action="https://uoguelph.ca/search/">
				<input className="form-control search1" type="text" name="q" id="header-s" aria-label="Search" />
				<input type="hidden" name="cx" value="002616817380988741256:tp3ks5ha2dw" />
				<input type="hidden" name="cof" value="FORID:11" />
				<input type="hidden" name="ie" value="UTF-8" />
				<button className="btn btn-default" type="submit" name="submit" value="search" aria-label="search" onClick={()=>this.form.elements['q'].value = '' + this.form.elements['q'].value}><i className="fas fa-search" aria-hidden="true"></i><span className="sr-only">search</span></button>
			</form>
			<nav className="utility-nav">
				<a data-toggle="collapse" href="#collapseResources" role="button" aria-expanded="false" aria-controls="collapseResources" className="utility-button resources-button">
					Resources <i className="fa fa-bars"></i>
				</a>
				<div className="utility-nav-dropdown">
					<div className="collapse" id="collapseResources">
						<div className="container">
							<div className="card card-body">
								<div className="container-fluid">
									<div className="row">
										<div className="col-sm-12 clearfix">
											<h3>Quick Links</h3>
											<ul className="quick-links">
												<li><a href="https://intranet.uoguelph.ca"><i className="icon-intranet"></i><br />Intranet</a></li>
												<li><a href="https://mail.uoguelph.ca"><i className="icon-mail"></i><br />GryphMail</a></li>
												<li><a href="https://courselink.uoguelph.ca"><i className="icon-pencil"></i><br />CourseLink</a></li>
												<li><a href="https://webadvisor.uoguelph.ca"><i className="icon-webadvisor"></i><br />WebAdvisor</a></li>
												<li><a href="https://gryphlife.uoguelph.ca"><i className="icon-gryphlife"></i><br />GryphLife</a></li>
												<li><a href="https://www.lib.uoguelph.ca/"><i className="icon-library"></i><br />Library</a></li>
												<li><a href="https://www.uoguelph.ca/campus/map/"><i className="icon-map"></i><br />Map</a></li>
												<li><a href="https://www.uoguelph.ca/directory/"><i className="icon-directory"></i><br />Directory</a></li>
											</ul>
										</div>
										<div className="col-sm-4">
											<h3>Campus Resources</h3>
											<ul className="campus-resources resources-list">
												<li><a href="https://housing.uoguelph.ca/">University Housing</a></li>
												<li><a href="https://hospitality.uoguelph.ca/on-campus-dining">Campus Dining</a></li>
												<li><a href="http://bookstore.uoguelph.ca/">The Bookstore</a></li>
											</ul>
										</div>
										<div className="col-sm-4">
											<h3>Academic Resources</h3>
											<ul className="academic-resources resources-list">
												<li><a href="https://www.uoguelph.ca/academics/calendars">Academic Calendars</a></li>
												<li><a href="https://www.uoguelph.ca/studentaffairs/student-resources">Student Resources</a></li>
												<li><a href="https://www.uoguelph.ca/registrar/">Registrar</a></li>
											</ul>
										</div>
										<div className="col-sm-4">
											<h3>Other Resources</h3>
											<ul className="other-resources resources-list">
												<li><a href="https://www.uoguelph.ca/police/">Campus Police</a></li>
												<li><a href="https://parking.uoguelph.ca/">Parking</a></li>
												<li><a href="http://bookstore.uoguelph.ca/">Fitness &amp; Recreation</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="collapse" id="collapseAccount">
					<div className="container">
						<div className="card card-body">
							<div className="container-fluid">
								<div className="row">
									<div className="col-sm-4 username-display">
										<h3>Hello <strong>User Name</strong></h3>
											<a href="">Account Settings</a>
									</div>
									<div className="col-sm-4">
										<h3>Adjust content size</h3>
										<div className="font-resize textresizer">
											<span className="small-a">A</span><span className="med-a">A</span><span className="large-a">A</span>
											<button className="text-small" role="button" id="jfontsize-minus"><span className="sr-only" aria-hidden="false">font size small</span>-</button>|
											<button className="text-large" role="button" id="jfontsize-plus"><span className="sr-only" aria-hidden="false">font size large</span>+</button>|
											<button className="text-reset current" role="button" id="jfontsize-default"><span className="sr-only" aria-hidden="false">font size reset</span>reset</button>
										</div>
									</div>
									<div className="col-sm-4 logout-control">
										<h3>Logout</h3>
										<a href=""><i className="fa fa-sign-out"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	</div>
	<div className="top-primary-nav-wrapper">
		<div className="container">
			<nav className="navbar navbar-default navbar-static-top" role="navigation">
				<div className="row">
					<div className="offset-sm-6 col-sm-6">
						<div className="navbar-expand-md primary-nav">
							<button className="search-toggler toggler" type="button" data-toggle="collapse" data-target="#sidebarSearch" aria-controls="sidebarSearch" aria-expanded="false" aria-label="Toggle search" id="searchCollapse">
								<i className="fa fa-search"></i><br />Search
							</button>
							<button className="navbar-toggler toggler" type="button" data-toggle="collapse" data-target="#sidebarMain" aria-controls="sidebarMain" aria-expanded="false" aria-label="Toggle navigation" id="sidebarCollapse">
								<i className="fa fa-bars"></i><br />Menu
							</button>
							<div id="navbarNavDropdown" className="collapse navbar-collapse">
								<ul id="main-menu" className="navbar-nav ml-auto">
									<li itemscope="itemscope" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-1 nav-item shutter-out-horizontal"><a title="Future Students" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="header-menu-item-dropdown-26">Future <br />Students</a>
										<ul className="dropdown-menu" aria-labelledby="header-menu-item-dropdown-26" role="menu">
											<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5 nav-item"><a title="Student Services" href="https://www.uoguelph.ca/students/" className="dropdown-item">Student Services</a></li>
											<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5 nav-item"><a title="Admissions" href="https://admission.uoguelph.ca/" className="dropdown-item">Admissions</a></li>
											<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6 nav-item"><a title="What's your student profile?" href="https://sites.uoguelph.ca/categories/" className="dropdown-item">What's your student profile?</a></li>
											<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7 nav-item"><a title="Admission requirements" href="https://admission.uoguelph.ca/admissionreqs" className="dropdown-item">Admission requirements</a></li>
											<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8 nav-item"><a title="International Students" href="https://www.uoguelph.ca/international/students/international-students" className="dropdown-item">International Students</a></li>
											<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9 nav-item"><a title="Apply at U of G" href="https://www.uoguelph.ca/applying" className="dropdown-item">Apply at U of G</a></li>
										</ul>
									</li>
									<li itemscope="itemscope" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-2 nav-item shutter-out-horizontal"><a title="Current Students" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="header-menu-item-dropdown-27">Current <br />Students</a>
										<ul className="dropdown-menu" aria-labelledby="header-menu-item-dropdown-27" role="menu">
											<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10 nav-item"><a title="Student Life" href="https://studentlife.uoguelph.ca/" className="dropdown-item">Student Life</a></li>
											<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10 nav-item"><a title="Undergraduate Calendar" href="https://www.uoguelph.ca/registrar/calendars/undergraduate/current/" className="dropdown-item">Undergraduate Calendar</a></li>
											<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10 nav-item"><a title="Graduate Calendar" href="https://www.uoguelph.ca/registrar/calendars/graduate/current/" className="dropdown-item">Graduate Calendar</a></li>
										</ul>
									</li>
									<li itemscope="itemscope" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-3 nav-item shutter-out-horizontal"><a title="Faculty &amp; Staff" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="header-menu-item-dropdown-28">Faculty &#038; <br />Staff</a>
										<ul className="dropdown-menu" aria-labelledby="header-menu-item-dropdown-28" role="menu">
											<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10 nav-item"><a title="Academic Departments" href="https://www.uoguelph.ca/academics/departments/" className="dropdown-item">Academic Departments</a></li>
											<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10 nav-item"><a title="Staff Departments" href="https://www.uoguelph.ca/faculty/" className="dropdown-item">Staff Departments</a></li>
											<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10 nav-item"><a title="Campus Directory" href="https://www.uoguelph.ca/directory/" className="dropdown-item">Campus Directory</a></li>
											<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10 nav-item"><a title="Faculty Jobs" href="https://www.uoguelph.ca/facultyjobs/" className="dropdown-item">Faculty Jobs</a></li>
											<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10 nav-item"><a title="Career Opportunities" href="https://www.uoguelph.ca/hr/careers-guelph/current-opportunities" className="dropdown-item">Career Opportunities</a></li>
										</ul>
									</li>
									<li itemscope="itemscope" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-4 nav-item shutter-out-horizontal"><a title="Alumni &amp; Friends" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="header-menu-item-dropdown-29">Alumni &#038; <br />Friends</a>
										<ul className="dropdown-menu menu-cutoff-right" aria-labelledby="header-menu-item-dropdown-29" role="menu">
											<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-30 nav-item"><a title="Alumni Affairs" href="https://alumni.uoguelph.ca/" className="dropdown-item">Alumni Association</a></li>
											<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-31 nav-item"><a title="Portico Magazine" href="http://porticomagazine.ca/" className="dropdown-item">Portico Magazine</a></li>
											<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-32 nav-item"><a title="Give to U of G" href="https://alumni.uoguelph.ca/give" className="dropdown-item">Give to U of G</a></li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	</div>
	<nav className="page-specific-menu" role="navigation" aria-label="Page Specific Menu">
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

	<div className="container mobile-container">
		<nav id="mobile-sidebar" className="mCustomScrollbar" tabindex="-1">
			<div id="dismiss">
				<i className="fas fa-times-circle"></i>
			</div>
			<div id="sidebarSearch" className="mobilePanel collapse">
				<h4>Search U of G</h4>
				<form id="sidebar-searchform" method="get" className="navbar-form navbar-right" role="form" action="https://uoguelph.ca/search/">
					<input className="form-control search1" type="text" value="Search U of G" name="q" id="sidebar-s" onfocus="if (this.value == 'Search U of G') {this.value = '';}" onblur="if (this.value == '') {this.value = 'Search U of G';}" aria-label="Search" />
					<input type="hidden" name="cx" value="002616817380988741256:tp3ks5ha2dw" />
					<input type="hidden" name="cof" value="FORID:11" />
					<input type="hidden" name="ie" value="UTF-8" />
					<button className="btn btn-default" type="submit" name="submit" value="search" aria-label="search" onClick="javascript: this.form.elements['q'].value = '' + this.form.elements['q'].value;"><i className="fas fa-search" aria-hidden="true"></i><span className="sr-only">search</span></button>
				</form>
			</div>
			<div id="sidebarMain" className="mobilePanel collapse">
				<ul id="sidebar-main" className="sidebar-links">
					<li itemscope="itemscope" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-1 nav-item shutter-out-horizontal"><a title="Future Students" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="sidebar-menu-item-dropdown-26">Future <br />Students</a>
						<ul className="dropdown-menu" aria-labelledby="sidebar-menu-item-dropdown-26" role="menu">
							<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5 nav-item"><a title="Student Services" href="https://www.uoguelph.ca/students/" className="dropdown-item">Student Services</a></li>
							<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5 nav-item"><a title="Admissions" href="https://admission.uoguelph.ca/" className="dropdown-item">Admissions</a></li>
							<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6 nav-item"><a title="What's your student profile?" href="https://sites.uoguelph.ca/categories/" className="dropdown-item">What's your student profile?</a></li>
							<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7 nav-item"><a title="Admission requirements" href="https://admission.uoguelph.ca/admissionreqs" className="dropdown-item">Admission requirements</a></li>
							<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8 nav-item"><a title="International Students" href="https://www.uoguelph.ca/international/students/international-students" className="dropdown-item">International Students</a></li>
							<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9 nav-item"><a title="Apply at U of G" href="https://www.uoguelph.ca/applying" className="dropdown-item">Apply at U of G</a></li>
						</ul>
					</li>
					<li itemscope="itemscope" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-2 nav-item shutter-out-horizontal"><a title="Current Students" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="sidebar-menu-item-dropdown-27">Current <br />Students</a>
						<ul className="dropdown-menu" aria-labelledby="sidebar-menu-item-dropdown-27" role="menu">
							<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10 nav-item"><a title="Student Life" href="https://studentlife.uoguelph.ca/" className="dropdown-item">Student Life</a></li>
							<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10 nav-item"><a title="Undergraduate Calendar" href="https://www.uoguelph.ca/registrar/calendars/undergraduate/current/" className="dropdown-item">Undergraduate Calendar</a></li>
							<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10 nav-item"><a title="Graduate Calendar" href="https://www.uoguelph.ca/registrar/calendars/graduate/current/" className="dropdown-item">Graduate Calendar</a></li>
						</ul>
					</li>
					<li itemscope="itemscope" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-3 nav-item shutter-out-horizontal"><a title="Faculty &amp; Staff" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="sidebar-menu-item-dropdown-28">Faculty &#038; <br />Staff</a>
						<ul className="dropdown-menu" aria-labelledby="sidebar-menu-item-dropdown-28" role="menu">
							<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10 nav-item"><a title="Academic Departments" href="https://www.uoguelph.ca/academics/departments/" className="dropdown-item">Academic Departments</a></li>
							<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10 nav-item"><a title="Staff Departments" href="https://www.uoguelph.ca/faculty/" className="dropdown-item">Staff Departments</a></li>
							<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10 nav-item"><a title="Campus Directory" href="https://www.uoguelph.ca/directory/" className="dropdown-item">Campus Directory</a></li>
							<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10 nav-item"><a title="Faculty Jobs" href="https://www.uoguelph.ca/facultyjobs/" className="dropdown-item">Faculty Jobs</a></li>
							<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10 nav-item"><a title="Career Opportunities" href="https://www.uoguelph.ca/hr/careers-guelph/current-opportunities" className="dropdown-item">Career Opportunities</a></li>
						</ul>
					</li>
					<li itemscope="itemscope" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-4 nav-item shutter-out-horizontal"><a title="Alumni &amp; Friends" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="sidebar-menu-item-dropdown-29">Alumni &#038; <br />Friends</a>
						<ul className="dropdown-menu menu-cutoff-right" aria-labelledby="sidebar-menu-item-dropdown-29" role="menu">
							<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-30 nav-item"><a title="Alumni Affairs" href="https://alumni.uoguelph.ca/" className="dropdown-item">Alumni Association</a></li>
							<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-31 nav-item"><a title="Portico Magazine" href="http://porticomagazine.ca/" className="dropdown-item">Portico Magazine</a></li>
							<li itemscope="itemscope" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-32 nav-item"><a title="Give to U of G" href="https://alumni.uoguelph.ca/give" className="dropdown-item">Give to U of G</a></li>
						</ul>
					</li>
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
				</ul>
				<h4>Quick Links</h4>
				<ul id="sidebar-quick" className="sidebar-links">
					<li><a href="https://intranet.uoguelph.ca"><i className="icon-intranet"></i><br />Intranet</a></li>
					<li><a href="https://mail.uoguelph.ca"><i className="icon-mail"></i><br />GryphMail</a></li>
					<li><a href="https://courselink.uoguelph.ca"><i className="icon-pencil"></i><br />CourseLink</a></li>
					<li><a href="https://webadvisor.uoguelph.ca"><i className="icon-webadvisor"></i><br />WebAdvisor</a></li>
					<li><a href="https://gryphlife.uoguelph.ca"><i className="icon-gryphlife"></i><br />GryphLife</a></li>
					<li><a href="https://www.lib.uoguelph.ca/"><i className="icon-library"></i><br />Library</a></li>
					<li><a href="https://www.uoguelph.ca/campus/map/"><i className="icon-map"></i><br />Map</a></li>
					<li><a href="https://www.uoguelph.ca/directory/"><i className="icon-directory"></i><br />Directory</a></li>
				</ul>
			</div>
		</nav>
	</div>
</header>
)

export default Header
