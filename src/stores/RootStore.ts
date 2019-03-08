import {AppStore} from "./AppStore";
import {ItemStore} from "./ItemStore";

export class RootStore {
    public items: ItemStore;
    public app: AppStore;
    constructor() {
        this.items = new ItemStore(this);
        this.app = new AppStore(this);
    }
}
