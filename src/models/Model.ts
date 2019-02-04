interface ModelProperty {
    name: string,
    value: string,
    oldValue?: string,
    isDirty?: boolean
}

export class Model {
    private _properties: ModelProperty[] = [];

    constructor(properties?: ModelProperty[]) {
        this._properties = properties || [];
    }

    public static create() {}

    public static find() {}

    public update() {}
    public delete() {}
    public save() {}

    public getProperty(name: string): ModelProperty {
        return {
            name: "",
            value: "",
            oldValue: "",
            isDirty: false
        }
    }

    get properties(): ModelProperty[] {
        return this._properties;
    }

    set properties(value: ModelProperty[]) {
        this._properties = value;
    }

    public setProperty(name: string, value: string): ModelProperty {
        return {
            name,
            value,
            oldValue: "",
            isDirty: false
        }
    }
}
