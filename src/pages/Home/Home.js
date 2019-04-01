/*
 * @Author: sun_mingming@foxmail.com
 * @Description: 主页面
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-22 23:34:35
 * @LastEditTime: 2019-03-31 14:19:28
 */

import React from 'react'
import classes from './Home.css'

class Home extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            title: [0, 0, 0, 0, 0]
        }

        this.fontAnlmation = this.fontAnlmation.bind(this)
    }


    fontAnlmation(id) {

        var _this = this
        var list = Array(5)
        list[id] = true
        this.setState({ title: list })

        var lists = ['/Blog', '/Life','/Work','/About']

        setTimeout(() => {

            _this.props.history.push(lists[id])

        }, 300);



    }


    /**
     * 
     * 主页面，作为其他模块的出口
     */
    render() {
        return (
            <div className={classes.main}>
                <div className={classes.title}>
                    不吃鱼的猫
            </div>
                <div className={classes.home}>
                    <div className={this.state.title[0] ? classes.fontAnlmation : null}>
                        <div onClick={() => this.fontAnlmation(0)}>技术</div>
                    </div>
                    <div className={this.state.title[1] ? classes.fontAnlmation : null}>
                        <div onClick={() => this.fontAnlmation(1)}>生活</div>
                    </div>

                    <div className={this.state.title[2] ? classes.fontAnlmation : null}>
                        <div  onClick={() => this.fontAnlmation(2)}>历经&作品</div>
                    </div>
                    <div className={this.state.title[3] ? classes.fontAnlmation : null}>
                        <div onClick={() => this.fontAnlmation(3)}>个人简介</div>
                    </div>
                </div>

                <div className={classes.footer}>

                    @2018- 不吃鱼的猫 -博客
                    <br />
                    陕ICP备18020208号-1
            </div>
            </div>
        )
    }

}

export default Home
