import { LotteryProductModel } from "models";
import { RankModel } from "./rank";

export interface LotteryModel {
    id: number
    title?: string
    status?: number
    description?: string
    image?: string
    thumbnailImage?: string
    lotteryEffectPackageId?: string
    lotteryRank?: string
    rankLabelDescription?: string
    rankProbability?: string
    productLotteryMethod?: string
    startedAt?: string
    endedAt?: string
    personLotteryLimit?: string
    shippingMethod?: string
    shippingFee?: string
    deliveryDetail?: string
    publishedAt?: string
    publicStatus?: string
}

export interface LotteryListModel {
    lotteries:LotteryModel[];
}

export interface LotteryDetailModel extends LotteryModel {
    rankedProducts: LotteryProductModel[];
    ranks: RankModel[];
}

