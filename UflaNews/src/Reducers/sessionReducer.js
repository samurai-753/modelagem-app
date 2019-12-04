import { LOGIN_SUCCESS } from "../Actions/types";
import { ActionSheet } from "native-base";

export default (state, action) => {
    console.log("REDUCER", action)
    switch (action.type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return {
                profile: null
            }
    }
}