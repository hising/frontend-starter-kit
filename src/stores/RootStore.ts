import {AppStore} from "./AppStore";
import {ItemStore} from "./ItemStore";

export class RootStore {
    public app: AppStore;
    public items: ItemStore;
    constructor() {
        this.app = new AppStore(this);
        this.items = new ItemStore(this);
    }
}
