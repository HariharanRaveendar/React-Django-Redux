import { GET_ARTICLES, DELETE_ARTICLE,ADD_ARTICLES ,GET_SINGLE_ARTICLE} from "../actions/types";

const initialState = {
    articles:[],
    article:{},
    success: null,

}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ARTICLES:
            return{
                ...state,
                articles:action.payload
            };
        case DELETE_ARTICLE:
            return {
                ...state,
                articles:state.articles.filter(article => article.id !== action.payload)
            }
        case GET_SINGLE_ARTICLE:
            return {
                ...state,
                article:action.payload
            }
        case ADD_ARTICLES:
            return{
                ...state,
                articles:[...state.articles,action.payload],
                success: true,
            }
        default:
            return state;
    }
}