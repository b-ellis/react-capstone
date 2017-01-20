import React from 'react';

class Output extends React.Component{
	render(){
		if(this.props.exchange === undefined || this.props.exchange === 'NaN'){
			return <div></div>
		} else {
			return (
				<div className="outDiv">
					<div className="form-group">
						<label className="sr-only" htmlFor="exampleInputAmount">Amount (in dollars)</label>
						<div className="input-group outputDiv">
							<div className="input-group-addon output">{this.props.state.code}</div>
							<output>{this.props.state.exchange}</output>
						</div>
					</div>
				</div>
			)
		}
	}
}

module.exports = Output;