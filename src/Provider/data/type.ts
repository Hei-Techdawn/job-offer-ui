export enum EOrder {
    ASC = "ASC", DESC = "DESC"
} 

export type TGetAll<T> = {
    currentPage: number;
    lastPage: number;
    data: T;
}
