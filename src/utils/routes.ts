export enum Route {
    //General Pages
    HOME = '/',
    NEWS_LIST="/news-list",
    NEWS_DETAIL="/news/:id",
    CONTACT = "/contact",
    EXAMPLE = '/example',

    //Lottery
    LOTTERIES = '/lotteries',
    LOTTERY_DETAIL = '/lottery/:id',
    
    //User
    USER_LOGIN = '/user/login',
    USER_REGISTER = '/user/register',
    USER_PASSWORD_FORGOT = '/user/password-forgot',    
    USER_NEW_PASSWORD = '/user/new-password', 
    USER_PASSWORD_FORGOT_CONFIRM_MAIL  = 'password-forgot-confirm-mail',
    USER_MYAPGE = '/user/mypage',
    USER_FAVORITE = '/user/favorite',
    USER_PURCHASED_HISTORY = '/user/purchased-history',
    USER_PURCHASED_HISTORY_DETAIL = '/user/purchased-history/:id',    
    USER_SHIPPING_ADDRESS = '/user/shipping-address',
    USER_CARD = '/user/card',
    

    //Shop
    SHOP_LOGIN = '/shop/login',
    SHOP_REGISTER = '/shop/register',
    SHOP_PASSWORD_FORGET = '/shop/password-forgot', 
    SHOP_REGISTER_CREATE_ACCOUNT = "/shop/register/create-account",
    SHOP_REGISTER_OPERATION_SETTING = "/shop/register/operation-setting",
    SHOP_PASSWORD_FORGOT = "/shop/password-forgot",
    SHOP_NEW_PASSWORD = "/shop/new-password",
    SHOP_PASSWORD_FORGOT_CONFIRM_MAIL = "/shop/password-forgot-confirm-mail",

    //Cart
    SHOPPING_CART = '/cart/shopping-cart',
    PAYMENT_METHOD = '/cart/payment-method',
    ORDER_CONFIRMATION = '/cart/order-confirmation',
    ORDER_COMPLETE = '/cart/order-complete',
    EFFECT_START = '/cart/effect-start',
    EFFECT_FINISH = '/cart/effect-finish',

    //Static Pages
    
    STATIC_GUIDELINE = "/static-pages/guideline",
    STATIC_USAGE_POLICY = "/static-pages/usage-policy",
    STATIC_LEGAL = "/static-pages/legal-information",
    STATIC_POLICY = "/static-pages/privacy-policy",
    STATIC_COMPANY = "/static-pages/company",

};

export const ApiRoute = {
    'LOTTERY_INDEX' : '/lotteries',


    'AUTH': {
        'CHECK_AUTH': '/users/check-auth',
        'LOGIN': '/users/login',
        'REGISTER': '/users/register',
        'OAUTH_TWITTER': "/users/oauth/twitter",
        'OAUTH_FACEBOOK': "/users/oauth/facebook",
        'LOGOUT': '/users/logout',
    },
}