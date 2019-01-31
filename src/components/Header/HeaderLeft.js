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
				<Icon type="bars" style={{fontSize:'30px',color:'#fff',marginLeft:'10px',marginTop:'5px'}} onClick={this.showDrawer} />
				<Drawer
					placement="left"
					closable={false}
					onClose={this.onClose}
					visible={this.state.visible}
				>

            <Sider></Sider>

				</Drawer>
			</div>
		);
	}
}

export default HeaderLeft;
