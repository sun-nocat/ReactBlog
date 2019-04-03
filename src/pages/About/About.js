import React from 'react'
import { Row, Col, PageHeader, BackTop, Collapse, Icon } from 'antd';
import classes from './About.css'

const Panel = Collapse.Panel;
class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '个人简介'
        }
    }


    render() {
        return (

            <Row className={classes.main} style={{fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`}}>
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



                    {/* <Empty /> */}

                    <Collapse defaultActiveKey={['1']} onChange={this.callback}>
                        <Panel header="关于我" key="1">
                            <div>
                                <div style={{padding:'5px'}}> <Icon type="user" /><strong style={{paddingLeft:'5px'}} >姓名：</strong>孙明明/男</div>
                                <div style={{padding:'5px'}}> <Icon type="environment" /><strong style={{paddingLeft:'5px'}}>所在地：</strong>西安</div>
                                <div style={{padding:'5px'}}> <Icon type="idcard" /><strong style={{paddingLeft:'5px'}}>擅长：</strong>前端，Python Django</div>
                                <div style={{padding:'5px'}}> <Icon type="global" /><strong style={{paddingLeft:'5px'}}>学校：</strong>西安邮电大学/软件工程(2016-2020)</div>
                            </div>
                        </Panel>
                        <Panel header="简历" key="2">
                            <div>
                                你好啊！欢迎查看<a href="http://sun-nocat.xyz/getJianLi">我的简历</a> (更新时间：2019.3.30)
                            </div>
                        </Panel>


                        <Panel header="联系我" key="3">
                            <div>
                                <div style={{paddingLeft:'5px'}}>电话：151-2957-2234</div>
                                <div style={{paddingLeft:'5px'}}>邮箱：sun_nocat@163.com</div>
                                <div style={{paddingLeft:'5px'}}>GitHub：<a href="https://github.com/sun-nocat" target="_black">sun-nocat</a></div>
                            </div>
                        </Panel>

                    </Collapse>
                </Col>
            </Row>

        )
    }
}


export default About;