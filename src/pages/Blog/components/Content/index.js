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
        this.setState({isList:false})
        this.setState({ id: id })
        console.log('cick')
        this.props.isShow()

    }

    componentWillReceiveProps(){
        this.setState({isList:true})
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
                    <CardItem></CardItem>
                    <CardItem></CardItem>
                    <CardItem></CardItem>
                    <CardItem></CardItem>
                    <CardItem></CardItem>
                    <CardItem></CardItem>
                    <CardItem></CardItem>
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