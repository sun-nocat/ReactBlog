/*
 * @Description: action创建函数
 * @Author: sunmingming
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-27 13:28:54
 */
import {
    GET_ARTICLE_LIST_SUCCESS,
    GET_ARTICLE_LIST_ERROR,
    GET_ARTICLE_LIST_LOADING,
    GET_ARTICLE_SUCCESS,
    DEL_ARTICLE
} from './index'

//获取数据成功
export function getArticleListSuccess(data) {
    return {
        type: GET_ARTICLE_LIST_SUCCESS,
        payload: data
    }
}



//获取数据失败
export function getArticleListError(error) {
    return {
        type: GET_ARTICLE_LIST_ERROR,
        payload: error
    }
}


export function getArticleLoading(loading) {
    return {
        type: GET_ARTICLE_LIST_LOADING,
        payload: loading
    }
}

//根据文章id获取文章内容数据
export function getArticleSuccess(data) {
    return {
        type: GET_ARTICLE_SUCCESS,
        payload: data
    }
}


//获取文章列表的函数
export function getArticleList() {
    return async function (dispatch) {
        try {
            let response = await fetch('http://sun-nocat.xyz/get/articles')
            let data = await response.json()

            dispatch(getArticleListSuccess(data))
        } catch (error) {
            dispatch(getArticleListError(error))
        }

    }
}
//根据id获取文章数据
export function getArticle(id) {
    return async function (dispatch) {
        try {
            let res = await fetch(`http://sun-nocat.xyz/get/article?id=${id}`)
            let data = await res.json()
            console.log(data)

            dispatch(getArticleSuccess(data.data[0]))
        } catch (error) {
            dispatch(getArticleSuccess(''))
        }
    }
}


//删除article中的内容

export function delArticle(dispatch) {
    return function(dispatch) {
        dispatch({
            type:DEL_ARTICLE,
            payload: ''
        })
    }
}