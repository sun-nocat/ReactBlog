import React from 'react'
import {Row,Col,PageHeader,BackTop,Empty} from 'antd';
import classes from './Work.css'
class Work extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'生活'
        }
    }


    render() {
        return (

            <Row className={classes.main}>
                <Row style={{ height: '50px' }}>
                    <Col lg={{ span: 12, offset: 6 }} xs={{ span: 24 }}>
                        <PageHeader
                            onBack={() => this.props.history.goBack()}
                            title={this.state.title}
                            style={{
                                left: "-20px", position: 'fixed', width: '110%', zIndex: '2',fontFamily:`-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`
                            }}
                        />
                        <BackTop />
                    </Col>
                </Row>
                <Col xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 6 }}>

             <Empty />
             

                </Col>
            </Row>

        )
    }
}


export default Work;