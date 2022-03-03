import { LotteryModelDetail } from "./lottery";
import { ProductModel } from "./product";

export interface LotteryAggregate {
    count: [
        {
            count: number;
            lottery_product_id: number;
            id: number;
            order_ticket_id: number;
            lottery_product_name: string;
            order_status: number;
            selected_rank: number;
            lottery_product_selection_period: string;
            created_at: string;
            updated_at: string;
            lottery_product: ProductModel
        }
    ]
}
export interface OrderPrize {
    id: number;
    order_ticket_id: number;
    lottery_product_id: number;
    lottery_product_name: string;
    order_status: number;
    selected_rank: number;
    lottery_product_selection_period: string;
    created_at: string;
    updated_at: string;
    lottery_product: ProductModel
}

export interface OrderTicket {
    id: number;
    order_id: number;
    lottery_id: number;
    lottery_title: string;
    lottery_ticket_catalog_id: number;
    lottery_ticket_catalog_name: string;
    single_price: number;
    purchase_amount: number;
    goods_subtotal: number;
    tax_rate: number;
    total_tax: number;
    coupon_id: number;
    coupon_name: string;
    discount_rate: number;
    discount_price: number;
    total_price: number;
    order_status: number;
    created_at: string;
    updated_at: string;
    lottery_aggregate: LotteryAggregate;
    order_prize: OrderPrize[];
    lottery: LotteryModelDetail;

}

export interface Order {
    id: number;
    user_id: number;
    goods_subtotal: number;
    shipping_method: string;
    shipping_fee: number;
    total_tax: number;
    total_discount_amount: number;
    total_discount_price: number;
    total_price: number;
    payment_method: string;
    payment_status: number;
    order_status: number;    
    order_last_name: string;
    order_first_name: string;
    order_last_name_kana: string;
    order_first_name_kana: string;
    order_post_code: string;
    order_prefecture: string;
    order_address: string;
    order_phone_number: string;
    recipient_last_name: string;
    recipient_first_name: string;
    recipient_last_name_kana: string;
    recipient_first_name_kana: string;
    recipient_post_code: string;
    recipient_prefecture: string;
    recipient_address: string;
    recipient_phone_number: string;
    created_at: string;
    updated_at: string;
   
}

export interface OrderItem {
    id: number;
    shop_id: number;
    user_id: number;
    order_id: number;
    order: Order
    order_ticket: OrderTicket[]
}

export interface OrderList {
    orders: OrderItem[]
}