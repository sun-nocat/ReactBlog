import React from 'react';
import { Avatar,Divider } from 'antd'


class SiderTop extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Avatar size={120} icon="user" />
				<Divider>不吃鱼的猫</Divider>
			</div>
		);
	}
}

export default SiderTop;
