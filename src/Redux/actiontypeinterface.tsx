import {
  FETCH_FAILED,
  FETCH_REQUEST,
  FETCH_SEARCH_DATA,
  FETCH_SPECIFIC_USER,
  FETCH_SUCCESS,
  SET_CURRENT_PAGE,
  SET_ERROR,
  SET_SEARCH_OPTION,
  SET_SORT_OPTION,
  SPECIFIC_USER_OPEN,
} from "./Action";
import { UserData } from "./datatype";

export interface FetchRequestAction {
  type: typeof FETCH_REQUEST;
}

export interface FetchSuccessAction {
  type: typeof FETCH_SUCCESS;
  payload: UserData;
}

export interface FetchFailedAction {
  type: typeof FETCH_FAILED;
}

export interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export interface SetPageAction {
  type: typeof SET_CURRENT_PAGE;
  payload: number;
}

export interface SetSortAction {
  type: typeof SET_SORT_OPTION;
  payload: string;
}

export interface SetSearchOption {
  type: typeof SET_SEARCH_OPTION;
  payload: string;
}

export interface FetchSearchData {
  type: typeof FETCH_SEARCH_DATA;
  payload: UserData;
}

export interface SpecificUserData {
  type: typeof FETCH_SPECIFIC_USER;
  payload: UserData;
}

export interface SpecificUserOpen{
  type : typeof SPECIFIC_USER_OPEN,
  payload : boolean
}

export type MyActionType =
  | FetchRequestAction
  | FetchSuccessAction
  | FetchFailedAction
  | SetErrorAction
  | SetPageAction
  | SetSortAction
  | SetSearchOption
  | FetchSearchData
  |SpecificUserData
  |SpecificUserOpen;
