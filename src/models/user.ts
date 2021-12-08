import { LotteryModel } from "./lottery";

export interface User {
    id: number
    email: string
    lastName?: string
    firstName?: string
    lastNameKana?: string
    firstNameKana?: string
    postCode?: string
    prefecture?: string
    address?: string
    phoneNumber?: string
    note?: string
}

export interface UserCart extends User {
    lotteryInCart: number
    lotteries: LotteryModel[]
}