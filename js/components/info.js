import React from 'react';

const infoStyle = {
	display: 'block'
}

class Info extends React.Component{
	render(){
		if(this.props.hoverInfo === true){
			return(
				<div className="info" style={infoStyle}>
					<h5>Currency: <span className='info-text'>{this.props.hoverCurrency}</span> </h5>
					<h5>Rate: <span className='info-text'>{this.props.hoverRate}</span> </h5>
				</div>
			)
		} else {
			return(
				<div className="info">
					<h5>Country: {this.props.hoverCurrency} </h5>
					<h5>Rate: {this.props.hoverRate} </h5>
				</div>
			)
		}
	}
}

module.exports = Info;