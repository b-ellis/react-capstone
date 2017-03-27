import React from 'react';
import { connect } from 'react-redux';
import fx from 'money';
import getRate from 'money';
import {Glyphicon} from 'react-bootstrap';

import actions from '../actions/index';

import Navbar from './navbar';
import Form from './form';
import List from './list';
import Output from './output';

class App extends React.Component{
	constructor(){
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.displayInfo = this.displayInfo.bind(this);
		this.displayApp = this.displayApp.bind(this);
		this.state = {
			content: 'app'
		}
	}
	componentDidMount(){
		this.props.dispatch(actions.fetchAPI());
	}
	handleSubmit(e){
		e.preventDefault();
		const amount = this.props.state.amount;
		const base = this.props.state.baseRate;
		const currency = this.props.state.code;
		const convert = fx.convert(amount, {from: base, to: currency});
		const exchange = convert.toFixed(2);
		this.props.dispatch(actions.exchange(exchange));
	}
	displayInfo(){
		this.setState({
			content: 'info'
		});
	}
	displayApp(){
		this.setState({
			content: 'app'
		});
	}
	render(){
		switch(this.state.content){
			case 'app':
			return(
				<div>
					<Navbar displayInfo={this.displayInfo}/>
					<div className="content">
						<Form onSubmit={this.handleSubmit}
							  rates = {Object.values(this.props.state.data.rates)} 
							  countries = {Object.keys(this.props.state.data.rates)}
							  amount={this.props.state.amount} 
							  base={this.props.state.baseRate}
							  hoverRate={this.props.state.hoverRate}
							  hoverInfo={this.props.state.hoverInfo}
							  hoverCurrency={this.props.state.hoverCurrency} 
							  baseRate={this.props.rate}/>
						<Output state={this.props.state} exchange={this.props.state.exchange} />
					</div>
				</div>
			)

			case 'info':
			return(
				<div>
					<Navbar />
					<div className='content'>
						<div style={{margin:'10px'}}>
							<Glyphicon glyph='remove' onClick={this.displayApp} style={{cursor:'pointer', float:'right', color:'#ccc'}}/>
						</div>
						<h3 style={{textAlign:'center', color:'#ccc'}}>Info</h3>
						<div style={{margin:'30px'}}>
							<p style={{textAlign:'center', margin:'auto 0', color:'#ccc'}}>This is a currency exchanage application <br />
							The starting rate is based off of the United States Dollar 
							</p>
						</div>
						<div>
							<p style={{textAlign:'center', margin:'auto 0', color:'#ccc'}}>How to use: <br />
							Enter an amount in the top form <br />
							Select the base rate <br />
							Select a currency to view the exchange rate of that amount <br />
							The output is displayed in the bottom form 
							</p>
						</div>
					</div>
				</div>
			)
		}
	}
}

const mapStateToProps = (state, props) => {
	return{
		state
	}
} 

const Container = connect(mapStateToProps)(App)

module.exports = Container;