import * as React from "react";
import {observer} from "mobx-react";
import {Item} from "../stores/ItemStore";
import {List} from "antd";

@observer
class ItemList extends React.Component<any, any> {
    render() {
        return (
            <List
                header={<h3>Gists</h3>}
                dataSource={this.props.store.items}
                renderItem={(item: Item) => (
                    <List.Item>
                        <a href={item.url}>{item.name}</a>
                    </List.Item>
                )}
            />
        );
    }
}

export {ItemList};
