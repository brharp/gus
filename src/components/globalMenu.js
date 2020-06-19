import React from 'react';
import "../styles/global-menu.css"

const GlobalMenu = () => (

<nav id="globalMenuWrapper">
<ul id="main-menu">
	<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-1 nav-item shutter-out-horizontal">
		<a title="Future Students" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="futureStudents" role="button">Future Students</a>
		<ul className="dropdown-menu" aria-labelledby="futureStudents" role="menu">
			<li className="nav-item"><a title="Student Services" href="https://www.uoguelph.ca/students/" className="dropdown-item">Student Services</a></li>
			<li className="nav-item"><a title="Admissions" href="https://admission.uoguelph.ca/" className="dropdown-item">Admissions</a></li>
			<li className="nav-item"><a title="What's your student profile?" href="https://sites.uoguelph.ca/categories/" className="dropdown-item">What's your student profile?</a></li>
			<li className="nav-item"><a title="Admission requirements" href="https://admission.uoguelph.ca/admissionreqs" className="dropdown-item">Admission requirements</a></li>
			<li className="nav-item"><a title="International Students" href="https://www.uoguelph.ca/international/students/international-students" className="dropdown-item">International Students</a></li>
			<li className="nav-item"><a title="Apply at U of G" href="https://www.uoguelph.ca/applying" className="dropdown-item">Apply at U of G</a></li>
		</ul>
	</li>
	<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-2 nav-item shutter-out-horizontal">
		<a title="Current Students" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="currentStudents">Current Students</a>
		<ul className="dropdown-menu" aria-labelledby="currentStudents" role="menu">
			<li className="nav-item"><a title="Student Life" href="https://studentlife.uoguelph.ca/" className="dropdown-item">Student Life</a></li>
			<li className="nav-item"><a title="Undergraduate Calendar" href="https://www.uoguelph.ca/registrar/calendars/undergraduate/current/" className="dropdown-item">Undergraduate Calendar</a></li>
			<li className="nav-item"><a title="Graduate Calendar" href="https://www.uoguelph.ca/registrar/calendars/graduate/current/" className="dropdown-item">Graduate Calendar</a></li>
		</ul>
	</li>
	<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-3 nav-item shutter-out-horizontal">
		<a title="Faculty &amp; Staff" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="facultyStaff">Faculty &amp; Staff</a>
		<ul className="dropdown-menu" aria-labelledby="facultyStaff" role="menu">
			<li className="nav-item"><a title="Academic Departments" href="https://www.uoguelph.ca/academics/departments/" className="dropdown-item">Academic Departments</a></li>
			<li className="nav-item"><a title="Staff Departments" href="https://www.uoguelph.ca/faculty/" className="dropdown-item">Staff Departments</a></li>
			<li className="nav-item"><a title="Campus Directory" href="https://www.uoguelph.ca/directory/" className="dropdown-item">Campus Directory</a></li>
			<li className="nav-item"><a title="Faculty Jobs" href="https://www.uoguelph.ca/facultyjobs/" className="dropdown-item">Faculty Jobs</a></li>
			<li className="nav-item"><a title="Career Opportunities" href="https://www.uoguelph.ca/hr/careers-guelph/current-opportunities" className="dropdown-item">Career Opportunities</a></li>
		</ul>
	</li>
	<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-4 nav-item shutter-out-horizontal">
		<a title="Alumni &amp; Friends" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="alumniFriends">Alumni &amp; Friends</a>
		<ul className="dropdown-menu menu-cutoff-right" aria-labelledby="alumniFriends" role="menu">
			<li className="nav-item"><a title="Alumni Affairs" href="https://alumni.uoguelph.ca/" className="dropdown-item">Alumni Association</a></li>
			<li className="nav-item"><a title="Portico Magazine" href="http://porticomagazine.ca/" className="dropdown-item">Portico Magazine</a></li>
			<li className="nav-item"><a title="Give to U of G" href="https://alumni.uoguelph.ca/give" className="dropdown-item">Give to U of G</a></li>
		</ul>
	</li>
</ul>
</nav>
)

export default GlobalMenu