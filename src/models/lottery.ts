import { PaginationParams } from "./common";

export const LOTTERY_STATUS = [
    '販売中',
    '終了間際',
    '販売予定',
] as const
export interface LotteryModelDetail {
    id?: number;
    title?: string;
    image?: string;
    thumbnailImage?: string;
    startedAt?: string;
    endedAt?: string;
    status?: typeof LOTTERY_STATUS[number];
    url?: string;
    rankedProducts?: [];
}

export interface LotteryModel {
    lottery?: LotteryModelDetail;
    ranks?: Rank[];
}
export interface LotteryListModel {
    lotteries: LotteryModelDetail[];
    pagination?: PaginationParams;
}

export interface Rank{
    id?: number;
    title?: string;
    description?: string;
    rankTitle?: string;
    rank?: number;
    probability?: string;
    lotteryProducts?: []
}