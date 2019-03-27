/*
 * @Description: 加载中组件
 * @Author: sun_mingming@foxmail.com
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-27 22:07:40
 */
import React from 'react'
import { Spin, Icon } from 'antd';

 function Spins(){

    return <Icon type="loading" style={{ fontSize: 24,position:'fixed',right:'14px',color:'#006eff',top:'8px'}} spin />;
}


export default Spins