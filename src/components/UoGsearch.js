import React from 'react';
import "../styles/UoGsearch.css"

const UoGsearch = () => (

<div id="searchTest" className="collapse" data-parent="#searchMenuArea">
	<h4>Search U of G</h4>
	<form id="ugSearch" className="d-flex" method="get" action="https://uoguelph.ca/search/">
		<input className="form-control search1" type="text" name="q" aria-label="Search U of G" placeholder="Search U of G" />
		<input type="hidden" name="cx" value="002616817380988741256:tp3ks5ha2dw" />
		<input type="hidden" name="cof" value="FORID:11" />
		<input type="hidden" name="ie" value="UTF-8" />
		<button className="btn btn-default" type="submit" name="submit" value="search" aria-label="search">
			<i className="fas fa-search" aria-hidden="true"></i><span className="sr-only">search</span>
		</button>
	</form>
</div>

)

export default UoGsearch