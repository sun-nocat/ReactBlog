/*
 * @Author: sun_mingming@foxmail.com
 * @Description: 博客页面
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-23 09:50:33
 * @LastEditTime: 2019-03-27 22:37:23
 */

import React from 'react'
import { Row, Col, Card, Breadcrumb, Icon, Button, Radio, Spin, Alert, BackTop } from 'antd';
import components from './components'
import classes from './Blog.css'

import { connect } from 'react-redux'
import { getArticleList, getArticle, delArticle } from '../../redux/actions/blog'



const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const height = {
    height: '100%'
}
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;


class Blog extends React.Component {

    constructor(props) {
        super(props)
        this.getComponent = this.getComponent.bind(this)
        this.returnBlog = this.returnBlog.bind(this)
        this.isShow = this.isShow.bind(this)
        this.handleSizeChange = this.handleSizeChange.bind(this)

        this.state = {
            isList: true,
            isShow: true,
            radio: 'new' //用户选择的类型
        }
    }




    getComponent(name) {

        let Component = ''
        components.map(function (item) {
            if (name === item.name) {
                Component = item.component

            }
        })

        return <Component article={this.props.article} getArticle={this.props.getArticle} articleList={this.props.articleList} history={this.props.history} isList={this.state.isList} isShow={this.isShow} />;
    }

    isShow() {
        console.log('ssssss')
        this.setState({ isShow: false })
        this.setState({ isList: false })

    }


    /**
     * 点击Blog按钮  //清除Blog.article
     */
    returnBlog() {
        this.props.delArticle()
        this.setState({ isList: true })
        this.setState({ isShow: true })


    }

    handleSizeChange(e) {
        console.log(e.target.value)
        this.props.getArticleList(e.target.value)

        this.setState({ radio: e.target.value })

    }

    componentDidMount() {
        this.props.getArticleList(this.state.radio)
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
                        <div>
                            <BackTop />
                        </div>

                    </Col>

                </Row>
                {
                    this.state.isShow ? <Row>
                        <Col lg={{ span: 24, offset: 0 }}>
                            <div style={{ width: '100%', height: '50px', borderTop: 'solid 1px #eeeeee', textAlign: 'center', lineHeight: '60px' }}>
                                <div style={{ margin: 'auto' }}>
                                    <RadioGroup onChange={this.handleSizeChange} defaultValue={this.state.radio}>
                                        <RadioButton value="new">最新</RadioButton>
                                        <RadioButton value="first">前端</RadioButton>
                                        <RadioButton value="end">后端</RadioButton>
                                        <RadioButton value="code">算法</RadioButton>
                                        <RadioButton value="other">其他</RadioButton>
                                    </RadioGroup>

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

//来自store中的数据
const mapStateToProps = (state, ownProps) => ({
    articleList: state.Blog.articleList,
    article: state.Blog.article
})
//来自acrion中的方法
const mapDispatchToProps = {
    getArticleList,
    getArticle,
    delArticle
}



export default connect(mapStateToProps, mapDispatchToProps)(Blog);
