
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
    total_price_in_cart     : number;  //カート内商品の合計金額。
	total_sales_fee_in_cart : number;  //カート内商品への販売手数料合計。
	total_discount_in_cart  : number;  //カート内商品への適用割引金額合計。
	total_amount_in_cart    : number;  //カート内商品の購入総量。
	shipping_fee            : number;  //選択中のエリアの送料。
	result_price_in_cart    : number;  //カートの最終計算金額。
	total_price_at_the_time : number;  //カートに入れた当時の合計金額。
    carts: CartItem[];
}