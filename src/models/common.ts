export interface PaginationParams {
    _limit: number
    _page: number
    _total: number
    last_page: number
}

export interface ListResponse<T> {
    data: T[],
    pagination: PaginationParams
}

export interface RequestListResponse<T> {
    data: ListResponse<T>,
    loading: boolean
}

export interface ListParams {
    _page: number
    _limit: number
    _sort: string
    _order: 'asc' | 'desc'

    [key: string]: any;
}