function serialize(params: any) {
    const str = [];
    for (const paramName in params) {
        if (params.hasOwnProperty(paramName)) {
            str.push(
                `${encodeURIComponent(paramName)}=${encodeURIComponent(
                    params[paramName]
                )}`
            );
        }
    }
    return str.join("&");
}

export class HttpClient {
    private readonly baseURL: string;

    constructor(baseURL: string = "") {
        this.baseURL = baseURL;
    }

    public async get(path: string, params: any = null) {
        if (params) {
            path = `${path}?${serialize(params)}`;
        }
        const response = await fetch(this.getUrl(path));
        return await response.json();
    }

    public async post(path: string, params: any = {}, headers: any = {}) {
        const fetchSettings = {
            body: JSON.stringify(params),
            headers,
            method: "POST"
        };
        const response = await fetch(this.getUrl(path), fetchSettings);
        return await response.json();
    }

    private getUrl(path: string) {
        return this.baseURL + path;
    }
}
