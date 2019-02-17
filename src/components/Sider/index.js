import React from 'react';

import { Avatar, Row, Col, Divider, Menu, Icon } from 'antd';
import SiderTop from './SiderTop'
import SiderList from './SiderList'
import SiderFooter from './SiderFooter'
import background from '../../static/img/blog_leftbanner.jpg'

const style = {
	textAlign: 'center',
	marginTop: '20px'
};

const ROWstyle = {
        backgroundImage:`url(${background})`,
    backgroundSize:'cover',
	height:'100%',
	position:'fixed',
	width:'17%'
};


class Sider extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			isFixed:true
		}
	}

	render() {
		console.log(this.props.isFixed)
		if(this.props.isFixed){
			var styles = ROWstyle
		}else{

			var styles = {
				backgroundImage:`url(${background})`,
				backgroundSize:'cover',
				height:'100%',

			}
		}
		return (
				<Row type="flex" justify="center" style={styles}>
					<Col style={style} >
                        <SiderTop></SiderTop>
                        <SiderList></SiderList>
                        <SiderFooter></SiderFooter>
					</Col>
				</Row>
		);
	}
}

export default Sider;
