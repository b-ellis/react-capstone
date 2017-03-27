import React from 'react';
import {Glyphicon} from 'react-bootstrap';

class Navbar extends React.Component{
	render(){
		return(
			<div className='navbarDiv'>
				<h4 className='col-md-10'>React Currency Exchange</h4>
				<div className='col-md-2' style={{textAlign:'center', marginTop:'10px'}}>
					<Glyphicon style={{float:'right', cursor:'pointer'}} glyph='info-sign' onClick={this.props.displayInfo}/>
				</div>
			</div>
		)
	}
}

module.exports = Navbar;