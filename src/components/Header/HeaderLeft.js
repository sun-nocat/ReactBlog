import React from 'react';
import { Drawer, Button, Icon } from 'antd';
import Sider from '../Sider'


class HeaderLeft extends React.Component {
	state = { visible: false };

	showDrawer = () => {
		this.setState({
			visible: true
		});
	};

	onClose = () => {
		this.setState({
			visible: false
		});
	};

	render() {
		return (
			<div>
				<Icon type="bars" style={{fontSize:'35px',color:'#fff',marginLeft:'10px',margin:'7px'}} onClick={this.showDrawer} />
				<Drawer
					placement="left"
					closable={false}
					onClose={this.onClose}
					visible={this.state.visible}
					bodyStyle={{'height':'100%','width':'100%','padding':'0px'}}
				>

            <Sider isFixed={false}></Sider>

				</Drawer>
			</div>
		);
	}
}

export default HeaderLeft;
