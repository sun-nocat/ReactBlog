import React from 'react'
import { Row, Col, PageHeader, BackTop, Collapse } from 'antd';
import classes from './life.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { getArticleList, getArticle, delArticle, delArticleList } from '../../redux/actions/blog'


const Panel = Collapse.Panel;

class Life extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '生活'
        }
    }


    callback(key) {
        console.log(key)
    }


    componentDidMount() {
        var _this = this
        _this.props.getArticleList('life')
    }

    componentWillUnmount() {
        this.props.delArticleList()

        
 }
    render() {
        console.log(this.props.history)
        return (

            <Row className={classes.main}>
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


                    <Collapse defaultActiveKey={['1']} onChange={this.callback}>
                        <Panel header="记录" key="1">
                            {this.props.articleList.data&&
                                this.props.articleList.data.map((item)=>{
                                    return (
                                        <div style={{fontSize:'18px',lineHeight:'30px',overflow:'hidden'}}>
                                            <Link to={{pathname:'/Life/item',state:{id:item.id,title:'生活'}}}>{item.title}</Link>
                                        </div>
                                    )
                                })
                            }
                        </Panel>
                    </Collapse>
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



export default connect(mapStateToProps, mapDispatchToProps)(Life);