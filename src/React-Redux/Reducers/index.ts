import {combineReducers} from 'redux';
import { PersistConfig,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {authReducer} from './auth-reducer';
import {adminsReducer} from './admins-reducer';
import {studentsReducer} from './students-reducer';
import {sliderItemsReducer} from './slider-reducer';
import {aboutReducer} from './about-reducer';
import {statisticReducer} from './statistics-reducer';
import {galleryImagesReducer} from './gallery-reducer';
import {blogReducer} from './blog-reducer';
import {contactsReducer} from './contacts-reducer';
import {featuresReducer} from './features-reducer';
import {infoReducer} from './info-reducer';

const persistAuth: PersistConfig = {
    key: "authReducer",
    storage,
    blacklist: ["loadingStatus"]
};

export const rootReducer = combineReducers({
    authReducer: persistReducer(persistAuth, authReducer),
    adminsReducer,
    studentsReducer,
    sliderItemsReducer,
    aboutReducer,
    statisticReducer,
    galleryImagesReducer,
    blogReducer,
    contactsReducer,
    featuresReducer,

    infoReducer
});

type rootReducer = typeof rootReducer;

type returnTypeInferrer<T> = T extends (state: any, action: any) => infer U
    ? U
    : never;
type rootState = returnTypeInferrer<rootReducer>;
export interface IRootReducerState extends rootState {}

export default rootReducer;



// export const saveToLocalStorage = (state:string) =>{
//     try{
//         const serializedState = JSON.stringify(state);
//         localStorage.setItem('token' , serializedState)
//     }catch(e){
//         console.log(e);
//     }
//     }
// }

// export const loadFromLocalStorage = () =>{
//     try{
//         const data = localStorage.getItem('token');
//         if(data === null)return undefined
//         return JSON.parse(data);
//     }catch(e){
//         console.log(e);
//     }
// }
