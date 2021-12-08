import { LotteryProductModel } from "models";

export interface RankModel {
    id:number;
    title?:string;
    description?:string;
    rankTitle?:string;
    rank?:number;
    probability?:number;
    lotteryProducts:LotteryProductModel[]
}

export interface RankListModel {
    ranks:RankModel[];
}