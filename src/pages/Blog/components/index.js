/*
 * @Description: 将一个页面内部的所有组件导出为一个数组
 * @Author: sun_mingming@foxmail.com
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-23 10:14:31
 */
import Content from './Content'
import Sider from './Sider'




const components = [
    {
        name:'Content',
        component:Content
    },

    {
        name:'Sider',
        component:Sider
    },
]



export default components;