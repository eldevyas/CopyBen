import { SetOrder, ResetOrder } from "../Actions/OrderActions";
import { InitialState } from "../initialState";
export const OrderReducer = (state: any = InitialState.Order, action: { type: any, payload: any }) => {
    switch (action.type) {
        case SetOrder:
            return action.payload;
        case ResetOrder:
            return null;
        default:
            return state;
    }
}