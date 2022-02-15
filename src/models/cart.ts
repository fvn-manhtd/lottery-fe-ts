
export interface CartItem {
    shop_id: number;
    lottery_ticket_catalog_id: number;
    lottery_title: string;
    number_of_times: number;
    amount: number;
    price: number;
    price_at_the_time: number;
    lottery_image: string;
    lottery_status: number;
}

export interface Cart {
    total_price_in_cart: number;
    total_amount_in_cart: number;
    total_price_at_the_time: number;    
    carts: CartItem[]
}