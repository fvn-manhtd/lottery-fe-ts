import { axiosClient } from "api";
import { ApiRoute } from "utils";


export const favoriteApiNew = {
    list(page) {
        const url = `${ApiRoute.CURRENT_USER.FAVORITE}?page=${page}`;
        return axiosClient.get(url);
    },
    remove(credentials) {
        console.log(credentials);
        const url = ApiRoute.CURRENT_USER.FAVORITE;
        return axiosClient.delete(url, { data: credentials });
    },
        
        
    
    

}

