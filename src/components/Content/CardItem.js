import React from 'react'
import { Card, Tag, Statistic, Icon, Row, Col } from 'antd';




class CardItem extends React.Component {
    constructor(props){
        super(props)
        this.clicks = this.clicks.bind(this)
    }



    clicks(e){
        // console.log(this.props.id)

        this.props.clickCard(this.props.id)
        
    }

    render() {
        return (

            <div style={{ background: '#ECECEC', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '5px',paddingTop:'10px' }} >
                <Card
                    title="我是测试数据，哈哈哈哈"
                    extra={<Tag color="volcano">volcano</Tag>}
                    style={{ width: '100%', height: '110px' }}
                    bordered={false}
                    onClick={this.clicks}
                >

                    <Row>
                        <Col lg={{span:3}}  xs={{span:8}}> 
                            <Statistic value={1128} prefix={<Icon type="like" />} />
                        </Col>
                        <Col lg={{span:3}}  xs={{span:8}}>

                            <Statistic value={1128} prefix={<Icon type="message" />} />
                        </Col>
                        {/* <Col span={2} offset={16} >
                            2018/5/1
                        </Col> */}
                    </Row>

                    <span>
                    </span>
                    <span>


                    </span>



                </Card>




            </div>
        )
    }
}

export default CardItem;