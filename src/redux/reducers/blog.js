/*
 * @Description: reducer函数
 * @Author: sunmingming
 * @Email: sun_mingming@foxmail.com
 * @Date: 2019-03-27 13:30:57
 */
import {
    GET_ARTICLE_LIST_SUCCESS,
    GET_ARTICLE_LIST_LOADING,
    GET_ARTICLE_SUCCESS,
    DEL_ARTICLE,
    DEL_ARTICLE_LIST
} from '../actions'

 function Blog(state={},action){
    switch (action.type) {
        case GET_ARTICLE_LIST_SUCCESS:
            return {
                ...state,
                articleList: action.payload
            }
        case GET_ARTICLE_SUCCESS:
            return {
                ...state,
                article:action.payload
            }
        case DEL_ARTICLE:
            return {
                ...state,
                article:action.payload
            }
        case DEL_ARTICLE_LIST:
            return {
                ...state,
                articleList:action.payload
            }


        default:
            return state
    }
 }  


export default Blog;