/*
 * @Description: action创建函数
 * @Author: sunmingming
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-27 13:28:54
 */
import {
    GET_ARTICLE_SUCCESS,
    GET_ARTICLE_ERROR,
    GET_ARTICLE_LOADING
} from './index'

 //获取数据成功
export function getArticleSuccess(data) {
    return {
        type: GET_ARTICLE_SUCCESS,
        payload: data
    }
}

//获取数据失败
export function getArticleError(error) {
    return {
        type:GET_ARTICLE_ERROR,
        payload:error
    }
}


export function getArticleLoading(loading){
    return {
        type:GET_ARTICLE_LOADING,
        payload: loading
    }
}


//获取数据的函数
export function getArticle() {
    return async function(dispatch){
        try{
            let response = await fetch('http://sun-nocat.xyz/get/articles')
            let data = await response.json()
            dispatch(getArticleSuccess(data))
        }catch(error){
            dispatch(getArticleError(error))
        }

    }
}