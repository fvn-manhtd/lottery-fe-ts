export enum Route {
    //General Pages
    HOME = '/',
    NEWS_LIST="/news-list",
    NEWS_DETAIL="/news/:id",
    CONTACT = "/contact",
    CONTACT_CONFIRM = "/contact/confirm",
    CONTACT_COMPLETE = "/contact/complete",
    EXAMPLE = '/example',

    //Lottery
    LOTTERIES = '/lotteries',
    LOTTERY_DETAIL = '/lottery/:id',
    
    //User
    USER_LOGIN = '/user/login',
    USER_REGISTER = '/user/register',
    USER_REGISTER_CONFIRM_MAIL = '/user/register-confirm-email',
    USER_REGISTER_COMPLETE = '/user/register-complete',
    USER_PASSWORD_FORGOT = '/user/password-forgot',    
    USER_PASSWORD_RESET = '/user/password/reset/:resetToken/:resetEmail', 
    USER_PASSWORD_FORGOT_CONFIRM_MAIL  = '/user/password-forgot-confirm-mail',
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

    STATIC_PAGE = "/static-pages/:name",
    
    STATIC_GUIDELINE = "/static-pages/guideline",
    STATIC_USAGE_POLICY = "/static-pages/usage-policy",
    STATIC_LEGAL = "/static-pages/legal-information",
    STATIC_POLICY = "/static-pages/privacy-policy",
    STATIC_COMPANY = "/static-pages/company",

    ERROR = "/not-found",

};

export const ApiRoute = {    
        
    
    'LOTTERY_INDEX': '/lotteries',

    'LOTTERY_DETAIL': '/lottery',

    'CONTACT': '/shop/contact',
    
    'NEWS_LIST': '/mall/news',
    'NEWS_DETAIL' : '/mall/news',


    'AUTH': {
        'CHECK_AUTH': '/users/check-auth',
        'LOGIN': '/users/login',
        'REGISTER': '/users/register',
        'OAUTH_TWITTER': "/users/oauth/twitter",
        'OAUTH_FACEBOOK': "/users/oauth/facebook",
        'LOGOUT': '/users/logout',

        'SEND_RESET_PASSWORD_EMAIL': '/users/password/email',
        'RESET_PASSWORD': '/users/password/reset',
    },

    'CURRENT_USER': {
        'SELF': '/users/self',
        'ACCOUNT': '/users/self/account',
        'ADDRESS': '/users/self/address',
        'CARD': '/users/self/card',
        'DEFAULT_CARD': '/users/self/default-card',
        'LEAVE': '/users/self/leave',
        'REGISTER_PAY_CUSTOMER_ID': '/users/self/regiser-pay-customer-id'
    },


    'STATIC_API' : '/pages'    


}