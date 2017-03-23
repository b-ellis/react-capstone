import React from 'react';
import 'react-bootstrap';

class Navbar extends React.Component{
	render(){
		return(
			<div className='navbarDiv'>
				<h4 className='col-md-10'>React Currency Exchange</h4>
			</div>
		)
	}
}

module.exports = Navbar;