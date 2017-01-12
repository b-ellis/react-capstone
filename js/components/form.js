import React from 'react';
import 'react-bootstrap';

class Form extends React.Component {
	render(){
		return(
			<form className="form-inline formDiv">
				<div className="form-group">
				<label className="sr-only" htmlFor="exampleInputAmount">Amount (in dollars)</label>
					<div className="input-group">
						<div className="input-group-addon">$</div>
						<input type="text" className="form-control" id="exampleInputAmount" placeholder="Amount" />
					</div>
				</div>
			</form>
		)
	}
}

module.exports = Form;