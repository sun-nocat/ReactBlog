import React from 'react'
import { Row, Col, PageHeader, BackTop, Empty, Timeline, Tag } from 'antd';
import { Link } from 'react-router-dom'
import classes from './Work.css'
class Work extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '经历&作品'
        }
    }


    render() {
        return (

            <Row className={classes.main} style={{ fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'` }}>
                <Row style={{ height: '50px' }}>
                    <Col lg={{ span: 12, offset: 6 }} xs={{ span: 24 }}>
                        <PageHeader
                            onBack={() => this.props.history.goBack()}
                            title={this.state.title}
                            style={{
                                left: "-20px", position: 'fixed', width: '110%', zIndex: '2', fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`
                            }}
                        />
                        <BackTop />
                    </Col>
                </Row>
                <Col xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 6 }}>


                    <div style={{ padding: '1rem' }}>
                        <Timeline>
                            <Timeline.Item><div>2016-09</div>迈入大学校门
                            </Timeline.Item>
                            <Timeline.Item><div>2016-09</div>15天的军训过后，第一次接触编程
                            </Timeline.Item>
                            <Timeline.Item><div>2017-05</div>3此面试后 加入智邮普创工作室，第一次参观机房，见到真的交换机，服务器，EMC，刀箱
                            </Timeline.Item>
                            <Timeline.Item><div>2017-07</div>为期一个月的暑假留校生活开始（工作室传统）
                            </Timeline.Item>
                            <Timeline.Item><div>2017-09</div>开始学习Python
                            </Timeline.Item>
                            <Timeline.Item><div>2017-12</div>
                                <Link to={{ pathname: '/Life/item', state: { id: '1', title: '项目' } }}>  使用Django写了第一个项目（todolist后台）</Link>
                              
                            </Timeline.Item>
                            <Timeline.Item>
                                <Link to={{ pathname: '/Life/item', state: { id: '1', title: '项目' } }}>校园账单</Link>
                            </Timeline.Item>
                        </Timeline>
                    </div>



                    {/* <Empty /> */}


                </Col>
            </Row>

        )
    }
}


export default Work;