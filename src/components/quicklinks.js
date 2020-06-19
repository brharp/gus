import React from 'react'
import "../styles/quicklinks.css"

const QuickLinks = () => (
<div id="quicklinksWrapper" className="col-sm-12 clearfix">	
	<h3>Quick Links</h3>
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
)

export default QuickLinks