import React from 'react';
import Spin from '../../../../components/spin'
import { Icon, Tag } from 'antd'

const label = {
	'first': '前端',
	'end': '后端',
	'code': '算法',
	'other': '其他'
}
class ContentText extends React.Component {
	constructor(props) {
		super(props);
	}

	/**
	 * 过滤数据
	 * @param {string} txt 未过滤数据
	 */
	change(txt) {
		return txt.replace(/width:\d+px/g, `width:100%`).replace(/<pre/g, `<pre style="background:#f6f7f8"`).replace(/<img\s/g, `<img style="width:100%"`)
	}

	render() {
		console.log(this.props.article.title)
		console.log(this.props.item.time.split(" ")[0])
		const txt = this.props.article.content
		if (txt) {
			return (
				<div style={{ padding: '1rem' }}>
					<div>
						<h1 style={{ fontWeight: 700, lineHeight: 1.5 }}>
							{this.props.article.title}
						</h1>
						<div style={{width:'100%',height:'50px'}}>
							<div style={{ float: 'right' }}>
								<Tag color="blue"><Icon type="contacts" /> {this.props.item.time.split(" ")[0]}</Tag>
								<Tag color="geekblue"><Icon type="tag" /> {label[this.props.article.label]}</Tag>
							</div>
						</div>

						<div dangerouslySetInnerHTML={{ __html: this.change(txt) }} />;
					</div>
				</div>
			)


		} else {
			console.log('======================')

			return (<Spin />)
		}
	}
}

export default ContentText;
