
import { PaginationParams } from "./common";
export interface NewsModel {
    id?:number;
    title?:string;
    content?: string;
    external?:string;
    date?:string;
}

export interface NewsListModel {
    news?: NewsModel[];
    pagination?: PaginationParams;
    
}

