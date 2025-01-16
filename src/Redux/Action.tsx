
import { FetchFailedAction, FetchRequestAction, FetchSearchData, FetchSuccessAction, SetErrorAction, SetPageAction, SetSearchOption, SetSortAction, SpecificUserData, SpecificUserOpen } from "./actiontypeinterface"
import { UserData } from "./datatype"

export const FETCH_REQUEST = 'FETCH_REQUEST'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILED = 'FETCH_FAILED'
export const SET_ERROR = 'SET_ERROR'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_SORT_OPTION = 'SET_SORT_OPTION'
export const SET_SEARCH_OPTION = 'SET_SEARCH_OPTION'
export const FETCH_SEARCH_DATA = 'FETCH_SEARCH_DATA'
export const FETCH_SPECIFIC_USER = 'FETCH_SPECIFIC_USER'
export const SPECIFIC_USER_OPEN = 'SPECIFIC_USER_OPEN'



export const fetchrequest=() : FetchRequestAction =>{
    return{
        type : FETCH_REQUEST
    }
}

export const fetchsuccess=(payload : UserData) : FetchSuccessAction =>{
    return{
        type : FETCH_SUCCESS,
        payload
    }
}

export const fetchrequestfailed=() : FetchFailedAction =>{
    return{
        type : FETCH_FAILED
    }
}

export const seterror=(payload : string ) : SetErrorAction =>{
    return{
        type : SET_ERROR,
        payload
    }
}

export const setcurrentpage=(payload : number) : SetPageAction=>{
    return{
        type : SET_CURRENT_PAGE,
        payload
    }
}

export const setsortingoption=(payload : string) : SetSortAction=>{
    return{
        type : SET_SORT_OPTION,
        payload
    }
}

export const setsearchoption=(payload : string) : SetSearchOption =>{
    return{
        type : SET_SEARCH_OPTION,
        payload
    }
}

export const fetchsearchdata=(payload : UserData) : FetchSearchData =>{
    return{
        type : FETCH_SEARCH_DATA,
        payload
    }
}

export const fetchspecificuser=(payload : UserData) : SpecificUserData =>{
    return{
        type : FETCH_SPECIFIC_USER,
        payload
    }
}

export const specificuserOpen=(payload : boolean) : SpecificUserOpen =>{
    return{
        type : SPECIFIC_USER_OPEN,
        payload
    }
}