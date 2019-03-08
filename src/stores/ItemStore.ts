import {action, computed, observable} from "mobx";
import {HttpClient} from "../http/client";

export interface Item {
    name: string;
    clicked: boolean;
    url: string;
}

export class ItemStore {
    @observable public items: Item[] = [];
    private client: HttpClient;

    constructor() {
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

export const itemStore = new ItemStore();
