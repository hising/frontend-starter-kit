import List from "antd/lib/list";
import {observer} from "mobx-react";
import * as React from "react";
import {Item, ItemStore} from "../stores/ItemStore";

interface IItemListInterface {
    store: ItemStore;
}

@observer
class ItemList extends React.Component<IItemListInterface, any> {
    public render() {
        return (
            <div>
                <h4>Clicked Items: {this.props.store.clickedItems}</h4>
                <List
                    header={<h3>Gists</h3>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.props.store.items}
                    renderItem={(item: Item) => (
                        <List.Item>
                            <List.Item.Meta
                                title={
                                    <a
                                        onClick={(event: any) => {
                                            this.handleClick(item, event);
                                        }}
                                        href={item.url}>
                                        {item.name}
                                    </a>
                                }
                            />
                            <div>{item.clicked ? "Visited" : ""}</div>
                        </List.Item>
                    )}
                />
            </div>
        );
    }

    private handleClick(item: Item, event: any) {
        event.preventDefault();
        this.props.store.clickItem(item);
    }
}

export {ItemList};
