import {AppStore} from "./AppStore";
import {ItemStore} from "./ItemStore";
import {UserStore} from "./UserStore";

export class RootStore {
    public items: ItemStore;
    public app: AppStore;
    private user: UserStore;
    constructor() {
        this.items = new ItemStore(this);
        this.app = new AppStore(this);
        this.user = new UserStore(this);
    }
}
