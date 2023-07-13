import React from 'react';
import Headroom from 'react-headroom'

import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'; // sidebar menu

import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css';

const Header = ({ onInputChange, onCLickRunQuery, onInputHitEnter }) =>{

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return(
		<section className="header">
		<Headroom>
				
				<div className="header-wrapper">

					{/* header and logo */}
					<div className="header-menu-wrapper">
						<button className="header-menu-button menu" variant="primary" onClick={handleShow}>|||</button>
						<button className="header-account-button account" variant="primary" onClick={handleShow}><i className="fa fa-user" aria-hidden="true"></i></button>
					</div>
				

					<div className="header-logo-wrapper">
						<i className="fa-solid fa-brain header-logo-icon"></i>
						<h1 className="header-logo-text">Storm <br/>Brainer</h1>
					</div>

					<div className="header-search-wrapper">
						<input className="header-search-input" type="text" placeholder="your creativity start here" onChange={onInputChange} onKeyUp={onInputHitEnter}/>
						<button className="header-search-button" variant="primary" onClick={onCLickRunQuery}>
							<i className="fas fa-search"></i>
							<span className="button-text">search</span>
						</button>
					</div>

					{/* account menu */}
					<Offcanvas show={show} onHide={handleClose}>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title>Create Your MoodBoard</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<p>
							Use the filter set below to search the images for your moodboard.
							Chose the one you like and save the collection in your personal Board<br/>
							</p>


							<input id="save-filter" className="input button header-button" type="button" value="Create your MoodBoard" />

							
						</Offcanvas.Body>
					</Offcanvas>

				</div>
	

		</Headroom>
		</section>
	)
}

export default Header;