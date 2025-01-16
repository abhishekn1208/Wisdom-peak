import { FETCH_FAILED, FETCH_REQUEST, FETCH_SEARCH_DATA, FETCH_SPECIFIC_USER, FETCH_SUCCESS, SET_CURRENT_PAGE, SET_ERROR, SET_SEARCH_OPTION, SET_SORT_OPTION, SPECIFIC_USER_OPEN } from './Action';
import {MyActionType} from './actiontypeinterface'
import {UserData} from './datatype'

interface State{
    user : UserData | [];
    isLoading : boolean;
    isError : boolean;
    error : string;
    currentPage : number,
    selectVal : string,
    searchVal : string,
    SearchData : UserData | [],
    SpecificUser : UserData | {},
    isOpen : boolean
}

const initState : State = {
    user : [],
    isLoading : false,
    isError : false,
    error : "",
    currentPage : 1,
    selectVal : "",
    searchVal : "",
    SearchData : [],
    SpecificUser : {},
    isOpen : false
}

export const userdetailsreducer=(state=initState, action : MyActionType) : State =>{
    switch(action.type){
        case FETCH_REQUEST : 
        return{
            ...state,
            isLoading : true,
            isError : false
        }
        case FETCH_SUCCESS :
            return{
                ...state,
                isLoading : false,
                user : action.payload
            }
        case FETCH_FAILED :
            return{
                ...state,
                isLoading : false,
                isError : true
            }
        case SET_ERROR : 
            return{
                ...state,
                isLoading : false,
                isError : true,
                error : action.payload
            }
        case SET_CURRENT_PAGE :
            return{
                ...state,
                currentPage : action.payload
            }
        case SET_SORT_OPTION :
            return{
                ...state,
                selectVal : action.payload
            }
        case SET_SEARCH_OPTION :
            return{
                ...state,
                searchVal : action.payload
            }
        case FETCH_SEARCH_DATA :
            return{
                ...state,
                SearchData : action.payload
            }
        case FETCH_SPECIFIC_USER :
            return{
                ...state,
                SpecificUser :action.payload
            }
        case SPECIFIC_USER_OPEN :
            return{
                ...state,
                isOpen : action.payload,
            }
        default :
        return state
    }
}