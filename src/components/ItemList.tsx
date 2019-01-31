import * as React from "react";
import {observer} from "mobx-react";
import {Item, ItemStore} from '../stores/ItemStore';
import {List} from "antd";

interface IItemListInterface {
    store: ItemStore
}

@observer
class ItemList extends React.Component<IItemListInterface, any> {
    render() {
        return (
            <List
                header={<h3>Gists</h3>}
                footer={<div>Footer</div>}
                bordered
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
