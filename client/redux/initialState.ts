import { OrderInfo } from "./Types/Order"
import { UserType } from "./Types/User"

export const InitialState: {
    Auth: {
        isAuthenticated: boolean,
        User: UserType | null,
    },
    Order: OrderInfo | null,
} = {
    Auth: {
        isAuthenticated: false,
        User: null,
    },
    Order: null,
}