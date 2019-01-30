import * as React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Home} from "./views";
import { hot } from 'react-hot-loader/root';
import "antd/dist/antd.css";

interface IAppProps {}
interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={Home} />
                </div>
            </Router>
        );
    }
}

export default hot(App);
