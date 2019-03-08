import {RootStore} from "./RootStore";

export class BaseStore {
    private root: RootStore;
    constructor(rootStore: RootStore) {
        this.root = rootStore;
    }
}
