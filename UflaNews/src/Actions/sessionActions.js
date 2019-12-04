import { LOGIN_SUCCESS } from "./types";
import * as Server from "../Server";

export function login(payload){
    return {
        type: LOGIN_SUCCESS,
        profile: payload        
    };
}