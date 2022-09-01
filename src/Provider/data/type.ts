export enum EOrder {
    ASC = "ASC", DESC = "DESC"
} 

export type TGetAll<T> = {
    currentPage: number;
    lastPage: number;
    data: T;
}

export type Apply = {
    id?: number,
    profile?: Profile,
    salary?: number,
    offer?: Offer,
    candidate?: Candidate
}

export type Candidate = {
    lastName?: number,
    firstName?: number,
    email?: number,
    address?: string
}

export type Domain = {
    id?: Number,
    name?: number,
    description?: string
}

export type History = {
    id?: number,
    type?: number,
    date?: number,
    offer?: Offer,
    candidate?: Candidate
}

export type Offer = {
    id?: number,
    name?:string,
    ref?: number,
    description?: number,
    status?: string,
    position?: Position,
    place?: Place,
    profile?: Profile,
    domain?: Domain
}

export type Place = {
    id?: number,
    name?: string
}

export type Position = {
    id?: number,
    name?: string
}

export type Profile = {
    id?: number,
    name?: string
}