/*
 * @Description: 动画效果
 * @Author: sunmingming
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-20 10:50:35
 */
import React from 'react';
import classes from './animation.css';

class Anmation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="fa">
				<div className="son">
					<div style={{ background: '#cc1122', height: '200px', width: '100%',position:'relative' }}>11111</div>
					<div style={{ background: '#bbb111', height: '200px', width: '100%' ,position:'relative'}}>22222</div>
					<div style={{ background: '#cc1122', height: '200px', width: '100%',position:'relative' }}>11111</div>
				</div>
			</div>
		);
	}
}

export default Anmation;
