import {action, computed, observable} from "mobx";
import {HttpClient} from "../http/client";
import {BaseStore} from "./BaseStore";
import {RootStore} from "./RootStore";

export interface Item {
    name: string;
    clicked: boolean;
    url: string;
}

export class ItemStore extends BaseStore {
    @observable public items: Item[] = [];
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

        this.items = gists.map((gist: any) => {
            return {
                clicked: false,
                name: gist.id,
                url: gist.html_url
            };
        });
    }

    @computed
    get clickedItems(): number {
        return this.items.filter((item: any) => item.clicked).length;
    }

    @action
    public clickItem(clickedItem: Item) {
        const foundItem = this.items.find((item: any) => {
            return item === clickedItem;
        });

        if (foundItem) {
            foundItem.clicked = true;
        }
    }
}
