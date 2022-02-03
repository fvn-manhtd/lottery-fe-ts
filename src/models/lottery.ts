import { PaginationParams } from "./common";

export interface LotteryModelDetail {
    id?: number;
    title?: string;
    image?: string;
    thumbnailImage?: string;
    startedAt?: string;
    endedAt?: string;
    status?: number;
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