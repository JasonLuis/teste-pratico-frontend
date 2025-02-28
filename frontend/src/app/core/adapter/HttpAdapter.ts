import axios from 'axios';

interface GetParams {
    url: string;
    queryString?: string;
    headers?: object;
    options?: object;
    path?: any;
}

export interface IHttpAdapter {
    get(p: GetParams): Promise<any>;
}

export class HttpAdapter implements IHttpAdapter {
    private baseUrl: string | undefined;
    private initialHeaders: object;

    constructor(baseUrl?: string, initialHeaders?: object) {
        this.baseUrl = baseUrl ?? undefined;
        this.initialHeaders = initialHeaders || {};
    }
    get(p: GetParams): Promise<any> {
        const qs = p.queryString ? `?${p.queryString}` : '';
        const urlCall = this.baseUrl
            ? `${this.baseUrl}${p.path}${qs}`
            : `${p.url}${qs}`;
        const headers = { ...this.initialHeaders, ...p.headers };
        return axios.get(urlCall, { headers, ...p.options });
    }
}
