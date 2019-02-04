const LOCAL_STORAGE = 'localStorage';
const SESSION_STORAGE = 'sessionStorage';
const REMOTE_STORAGE = 'remoteStorage';

export class CustomStorage {
    private _scope: string;
    constructor(scope: string) {
        this._scope = scope;
    }

    public set (key: string, value: any): boolean {
        return true;
    }
    public get (key: string): any {
        return {};
    }
    public delete(key: string): boolean {
        return true;
    }
    public update(key: string, value: any): boolean {
        return true;
    }

    get scope(): string {
        return this._scope;
    }

    set scope(value: string) {
        this._scope = value;
    }
}

export const SessionStorage = new CustomStorage(SESSION_STORAGE);
export const LocalStorage = new CustomStorage(LOCAL_STORAGE);
export const RemoteStorage = new CustomStorage(REMOTE_STORAGE);
