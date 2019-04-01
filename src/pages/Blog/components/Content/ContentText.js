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
		this.resize =  this.resize.bind(this)
		this.state = {
			clientWidth:''
		}
	}
	/**
	 * 过滤数据
	 * @param {string} txt 未过滤数据
	 */
	change(txt) {
		return txt.replace(/width:\d+px/g, `width:100%`).replace(/<pre/g, `<pre style="background:#f6f7f8"`).replace(/<img\s/g, `<img style="width:100%"`).replace(/style="/g, `style="width:100%;overflow:scroll;`)
	}

	resize(){
		this.setState({clientWidth:document.body.clientWidth})
	}

	componentDidMount(){
		this.sereenChange()

		
	}
	componentWillUnmount(){
		window.removeEventListener('resize',this.resize);

	}

	sereenChange(){
		window.addEventListener('resize',this.resize)
	}
	render() {
		console.log(this.props.article.title)
		console.log(this.props.item.time.split(" ")[0])
		var back = this.props
		const txt = this.props.article.content
		if (txt) {
			return (
				<div style={{ padding: '1rem' }}>
					<div>
						<h1 style={{ fontWeight: 700, lineHeight: 1.5,padding:'10px',color:'#fc550e',borderBottom:'solid 1px #cccccc'}}>
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


		}else{
			console.log('======================')

			return (<Spin />)
		}
	}
}

export default ContentText;
