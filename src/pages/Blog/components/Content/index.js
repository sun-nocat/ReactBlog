/*
 * @Description: 
 * @Author: sun_mingming@foxmail.com
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-23 10:14:19
 */

import React from 'react'
import CardItem from './CardItem'
import ContentText from './ContentText'
import { withRouter } from 'react-router-dom'


class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            isList: true,
        }

        this.clickCard = this.clickCard.bind(this)
    }


    //用户点击列表 
    clickCard(id) {
        this.setState({ id: id })
        this.props.isShow()
        this.setState({isList:false})


    }

    //props发生变化的时候调用
    componentWillReceiveProps(e){

        if(e.isList){
            this.setState({isList:true})

        }else{
            this.setState({isList:false})
        }
    }


    render() {
        const isList = this.state.isList

        if (isList) {
            return (
                <div>
                    <CardItem id={1} clickCard={this.clickCard}></CardItem>
                    <CardItem id={2} clickCard={this.clickCard}></CardItem>
                    <CardItem id={3} clickCard={this.clickCard}></CardItem>
                    <CardItem></CardItem>
                    <CardItem></CardItem>


                </div>
            )
        } else{

            return(
                <ContentText/>
            )
        }


    }
}


export default Content;