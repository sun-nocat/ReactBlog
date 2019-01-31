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
    height:'100%'
};


class Sider extends React.Component {
	render() {
		return (
				<Row type="flex" justify="center" style={ROWstyle}>
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
