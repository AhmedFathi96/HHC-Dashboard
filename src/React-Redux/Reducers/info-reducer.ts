import { reducer, on } from "ts-action";
import { getInfoSucceeded  , editInfoSucceeded, } from "../Actions/info-action";
import { IInfo } from "../../lib/index";

interface IState{
    Info: IInfo;
    info_is_loading:boolean
    
}

export const infoReducer = reducer<IState>(
    {
        Info: {
            _id: '',
            about_header:'',
            address:'',
            footer_copyrights:'',
            contact_header:'',
            email:'',
            facebook_url:'',
            features_header:'',
            submitting_message:'',
            gallery_header:'',
            instagram_url:"",
            map_url:'',
            phone:'',
            projects_header:"",
            statistics_header:'',
            twitter_url:'',
            whatsapp_number:'',
            youtube_url:''
        },
        info_is_loading:false
    },
    on(getInfoSucceeded, (state, { payload }) => ({
        ...state,
        Info: payload,
        info_is_loading:true
    })),

    on(editInfoSucceeded, (state, { payload }) => {
        const oldData = state.Info;
        const newsInfo = payload;
        return{
            ...state,
            Info: {
                ...oldData, ...newsInfo
            },
            info_is_loading:true
        }
    }),
    
    
)