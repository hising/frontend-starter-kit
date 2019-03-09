import {RootStore} from "./RootStore";

export class BaseStore {
    private root: RootStore;
    constructor(root: RootStore) {
        this.root = root;
    }
}
