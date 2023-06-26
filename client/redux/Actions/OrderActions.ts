import { OrderInfo } from "../Types/Order";

// Action Types
export const SET_ORDER = "Order/Set";
export const RESET_ORDER = "Order/Reset";

// Action creators
export const SetOrder = (Order: OrderInfo) => {
    return {
        type: SET_ORDER,
        payload: Order,
    };
};

export const ResetOrder = () => {
    return {
        type: RESET_ORDER,
    };
};