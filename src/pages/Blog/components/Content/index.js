/*
 * @Description: 
 * @Author: sun_mingming@foxmail.com
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-23 10:14:19
 */

import React from 'react';
import CardItem from './CardItem';
import ContentText from './ContentText';

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			item: '',
			isList: true
		};

		this.clickCard = this.clickCard.bind(this);
	}

	//用户点击列表
	clickCard(item) {
		this.setState({ item: item });
		this.props.isShow();
        this.setState({ isList: false });
        this.props.history.push('/Blog/item')
        this.props.getArticle(item.id)
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

	back(){
		this.setState({ isList: true });
	}

	componentDidMount(){
		var _this = this
		this.props.history.listen(()=>{
			console.log('sss')

			if(_this.props.history.location.pathname == '/Blog'){
				this.setState({ isList: true })
				this.props.isShow()
			}
		})
	}

	render() {
		const isList = this.state.isList;

		const articleList = this.props.articleList.data;
		console.log(this.props.article);
		console.log(this.props.history)

        
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
			return <ContentText history= {this.props.history} item={_this.state.item} article = {_this.props.article} />;
		}
	}
}

export default Content;
