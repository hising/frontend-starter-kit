import {CustomStorage, LocalStorage, RemoteStorage, SessionStorage} from './Storage';

export class EventDispatcher {
    private client: CustomStorage;
    private session: CustomStorage;
    private db: CustomStorage;
    constructor() {
        this.client = LocalStorage;
        this.session = SessionStorage;
        this.db = RemoteStorage;
    }

    private onPageView() {

    }

    private onNewUser() {

    }

    private onLogin() {

    }

    private onSignup() {

    }

    private onNewSession() {

    }

    private onNthVisit(nth: number) {

    }

    private onDeepVisit() {

    }

    private onPageEnd() {

    }

    private onCounterEnd(time: number) {

    }

    private onBounce() {

    }
}

