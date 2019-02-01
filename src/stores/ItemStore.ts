import {action, computed, observable} from "mobx";
import {HttpClient} from "../http/client";

export interface Item {
    name: string;
    clicked: boolean;
    url: string;
}

export class ItemStore {
    @observable items: Item[] = [];
    private client: HttpClient;

    constructor() {
        this.client = new HttpClient();
        this.grabItems();
    }

    public grabItems() {
        this.client
            .get("https://api.github.com/users/hising/gists")
            .then((response: any) => {
                let {data} = response;
                this.items = data.map((gist: any) => {
                    return {
                        name: gist.id,
                        clicked: false,
                        url: gist.html_url
                    };
                });
            });
    }

    @computed
    get clickedItems(): number {
        return this.items.filter(item => item.clicked).length;
    }

    @action
    clickItem(clickedItem: Item) {
        const foundItem = this.items.find(item => {
            return item === clickedItem;
        });

        if (foundItem) {
            foundItem.clicked = true;
        }
    }
}

export const itemStore = new ItemStore();
