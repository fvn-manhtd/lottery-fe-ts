import { PaginationParams } from "./common";

export interface NewsModel {
    id:number;
    title?:string;
    content?:string;
    date?:string;
}

export interface NewsListModel {
    pagination?: PaginationParams,
    news:NewsModel[];
}