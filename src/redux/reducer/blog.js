import { GET_ARTICLE } from '../action/index.js'


const initialState = {
    posts:{
        msg:'这是state的结构'
    }
}


function article(state = initialState, action){
    switch(action.type){
        case GET_ARTICLE:
            console.log('get_article')

            return {...state}

        default:
            return state
    }
}


export default article;