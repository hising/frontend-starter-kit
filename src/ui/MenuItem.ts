export class MenuItem {
    private _path: string;
    private _label: string;
    private _icon: string;

    constructor(path: string, label: string, icon: string) {
        this._path = path;
        this._label = label;
        this._icon = icon;
    }

    get icon(): string {
        return this._icon;
    }

    set icon(value: string) {
        this._icon = value;
    }
    get label(): string {
        return this._label;
    }

    set label(value: string) {
        this._label = value;
    }
    get path(): string {
        return this._path;
    }

    set path(value: string) {
        this._path = value;
    }
}
