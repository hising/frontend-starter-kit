interface ICrud {
    get(): any;
    put(): any;
    post(): number;
    delete(): boolean;
}

class Base implements ICrud {
    public delete(): boolean {
        return false;
    }

    public get(): any {
        return {};
    }

    public post(): number {
        return 0;
    }

    public put(): any {
        return {};
    }

}
