export interface PaginationParams {
    current_page?: number;
    from?: number;
    last_page?: number;
    last_page_url?: string;
    next_page_url?: string;
    prev_page_url?: string;
    per_page?: number;
    to?: number;
    total?: number;
    limit?: number;
    page?: number;
}

export interface ListResponse<T> {  
    data: T[],
    pagination?: PaginationParams
    
}
