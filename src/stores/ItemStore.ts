import {action, computed, observable} from 'mobx';
import {HttpClient} from '../http/client';

interface Item {
    name: string,
    clicked: boolean
}

class ItemStore {
    @observable items: Item[] = [];
    private client: HttpClient;

    constructor() {
        this.client = new HttpClient;
        this.getItems();
    }

    getItems() {
        const items = this.client.get('https://api.github.com/users/hising/gists');
    }

    @computed
    get clickedItems(): number {
        return this.items.filter((item) => item.clicked).length
    }

    @action
    clickItem(clickedItem: Item) {
        const foundItem = this.items.find((item) => {
            return item === clickedItem;
        });

        if (foundItem) {
            foundItem.clicked = true;
        }
    }
}

export const itemStore = new ItemStore();
