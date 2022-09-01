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
    date?: string,
    offer?: Offer,
    candidate?: Candidate
}

export type Candidate = {
    lastName?: string,
    firstName?: string,
    email?: string,
    address?: string
}

export type Domain = {
    id?: Number,
    name?: string,
    description?: string
}

export type History = {
    id?: number,
    type?: string,
    date?: string,
    offer?: Offer,
    candidate?: Candidate
}

export type Offer = {
    id?: number,
    ref?: string,
    description?: string,
    status?: string,
    option?: Option,
    place?: Place,
    profile?: Profile,
    domaine?: Domain
}

export type Place = {
    id?: number,
    name?: string
}

export type Option = {
    id?: number,
    name?: string
}

export type Profile = {
    id?: number,
    profile?: string
}