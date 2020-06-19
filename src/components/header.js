import React from 'react';
import UoGsearch from '../components/UoGsearch';
import GlobalMenu from '../components/globalMenu';
import LocalMenu from '../components/localMenu';
import ResourcesMenu from '../components/resourcesMenu';
import "../styles/header.css";

const Header = () => (
<header id="top-header">
	<div className="container">
		<h1 className="logo">
			<a className="navbar-brand" href="//www.uoguelph.ca">
				<img alt="University of Guelph" src="//uoguelph.ca/img/uofg-cornerstone-alternate.png" /> 
			</a>
		</h1>
	</div>
	<div className="container">
		<nav className="navbar navbar-default navbar-static-top" role="navigation">
			<div className="row">
				<div id="searchMenuArea" className="accordion offset-sm-6 col-sm-6">
					<div id="search-menu-toggles">
						<button className="search-toggler toggler" type="button" data-toggle="collapse" data-target="#searchWrapper" aria-expanded="false" aria-label="Toggle search" id="searchButton">
							<i className="fa fa-search"></i>Search
						</button>
						<button className="navbar-toggler toggler" type="button" data-toggle="collapse" data-target="#allNavWrapper" aria-controls="global-nav" aria-expanded="false" aria-label="Toggle navigation" id="mainMenuHamburger">
							<i className="fa fa-bars"></i>Menu
						</button>						
					</div>
					<UoGsearch />
					<div id="allNavWrapper" className="collapse navbar-collapse" data-parent="#searchMenuArea">
						<GlobalMenu />
						<hr />
						<LocalMenu />
						<hr />
						<ResourcesMenu />
					</div>
				</div>
			</div>
		</nav>
	</div>
</header>
)

export default Header
