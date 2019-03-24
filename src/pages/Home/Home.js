/*
 * @Author: sun_mingming@foxmail.com
 * @Description: 主页面
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-22 23:34:35
 * @LastEditTime: 2019-03-23 21:05:18
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { Rate } from 'antd';

import Animation from '../animation'
import Blog from '../Blog'
import classes from './Home.css'

class Home extends React.Component{



    /**
     * 
     * 主页面，作为其他模块的出口
     */
    render(){
        return(
            <div>
                <div>
                    <Link to={'/Blog'} className={classes.test}>技术</Link>
                    <Rate allowHalf defaultValue={2.5} />
                </div>
                <div>
                    <Link to={'/animation'}>生活</Link>
                </div>

                <div>
                    <Link to={'/animation'}>经历&作品</Link>
                </div>
                <div>
                    <Link to={'/animation'}>个人简介</Link>
                </div>
            </div>
        )
    }

}

export default Home
