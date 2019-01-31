import axios from "axios";

export class HttpClient {
    private transport: any;
    private readonly baseURL: string;

    // TODO: Create a HttpTransport Interface
    constructor(baseURL: string = "", transport: any = axios) {
        this.transport = transport;
        this.baseURL = baseURL;
    }

    private getUrl(path: string) {
        return this.baseURL + path;
    }

    public async get(path: string, params: any = {}) {
        return await this.transport.get(this.getUrl(path));
    }

    public async post(path: string, params: any = {}, headers: any = {}) {
        return await this.transport.post(this.getUrl(path), params);
    }
}
