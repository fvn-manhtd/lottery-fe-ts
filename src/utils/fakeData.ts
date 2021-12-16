import { LotteryListModel, NewsListModel, NewsModel, SiteDataListModel } from "models";

export const fakeLotteryList :LotteryListModel = {
  lotteries: [
      {
        id: 1,
        title:
          "スクラッチのタイトルが入ります。スクラッチのタイトルが入ります。",
        image: "https://www.bs11.jp/anime/img/selection_project_main.jpg",
        startedAt: "2021/00/00",
        status: 1,
      },
      {
        id: 2,
        title:
          "スクラッチのタイトルが入ります。スクラッチのタイトルが入ります。",
        image: "https://www.bs11.jp/anime/img/selection_project_main.jpg",
        startedAt: "2021/00/00",
        status: 2,
      },
      {
        id: 3,
        title:
          "スクラッチのタイトルが入ります。スクラッチのタイトルが入ります。",
        image: "https://www.bs11.jp/anime/img/selection_project_main.jpg",
        startedAt: "2021/00/00",
        status: 3,
      },
      {
        id: 4,
        title:
          "スクラッチのタイトルが入ります。スクラッチのタイトルが入ります。",
        image: "https://www.bs11.jp/anime/img/selection_project_main.jpg",
        startedAt: "2021/00/00",
        status: 4,
      },
      {
        id: 5,
        title:
          "スクラッチのタイトルが入ります。スクラッチのタイトルが入ります。",
        image: "https://www.bs11.jp/anime/img/selection_project_main.jpg",
        startedAt: "2021/00/00",
        status: 1,
      },
  ]
}

export const fakeNewsList: NewsListModel = {
  pagination: {
    _limit:10,
    _page:1,
    _total:10,
  },
  news: [
    {
      id:1,
      content:"お知らせ内容が入りますお知らせ内容が入りますお知らせ内容が入りますお知らせ内容が入ります。お知らせ内容が入りますお知らせ内容が入りますお知らせ内容が入りますお知らせ内容が入ります。",
      date:"2021年00月00日 (金)",
    },
    {
      id:2,
      content:"お知らせ内容が入りますお知らせ内容が入りますお知らせ内容が入りますお知らせ内容が入ります。",
      date:"2021年00月00日 (金)",
    },
    {
      id:3,
      content:"お知らせ内容が入りますお知らせ内容が入りますお知らせ内容が入りますお知らせ内容が入ります。",
      date:"2021年00月00日 (金)",
    },
    {
      id:4,
      content:"お知らせ内容が入りますお知らせ内容が入りますお知らせ内容が入りますお知らせ内容が入ります。",
      date:"2021年00月00日 (金)",
    },
  ]
}

export const fakeNewsDetail: NewsModel = {
  id:1,
  title:"サンプルタイトル",
  content:"お知らせ内容が入りますお知らせ内容が入りますお知らせ内容が入りますお知らせ内容が入ります。お知らせ内容が入りますお知らせ内容が入りますお知らせ内容が入りますお知らせ内容が入ります。",
  date: "2021年00月00日 (金)"
}

export const fakeStaticPageData: SiteDataListModel = {
  contents: [
    {
      title:"タイトル",
      text:"サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト"
    },
    {
      title:"タイトル",
      text:"サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト"
    },
    {
      title:"タイトル",
      text:"サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト"
    },
    {
      title:"タイトル",
      text:"サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト"
    },
    {
      title:"タイトル",
      text:"サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト"
    },
  ]
}

export const fakeLotteryPurchasedHistoryList = [
  {
      id: 1,
      title: "スクラッチのタイトルが入ります。スクラッチのタイトルが入ります。",
      image: "https://www.bs11.jp/anime/img/selection_project_main.jpg",
      date: "2021/00/00",
      total: 12000,
      paymethod: "VISA"              
  },      
];

export const fakeProductList = [
  {
      id: 1,
      title: "スクラッチのタイトルが入ります。スクラッチのタイトルが入ります。",
      image: "https://www.bs11.jp/anime/img/selection_project_main.jpg",    
      prize: "A",
      quanity: 1
  },  
  {
      id: 2,
      title: "スクラッチのタイトルが入ります。スクラッチのタイトルが入ります。",
      image: "https://www.bs11.jp/anime/img/selection_project_main.jpg",    
      prize: "A",
      quanity: 1
  },  
  {
      id: 3,
      title: "スクラッチのタイトルが入ります。スクラッチのタイトルが入ります。",
      image: "https://www.bs11.jp/anime/img/selection_project_main.jpg",    
      prize: "A",
      quanity: 1
  },  
  {
      id: 4,
      title: "スクラッチのタイトルが入ります。スクラッチのタイトルが入ります。",
      image: "https://www.bs11.jp/anime/img/selection_project_main.jpg",    
      prize: "A",
      quanity: 1
  }, 
];
