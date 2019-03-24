/*
 * @Author: sun_mingming@foxmail.com
 * @Description: 博客页面
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-23 09:50:33
 * @LastEditTime: 2019-03-24 23:40:45
 */

import React from 'react'
import { Row, Col, Card, Breadcrumb, Icon } from 'antd';
import components from './components'
import classes from './Blog.css'

const height = {
    height: '100%'
}


class Blog extends React.Component {

    constructor(props) {
        super(props)
        this.getComponent = this.getComponent.bind(this)
        this.returnBlog = this.returnBlog.bind(this)
        this.isShow = this.isShow.bind(this)

        this.state = {
            isList: true,
            isShow: true
        }
    }




    getComponent(name) {

        let Component = ''
        components.map(function (item) {
            if (name === item.name) {
                Component = item.component

            }
        })
        return <Component history={this.props.history} isList={this.state.isList} isShow={this.isShow} />;
    }

    isShow(){
        console.log('ssssss')
        this.setState({isShow:false})
        this.setState({ isList: false })

    }


    /**
     * 点击Blog按钮
     */
    returnBlog() {
        this.setState({ isList: false })
        this.setState({isShow:true})
    }


    render() {

        return (
            <Row className={classes.main}>
                {/* 移动端下的左侧菜单*/}
                <Row style={{ height: '50px' }}>
                    <Col lg={{ span: 0, offset: 0 }} xs={{ span: 8 }}>
                        <Breadcrumb style={{ lineHeight: '50px', }}>
                            <Breadcrumb.Item><a href="/#">Home</a></Breadcrumb.Item>
                            <Breadcrumb.Item onClick={() => { this.returnBlog() }} style={{ cursor: 'pointer' }}>Blog</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                    <Col lg={{ span: 0, offset: 0 }} xs={{ span: 8 }}>

                        <div style={{ textAlign: 'center', lineHeight: '50px', fontSize: '18px', fontWeight: '700', color: 'black' }}>
                            不吃鱼的猫</div>

                    </Col>
                </Row>
                {
                    this.state.isShow ? <Row>
                        <Col lg={{ span: 24, offset: 0 }}>
                            <div style={{ width: '100%', height: '50px', borderTop: 'solid 1px #eeeeee' }}>
                                <div>
                                    sss
                            </div>
                            </div>
                        </Col>
                    </Row> : null

                }

                <Col xs={{ span: 0, offset: 0 }} lg={{ span: 5, offset: 1 }} style={height}>
                    {
                        this.getComponent('Sider')
                    }
                </Col>
                <Col xs={{ span: 24, offset: 0 }} lg={{ span: 17, offset: 0 }}>
                    {
                        this.getComponent('Content')
                    }
                </Col>
            </Row>
        )
    }
}

export default Blog;
