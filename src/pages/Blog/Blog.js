/*
 * @Author: sun_mingming@foxmail.com
 * @Description: 博客页面
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-23 09:50:33
 * @LastEditTime: 2019-03-31 15:58:16
 */

import React from 'react'
import { Row, Col, Icon, Empty,  Radio, BackTop, PageHeader } from 'antd';
import components from './components'
import classes from './Blog.css'

import { connect } from 'react-redux'
import { getArticleList, getArticle, delArticle, delArticleList } from '../../redux/actions/blog'



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
            title: '',
            radio: 'new' //用户选择的类型
        }
    }



    /**
     * 根据参数，返回组件 
     */
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

        if (this.state.isShow) {
            this.setState({ isShow: false })
            this.setState({ isList: false })

        } else {
            this.props.delArticle()

            this.setState({ isShow: true })
            this.setState({ isList: true })
        }


    }


    /**
     * 点击Blog按钮  //清除Blog.article
     */
    returnBlog() {
        this.props.delArticle()
        this.props.history.replace('/Blog')
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
        this.changeTitle()
        var _this = this
        //设置监听路由
        this.props.history.listen(() => {
            console.log('路由改变')
            _this.changeTitle()
        })
    }

    componentWillUnmount() {
        this.props.delArticleList()

        
 }
    //设置返回标题
    changeTitle() {
        if (this.props.history.location.pathname == '/Blog') {
            this.setState({ title: '文章列表' })
            // this.props.isShow()
        } else if (this.props.history.location.pathname == '/Blog/item') {
            this.setState({ title: "文章详情页" })
        }
    }

    render() {

        return (
            <Row className={classes.main}>
                {/* 移动端下的左侧菜单*/}
                <Row style={{ height: '50px' }}>
                    <Col lg={{ span: 12, offset: 6 }} xs={{ span: 24 }}>
                        <PageHeader
                            onBack={() => this.props.history.goBack()}
                            title={this.state.title}
                            // subTitle="This is a subtitle"
                            style={{
                                left: "-20px", position: 'fixed', width: '110%', zIndex: '2'
                            }}
                        />
                        <BackTop />


                    </Col>
                    <Col lg={{ span: 0, offset: 0 }} xs={{ span: 8 }}>

                        <div style={{ textAlign: 'center', lineHeight: '50px', fontSize: '18px', fontWeight: '700', color: 'black' }}>
                            {/* 不吃鱼的猫 */}
                        </div>
                        <div>
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

                <Col xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 6 }}>
                    {
                        this.getComponent('Content')
                    }
                    {
                        this.props.articleList.status === '0' && (<Empty />)
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
    delArticle,
    delArticleList
}



export default connect(mapStateToProps, mapDispatchToProps)(Blog);
