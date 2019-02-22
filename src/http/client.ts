import axios from "axios";

function serialize(params: any) {
    const str = [];
    for (const paramName in params) {
        if (params.hasOwnProperty(paramName)) {
            str.push(`${encodeURIComponent(paramName)}=${encodeURIComponent(params[paramName])}`);
        }
    }
    return str.join("&");
}

export class HttpClient {
    private transport: any;
    private readonly baseURL: string;

    constructor(baseURL: string = "", transport: any = axios) {
        this.transport = transport;
        this.baseURL = baseURL;
    }

    public get(path: string, params: any = null) {
        if (params) {
            path = `${path}?${serialize(params)}`;
        }
        return this.transport.get(this.getUrl(path));
    }

    public post(path: string, params: any = {}, headers: any = {}) {
        return this.transport.post(this.getUrl(path), params, {
            headers,
        });
    }

    private getUrl(path: string) {
        return this.baseURL + path;
    }
}
