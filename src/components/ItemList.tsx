import * as React from 'react';
import {observer} from 'mobx-react';
import {Item} from '../stores/ItemStore';

@observer
class ItemList extends React.Component<any, any> {
    render() {
        return (<div>
            {this.props.itemStore.todos.map((item: Item) => (
                <div>{item.name}</div>
            ))}
        </div>);
    }
}

export {ItemList};
