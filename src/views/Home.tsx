import {inject, observer} from "mobx-react";
import * as React from "react";
import {ItemList} from "../components/ItemList";

@inject("rootStore")
@observer
export class Home extends React.Component<any, any> {
    public render() {
        const {items} = this.props.rootStore;
        return (
            <div>
                <ItemList store={items} />
                <div>
                    {this.props.rootStore.app.isHidden ? "hidden" : "visible"}
                </div>
            </div>
        );
    }
}
