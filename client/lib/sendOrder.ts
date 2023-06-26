import { OrderInfo } from "@/redux/Types/Order";

export async function sendOrder(Order: OrderInfo) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;


    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Order),
    };

    const Response = fetch(`${API_URL}/api/order`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        }).catch((error) => {
            console.log(error);
            return null;
        });

    return Response;
}