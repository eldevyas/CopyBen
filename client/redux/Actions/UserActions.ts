
// Action Types
export const SET_USER = "User/Set";
export const RESET_USER = "User/Reset";

export const SetUser = (User: any) => {
    return {
        type: SET_USER,
        payload: User,
    };
}

export const ResetUser = () => {
    return {
        type: RESET_USER,
    };
}