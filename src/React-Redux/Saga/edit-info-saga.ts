import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { editInfoAction } from "../Actions";
import { editInfoAPI } from "../../Axios/edit-info";
import { selectToken } from "../../helper";
import { editInfoSucceeded , editInfoFailed  , editInfo} from "../Actions/info-action";

const actionType = union(editInfo);

function* editInfoSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(editInfoAPI, token , action.payload.data, action.payload.id);
        console.log('===>' , res.data.data)
        yield put(editInfoSucceeded(res.data.data));
        
    } catch (e) {
        yield put(editInfoFailed(e));
       
    } 
}

export function* watchEditInfoSaga() {
    yield takeLatest(editInfoAction.requested, editInfoSaga);
}
