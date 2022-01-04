import {combineReducers} from "redux"
import {SET_ID,REVEAL,SET_THEME_ID,CHOOSE,INIT_CHOOSE} from "../actions";


const colorTheme = (state = 0, action) =>{
    switch (action.type){
        case SET_THEME_ID:
            return action.payload
        default:
            return state
    }
}

const colorMenu = (state = 0,action)=>{
    switch (action.type) {
        case SET_ID:
            return action.payload
        default:
            return state
    }
}

const hiddenMenu = (state = true,action)=>{
    switch (action.type){
        case REVEAL:
            return !state
        default:
            return state
    }
}

const chooseFruit = (state = false,action)=>{
    switch (action.type){
        case CHOOSE:
            return action.payload
        case INIT_CHOOSE:
            return action.payload
        default:
            return state
    }
}

const rootReducer = combineReducers({
    colorMenu,
    hiddenMenu,
    chooseFruit,
    colorTheme

})

export default rootReducer