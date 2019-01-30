import * as React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Home} from "./views";
import { hot } from 'react-hot-loader/root';
import "antd/dist/antd.css";
import {Layout} from 'antd';
const {
    Content, Footer, Sider
} = Layout;

interface IAppProps {}
interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <Content style={{ margin: '0 16px' }}>
                        <Route path="/" exact component={Home} />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Router>
        );
    }
}

export default hot(App);
