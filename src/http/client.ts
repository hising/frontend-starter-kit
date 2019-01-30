import axios from 'axios';

class HttpClient {
    private transport: any;
    constructor() {
        this.transport = axios;
    }
}
