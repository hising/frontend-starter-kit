import * as React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Account, ForgotPassword, Home, Login, Settings, Signup} from "./views";
import {hot} from "react-hot-loader/root";
import "antd/dist/antd.css";
import {AppLayout} from "./components/AppLayout";
import * as menuConfig from "./config/menu.json";
import {MenuItem} from "./ui/MenuItem";
const menuItems = menuConfig.items.map((item: any) => {
    return new MenuItem(item.path, item.label, item.icon);
});

import {EventDispatcher} from './core/EventDispatcher';
const eventDispathcer = new EventDispatcher();

interface IAppProps {}
interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
    }

    render() {
        return (
            <Router>
                <AppLayout menuItems={menuItems}>
                    <Route path="/" exact component={Home} />
                    <Route path="/account" exact component={Account} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/login" exact component={Login} />
                    <Route
                        path="/forgot-pwd"
                        exact
                        component={ForgotPassword}
                    />
                    <Route path="/settings" exact component={Settings} />
                </AppLayout>
            </Router>
        );
    }
}

export default hot(App);
