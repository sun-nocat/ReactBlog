import React from 'react'
import { Row, Col,Avatar } from 'antd'

import HeaderLeft from './HeaderLeft'
const style = {
    backgroundColor: '#888',
    height: '50px',
    position:'fixed',
    zIndex:'10',
    width:'100%'

}



class Header extends React.Component {




    render() {
        return (
            <Row style={style}>
                <Col xs={{ span: 8 }}>
                    <HeaderLeft></HeaderLeft>
                </Col>
                <Col xs={{ span: 8 }}> <div style={{textAlign:'center',lineHeight:'50px',fontSize:'18px',fontWeight:'700'}}>不吃鱼的猫</div> </Col>
                <Col xs={{ span: 8 }}>
                    <Avatar size={40} icon="user" style={{float:'right',margin:'5px'}} />
                </Col>
            </Row>
        )
    }
}


export default Header;