  
import {actionTypes} from '../consts/actions';

export const getSongsRequest = (query:string) => ({type: actionTypes.GET_SONGS, payload: query});

export const getSongsResponse = (data:Array<any>) => ({type: actionTypes.GOT_SONGS, payload: data})