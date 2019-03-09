import {AppStore} from "../src/stores/AppStore";
import {ItemStore} from "../src/stores/ItemStore";
import {RootStore} from "../src/stores/RootStore";

test("root store can be instantiated", () => {
    const rootStore = new RootStore();
    expect(rootStore.app).toBeInstanceOf(AppStore);
    expect(rootStore.items).toBeInstanceOf(ItemStore);
});
