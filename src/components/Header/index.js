import React from 'react'
import { Row,Col } from 'antd'

import HeaderLeft from './HeaderLeft'
const style = {
    backgroundColor:'#888',
    height:'40px'

}



class Header extends React.Component{

    


    render(){
        return(
            <Row style={style}>
                <Col  xs={{span:8}}>
                <HeaderLeft></HeaderLeft>
                </Col>
                <Col  xs={{span:8}}>不吃鱼的猫</Col>
                <Col  xs={{span:8}}>3</Col>
            </Row>
        )
    }
}


export default Header;