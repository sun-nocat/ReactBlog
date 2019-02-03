import React from 'react';
import { Row, Col } from 'antd';

import Sider from '../components/Sider';
import Content from '../components/Content';
import Header from '../components/Header';
import Nav from '../components/Nav';



const height={
    height:'100%'
}
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
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

export default App;
