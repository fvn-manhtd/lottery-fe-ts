export interface NewsModel {
    id:number;
    title?:string;
    content?:string;
    date?:string;
}

export interface NewsListModel {
    news:NewsModel[];
}