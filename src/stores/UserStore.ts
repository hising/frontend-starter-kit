import Fingerprint2 from "fingerprintjs2";
import {observable} from "mobx";
import {BaseStore} from "./BaseStore";
import {RootStore} from "./RootStore";

const TOKEN_TTL = 15 * 60 * 1000;

export class UserStore extends BaseStore {
    public static isDirty(ttl: number, since: number) {
        const now = new Date().getTime();
        const life = now - since;
        return Boolean(life > ttl);
    }

    private static getCsrf() {
        return "";
    }

    @observable public token: string;
    @observable public csrf: string;
    @observable public uuid: string;
    private readonly created: number;

    constructor(rootStore: RootStore) {
        super(rootStore);
        this.uuid = "";
        this.token = this.getToken();
        this.csrf = UserStore.getCsrf();
        this.getUuid();
        this.created = new Date().getTime();
    }

    public getToken() {
        if (UserStore.isDirty(TOKEN_TTL, 0)) {
            return "NEW_TOKEN";
        }
        return this.token;
    }

    public getUuid() {
        setTimeout(() => {
            Fingerprint2.get((components) => {
                this.uuid = Fingerprint2.x64hash128(
                    components.map((component) => component.value).join(""),
                    31
                );
            });
        }, 500);
    }
}
