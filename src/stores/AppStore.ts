import {observable} from "mobx";

export class AppStore {
    @observable public isHidden: boolean = false;
    constructor() {
        this.isHidden = document.hidden;
        document.addEventListener("visibilitychange", () => {
            this.isHidden = document.hidden;
        });
    }
}

export const appStore = new AppStore();
