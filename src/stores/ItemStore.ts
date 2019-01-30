import {action, computed, observable} from 'mobx';

interface Item {
    name: string,
    clicked: boolean
}

class ItemStore {
    @observable items: Item[] = [];

    constructor() {

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
