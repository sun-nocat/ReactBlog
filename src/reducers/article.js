import { GET_ARTICLE } from '../actions' 
const initialState = {
    posts:{

    },
}


function article(state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLE:
            console.log('get_article')
                console.log(action.data)
                console.log(state)
                console.log({
                    ...state
                })
               return {...state}
        default:
            return state
    }



}


export default article;