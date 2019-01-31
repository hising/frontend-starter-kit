import * as React from 'react';
import {ItemList} from '../components/ItemList';
import {itemStore} from '../stores/ItemStore';

export class Home extends React.Component<any, any> {
    render() {
        return (<div>
            <ItemList store={itemStore}/>
        </div>);
    }
}
