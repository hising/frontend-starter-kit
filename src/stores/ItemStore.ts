import {action, computed, observable} from "mobx";
import {HttpClient} from "../http/client";
import {GistItem, GistJsonResponse} from "../models/Gist";
import {BaseStore} from "./BaseStore";
import {RootStore} from "./RootStore";
export class ItemStore extends BaseStore {
    @observable public items: GistItem[] = [];
    private client: HttpClient;

    constructor(rootStore: RootStore) {
        super(rootStore);
        this.client = new HttpClient();
        this.grabItems();
    }

    public async grabItems() {
        const gists = await this.client.get(
            "https://api.github.com/users/hising/gists"
        );

        this.items = gists.map((gist: GistJsonResponse) => {
            return {
                clicked: false,
                id: gist.id,
                name: gist.description,
                url: gist.html_url
            };
        });
    }

    @computed
    get clickedItems(): number {
        return this.items.filter((item: GistItem) => item.clicked).length;
    }

    @action
    public clickItem(clickedItem: GistItem) {
        const foundItem = this.items.find((item: GistItem) => {
            return item === clickedItem;
        });

        if (foundItem) {
            foundItem.clicked = true;
        }
    }
}
