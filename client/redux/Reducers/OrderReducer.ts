import { OrderInfo } from '@/redux/Types/Order';
import { SET_ORDER, RESET_ORDER } from "../Actions/OrderActions";
import { InitialState } from "../initialState";

export const OrderReducer = (state: OrderInfo | null = InitialState.Order, action: { type: string, payload: OrderInfo }) => {
    switch (action.type) {
        case SET_ORDER:
            return action.payload;
        case RESET_ORDER:
            return null;
        default:
            return state;
    }
}
