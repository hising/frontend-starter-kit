import * as React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Home} from "./views";

interface IAppProps {}
interface IAppState {}

export class App extends React.Component<IAppProps, IAppState> {
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
