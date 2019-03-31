import React from 'react'
import { Row, Col, PageHeader, BackTop, Empty } from 'antd';
import { connect } from 'react-redux'
import { getArticleList, getArticle, delArticle, delArticleList } from '../../../redux/actions/blog'

class LifeItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            article: ''
        }
    }


    //根据文章id内容获取数据
    componentDidMount() {
        var _this = this
        var state = this.props.history.location.state
        state ? this.setState({ id: state.id }) : this.setState({ id: false })

        if (state) {
            this.setState({ id: state.id })
            _this.props.getArticle(state.id)
        }
    }
    change(txt) {
        return txt.replace(/width:\d+px/g, `width:100%`).replace(/<pre/g, `<pre style="background:#f6f7f8"`).replace(/<img\s/g, `<img style="width:100%"`).replace(/style="/g, `style="width:100%;overflow:scroll;`)
    }

    render() {

        const txt = this.props.article.content
        console.log(txt)

        console.log(this.state.id)
        return (
            <Row style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                fontFamily: 'NaiYou1874ae58a21f703'
            }}>
                <Row style={{ height: '50px' }}>
                    <Col lg={{ span: 12, offset: 6 }} xs={{ span: 24 }}>
                        <PageHeader
                            onBack={() => this.props.history.goBack()}
                            title="生活"
                            style={{
                                left: "-20px", position: 'fixed', width: '110%', zIndex: '2', fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`
                            }}
                        />
                        <BackTop />
                    </Col>
                </Row>
                <Col xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 6 }}>


                    <div style={{ padding: '1rem' }}>
                        <div>
                            {txt && (<div dangerouslySetInnerHTML={{ __html: this.change(txt) }} />)}
                            {!txt && (<Empty />)}
                        </div>
                    </div>

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



export default connect(mapStateToProps, mapDispatchToProps)(LifeItem);