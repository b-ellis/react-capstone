import React from 'react';
import { connect } from 'react-redux';

import actions from '../actions/index';

import Navbar from './navbar';
import Form from './form';
import List from './list';
import Output from './output';
import { ThreeBounce } from 'better-react-spinkit';

class App extends React.Component{
	constructor(){
		super();
	}
	componentWillMount(){
		this.props.dispatch(actions.fetchAPI());
	}
	render(){
		if(this.props.state === undefined){
			return(
				<div className="center">
					<ThreeBounce className='loader' />
				</div>
			) 
		} else {
			return(
				<div>
					<Navbar />
					<Form />
					<List rates = {Object.values(this.props.state.data.rates)} 
						  countries = {Object.keys(this.props.state.data.rates)} />
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