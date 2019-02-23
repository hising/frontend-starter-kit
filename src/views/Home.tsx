import {inject, observer} from "mobx-react";
import * as React from "react";
import {ItemList} from "../components/ItemList";
import {itemStore} from "../stores/ItemStore";

@inject("appStore")
@observer
export class Home extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <ItemList store={itemStore} />
                <div>{this.props.appStore.isHidden ? "hidden" : "visible"}</div>
            </div>
        );
    }
}
