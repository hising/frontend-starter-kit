import * as React from "react";
import {observer} from "mobx-react";
import {Item, ItemStore} from "../stores/ItemStore";
import {List} from "antd";

interface IItemListInterface {
    store: ItemStore;
}

@observer
class ItemList extends React.Component<IItemListInterface, any> {
    render() {
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
                            <div>{item.clicked ? "Clicked" : ""}</div>
                        </List.Item>
                    )}
                />
            </div>
        );
    }

    private handleClick(item: Item, event: any) {
        event.preventDefault();
        this.props.store.clickItem(item);
        //this.props.store.clickItem()
    }
}

export {ItemList};
