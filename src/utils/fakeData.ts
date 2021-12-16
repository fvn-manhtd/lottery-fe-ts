import { LotteryDetailModel, LotteryListModel, NewsListModel, NewsModel, SiteDataListModel } from "models";

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

export const fakeLotteryDetail: LotteryDetailModel = {
  id:1,
  image:"https://files.bts-official.jp/files/img/profile2106/BTS_all.jpg",
  startedAt:"2021年00月00日(金) 15:00",
  endedAt:"2021年00月00日(木) 23:59",
  title:"スクラッチのタイトルが入ります。スクラッチのタイトルが入ります。スクラッチのタイト",
  description: "スクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入ります。スクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入りますスクラッチの説明文が入ります。",
  rankedProducts: [
    {
      src: "https://cdn.shopify.com/s/files/1/0021/2061/3923/products/img-0_2b844b41-85cb-433d-86fe-ad9955765c1e_600x.jpg?v=1638146856", 
      rankTitle: "A賞",
      rank:1,
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0021/2061/3923/products/TinyTANDMTCUSHIONBLANKET_0__thumb_5f0483f7-ae93-4cce-9b15-cbd4b4e9ae75_600x.jpg?v=1636506873", 
      rankTitle: "B賞",
      rank:2,
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0021/2061/3923/products/img-1_thumb_a79e255d-d0b2-40b3-ad66-3b638d0cee38_600x.jpg?v=1637048971", 
      rankTitle: "C賞",
      rank:3
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0021/2061/3923/products/img-1_thumb_cd299ba9-c262-4472-b7da-d8677e43d3b5_600x.jpg?v=1637131647", 
      rankTitle: "D賞",
      rank:4,
    }
  ],
  ranks: [
    {
      id:1,
      title:"商品タイトル",
      description:"説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります。",
      rankTitle:"A賞",
      rank:1,
      probability:2,
      lotteryProducts: [
        {
            src: "https://files.bts-official.jp/files/img/profile2106/BTS_all.jpg",
            title: "商品タイトル商品タイトル",
        },
        {
            src: "https://files.bts-official.jp/files/img/profile2106/BTS_all.jpg",
            title: "商品タイトル商品タイトル",
        },
        {
            src: "https://files.bts-official.jp/files/img/profile2106/BTS_all.jpg",
            title: "商品タイトル商品タイトル",
        },
        {
            src: "https://files.bts-official.jp/files/img/profile2106/BTS_all.jpg",
            title: "商品タイトル商品タイトル",
        },
      ]
    },
    {
      id:2,
      title:"商品タイトル",
      description:"説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります。",
      rankTitle:"C賞",
      rank:3,
      probability:2,
      lotteryProducts: [
        {
            src: "https://files.bts-official.jp/files/img/profile2106/BTS_all.jpg",
            title: "商品タイトル商品タイトル",
        },
        {
            src: "https://files.bts-official.jp/files/img/profile2106/BTS_all.jpg",
            title: "商品タイトル商品タイトル",
        },
        {
            src: "https://files.bts-official.jp/files/img/profile2106/BTS_all.jpg",
            title: "商品タイトル商品タイトル",
        },
        {
            src: "https://files.bts-official.jp/files/img/profile2106/BTS_all.jpg",
            title: "商品タイトル商品タイトル",
        },
      ]
    },
    {
      id:3,
      title:"商品タイトル",
      description:"説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります。",
      rankTitle:"B賞",
      rank:2,
      probability:2,
      lotteryProducts: [
        {
            src: "https://files.bts-official.jp/files/img/profile2106/BTS_all.jpg",
            title: "商品タイトル商品タイトル",
        },
        {
            src: "https://files.bts-official.jp/files/img/profile2106/BTS_all.jpg",
            title: "商品タイトル商品タイトル",
        },
        {
            src: "https://files.bts-official.jp/files/img/profile2106/BTS_all.jpg",
            title: "商品タイトル商品タイトル",
        },
        {
            src: "https://files.bts-official.jp/files/img/profile2106/BTS_all.jpg",
            title: "商品タイトル商品タイトル",
        },
      ]
    }
  ]
};

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
      id:1,
      content:"お知らせ内容が入りますお知らせ内容が入りますお知らせ内容が入りますお知らせ内容が入ります。",
      date:"2021年00月00日 (金)",
    },
    {
      id:1,
      content:"お知らせ内容が入りますお知らせ内容が入りますお知らせ内容が入りますお知らせ内容が入ります。",
      date:"2021年00月00日 (金)",
    },
    {
      id:1,
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
  {
      id: 5,
      title: "スクラッチのタイトルが入ります。スクラッチのタイトルが入ります。",
      image: "https://www.bs11.jp/anime/img/selection_project_main.jpg",    
      prize: "A",
      quanity: 1
  },  
  {
      id: 6,
      title: "スクラッチのタイトルが入ります。スクラッチのタイトルが入ります。",
      image: "https://www.bs11.jp/anime/img/selection_project_main.jpg",    
      prize: "A",
      quanity: 1
  },  
  {
      id: 7,
      title: "スクラッチのタイトルが入ります。スクラッチのタイトルが入ります。",
      image: "https://www.bs11.jp/anime/img/selection_project_main.jpg",    
      prize: "A",
      quanity: 1
  },  
  {
      id: 8,
      title: "スクラッチのタイトルが入ります。スクラッチのタイトルが入ります。",
      image: "https://www.bs11.jp/anime/img/selection_project_main.jpg",    
      prize: "A",
      quanity: 1
  },  
];


