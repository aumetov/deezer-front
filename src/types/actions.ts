import { actionTypes } from "../consts/actions";

export interface ActionTypeWithStringPayload{
    type: typeof actionTypes.GET_SONGS;
    payload: string;
}

export interface ActionTypeWithArray{
    type: typeof actionTypes.GOT_SONGS;
    payload: Array<any>
}