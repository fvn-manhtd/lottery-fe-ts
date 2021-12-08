export interface LotteryProductModel {
    src?: string;
    rankTitle?: string;
    rank?:number;
    title?:string;
}

export interface LotteryProductList {
    lotteryProducts:LotteryProductModel[]
}