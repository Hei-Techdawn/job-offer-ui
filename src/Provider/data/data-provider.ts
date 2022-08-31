import httpClient from "../utils/http-client";
import { EOrder, TGetAll } from "./type";

class Dataprovider<T> {
    private endpoint: string;
    private config = {
        auth: {
            username: localStorage.getItem("username") || '',
            password: localStorage.getItem("password") || ''
        }
    };

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = async (page: number, size: number, order: EOrder): Promise<TGetAll<T[]>> => {
        const params = {
            page, size, order,
        };
        return await httpClient.get(this.endpoint, { params, ...this.config });
    };

    getOne = async (id: number): Promise<T> => {
        return await httpClient.get(`${this.endpoint}/${id}`, this.config);
    };

    addOne = async (data: T): Promise<T> => {
        return await httpClient.post(this.endpoint, data, this.config);
    }

    modifyOne = async (id: number, data: T) => {
        return await httpClient.put(`${this.endpoint}/${id}`, data, this.config);
    }
}

export default Dataprovider;