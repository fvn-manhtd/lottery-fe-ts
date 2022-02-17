import { LotteryModel } from "./lottery";

export interface User {
    id?: number;
    email?: string;
    last_name?: string;
    first_name?: string;
    last_name_kana?: string;
    first_name_kana?: string;
    post_code?: string;
    prefecture?: string;
    address?: string;
    phone_number?: string;
    note?: string;
}

export interface UserCard {
    id?: number;
    brand?: string;
    exp_month?: number;
    exp_year?: number;
    last4?: number;
    name?: string;
    created?: number;
}

export interface UserCart extends User {
    lotteryInCart: number;
    lotteries: LotteryModel[];
}

export interface UserFavorite {
    lottery_category_id: number;
    shop_id: number;
    lottery_id: number;
    title: string;
    image: string;
    startedAt: string;
    endedAt: string;
    status: number;
    shop_domain: string;
}