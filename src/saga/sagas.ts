import {put,takeLatest,all,call} from 'redux-saga/effects';
import {ActionTypeWithStringPayload} from '../types/actions';
import {getSongsResponse} from '../actions';          
import { actionTypes } from '../consts/actions';

function* getFetchSearch(action:ActionTypeWithStringPayload){
    try {
        const response = yield call(async () => await fetch(`http://localhost:3002/?q=${action.payload}`));
        const parsed = yield call(async () => await response.json());
        if (!parsed.message) {
            yield put(getSongsResponse(parsed));
        } else {
            yield put(getSongsResponse([]));
        }
    } catch(e) {
        console.log(e)
    }
}

function* responseFetchSearch(){
    yield takeLatest(actionTypes.GET_SONGS, getFetchSearch)
}

export default function* rootSaga(){
    yield all([
        responseFetchSearch(),
    ])
}