/*
 * @Description: 博客页面左侧分类选择区
 * @Author: sun_mingming@foxmail.com
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-23 10:41:55
 */
import React from 'react';

import { Avatar, Row, Col, Divider, Menu, Icon, Card } from 'antd';
import SiderList from './SiderList'
import classes from './index.css'

import img from '../../../../static/image/blog_leftbanner.jpg'


class Sider extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {

        return (
            <div className={classes.card}>

                <div>

                    <Card type="inner" className={classes.cardItem}>
                        <Avatar size={64} icon="user" src={img} />
                        <div>
                            孙明明
                        </div>
                    </Card>
                </div>
                <Card type="inner" title='最新' className={classes.cardItem}>
                    违法威锋网 分为非

                </Card>
                <Card type="inner" title='个人分类' className={classes.cardItem}>
                    违法威锋网 分为非

                </Card>
                <Card type="inner" title='时间归档' className={classes.cardItem}>
                    违法威锋网 分为非

                </Card>
            </div>
        );
    }
}

export default Sider;
