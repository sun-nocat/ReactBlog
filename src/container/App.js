import React from 'react';
import { Row, Col } from 'antd';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

import Sider from '../components/Sider';
import Content from '../components/Content';
import Header from '../components/Header';
import Nav from '../components/Nav';
import { getArticle } from '../actions'


const height={
    height:'100%'
}
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.props.getArticle()
	}

	render() {

		const {getArticle,article} = this.props
		{
			console.log('app.js------------')
			// getArticle()
		console.log(article)
		}
		return (
			<Row style={height}>
				<Row>
					<Col lg={{ span: 0, offset: 0 }}>
						<Header />
						<div style={{height:'50px'}}></div>
					</Col>
				</Row>
				<Col xs={{ span: 0, offset: 0 }} lg={{ span: 4, offset: 0 }} style={height}>
					<Sider isFixed={true} />
				</Col>
				<Col xs={{ span: 24, offset: 0 }} lg={{ span: 16, offset: 0 }}>
					<Content />
				</Col>
				<Col xs={{ span: 0, offset: 1 }} lg={{ span: 4, offset: 0 }}>
					<Nav />
				</Col>
			</Row>
		);
	}
}


const mapStateToProps = (state) =>{
	return{
		article:state.article
	}
}

const mapDispatchToProps = (dispatch) =>{
	return{
		getArticle: bindActionCreators(getArticle, dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
