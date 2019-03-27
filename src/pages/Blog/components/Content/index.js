/*
 * @Description: 
 * @Author: sun_mingming@foxmail.com
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-23 10:14:19
 */

import React from 'react';
import CardItem from './CardItem';
import ContentText from './ContentText';
import { withRouter } from 'react-router-dom';

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			isList: true
		};

		this.clickCard = this.clickCard.bind(this);
	}

	//用户点击列表
	clickCard(id) {
		this.setState({ id: id });
		this.props.isShow();
        this.setState({ isList: false });
        
        console.log(id)
        console.log(this.props.getArticle)
        this.props.getArticle(id)
        //用户点击标题，=>获取数据 =>将数传递给ContentText组件
	}

	//props发生变化的时候调用
	componentWillReceiveProps(e) {
		if (e.isList) {
			this.setState({ isList: true });
		} else {
			this.setState({ isList: false });
		}
	}

	render() {
		const isList = this.state.isList;

		const articleList = this.props.articleList.data;
        console.log(this.props.article);
        
        var _this = this
		if (isList) {
			return (
				<div>
                    
					{articleList &&
						articleList.map(function(item, index) {
							return <CardItem  id={index} key={index} clickCard={_this.clickCard} data={item} />;
						})}
				</div>
			);
		} else {
			return <ContentText article = {_this.props.article} />;
		}
	}
}

export default Content;
