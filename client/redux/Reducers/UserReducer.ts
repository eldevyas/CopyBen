import { InitialState } from "@/redux/initialState";
import { SetUser, ResetUser } from "../Actions/UserActions";

export const UserReducer = (state: any = InitialState.User as any, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case SetUser:
            return {
                ...state,
                User: action.payload,
            }
        case ResetUser:
            return {
                ...state,
                User: null,
            }
        default:
            return state;
    }
};