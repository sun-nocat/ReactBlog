import React from 'react'

import CardItem from './CardItem'

const style = {
    // backgroundColor: 'red'
}

class Content extends React.Component {

    constructor(props){
        super(props)
        this.state={
            id:''
        }

        this.clickCard = this.clickCard.bind(this)
    }


    clickCard(id){
        console.log('index')
        console.log(id)
        this.setState({id:id})
    

    }

    render() {
        return (
            <div style={style}>

                <CardItem  id={1} clickCard={this.clickCard} ></CardItem>
                <CardItem  id={2} clickCard={this.clickCard}></CardItem>
                <CardItem  id={3} clickCard={this.clickCard}></CardItem>
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
    }
}


export default Content;