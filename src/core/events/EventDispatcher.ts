import {EventListener} from "./EventListener";
export class EventDispatcher {
    private eventListeners: EventListener[];

    constructor() {
        this.eventListeners = [];
    }

    public dispatch(eventType: string) {}

    public addListener(eventType: string, eventListener: EventListener) {}

    public removeListener(eventType: string, eventListener: EventListener) {}

    public getListeners(eventType?: string): EventListener[] {
        return this.eventListeners;
    }

    public hasListeners(eventType?: string) {}
}
