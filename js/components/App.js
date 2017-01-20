import React from 'react';
import { connect } from 'react-redux';
import fx from 'money';

import actions from '../actions/index';

import Navbar from './navbar';
import Form from './form';
import List from './list';
import Output from './output';

class App extends React.Component{
	constructor(){
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount(){
		this.props.dispatch(actions.fetchAPI());
	}
	handleSubmit(e){
		e.preventDefault();
		const amount = this.props.state.amount;
		const USD = "USD";
		const currency = this.props.state.code;
		const convert = fx.convert(amount, {from: USD, to: currency});
		const exchange = convert.toFixed(2);
		this.props.dispatch(actions.exchange(exchange));
	}
	render(){
		return(
			<div>
				<Navbar />
				<div className="content">
					<Form onSubmit={this.handleSubmit}
						  rates = {Object.values(this.props.state.data.rates)} 
						  countries = {Object.keys(this.props.state.data.rates)}
						  amount={this.props.state.amount} />
					<Output state={this.props.state} exchange={this.props.state.exchange} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	return{
		state
	}
} 

const Container = connect(mapStateToProps)(App)

module.exports = Container;