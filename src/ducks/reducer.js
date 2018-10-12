
import axios from 'axios';


const initialState = {
    username: '' ,
    id: 0,
    profile_picture: '',
}

const UPDATE_INFO= "UPDATE_INFO"

export function updateInfo(username, id, profile_picture){
    return {
        type: UPDATE_INFO,
        payload: {
            username: username,
            id: id,
            profile_picture: profile_picture
        }
    }
}
export default function reducer(state=initialState, action){
    let { payload } = action;
    switch(action.type) {
        case UPDATE_INFO:
            return Object.assign({}, state, {
                username: action.payload.username, 
                id: action.payload.id, 
                profile_picture: action.payload.profile_picture
            })
        default: return state
    }

}