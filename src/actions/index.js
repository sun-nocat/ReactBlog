import axios from 'axios'
/**
 * action类型
 * 唯一改变数据state的方式就是去触发action，
 * action是一个用于描述描述已发生事件的普通对象
 */

/**
 * Action是把数据从应用传入store的有效载荷，他是store数据的唯一来源
 * 
 * 一般会使用store.dispatch()将action传到store
 */


//定义action.type中的变量
export const ADD_TODO = 'Add_Todo';
export const DEL_TODO = 'Del_Todo';

export const GET_ARTICLE = 'GET_AETICLE';

/**
 * action中的函数是用来返回一个action对象，
 */



/**
 * @method addTodo  增加一条内容
 * @param {String} text 增加的内容
 */
export const addTodo = (text) => {
    console.log(text)
    return {
        type: ADD_TODO,
        text
    }
}

/**
 * @method delTodo  删除数据
 * @param {String} text 删除数据的内容
 */
export const delTodo = (text) => {
    return {
        type: DEL_TODO,
        text
    }
}


const getArticleData = (data) => ({
    type: GET_ARTICLE,
    data
})

/**
 * @method getArticle 获取博客的标题数据，根据时间
 * @param {*} text 
 */
export const getArticlt = (text) => (dispatch, getState) => {
    axios.get('http://127.0.0.1:8000/get/articles').then((text)=>{
        console.log(text.data.status)
        if(text.data.status ==1){
            console.log('获取数据成功')

            dispatch(getArticleData(text.data.data))
        }
    }).catch((err)=>{console.log(err)})

}