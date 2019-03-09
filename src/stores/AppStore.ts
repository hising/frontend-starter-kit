import {observable} from "mobx";
import {BaseStore} from "./BaseStore";
import {RootStore} from "./RootStore";

export class AppStore extends BaseStore {
    @observable public isHidden: boolean = false;
    constructor(root: RootStore) {
        super(root);
        this.isHidden = document.hidden;
        document.addEventListener("visibilitychange", () => {
            this.isHidden = document.hidden;
        });
    }
}
