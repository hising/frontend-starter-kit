import * as React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Account, ForgotPassword, Home, Login, Settings, Signup} from "./views";
import {hot} from "react-hot-loader/root";
import "antd/dist/antd.css";
import {Icon, Layout, Menu} from "antd";
const {Content, Footer, Sider} = Layout;

interface IAppProps {}
interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Layout style={{minHeight: "100vh"}}>
                    <Sider collapsible>
                        <Menu theme="dark">
                            <Menu.Item key="1">
                                <Link to="/">
                                    <Icon type="home" />
                                    <span>Home</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/account">
                                    <Icon type="user" />
                                    <span>Account</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/signup">
                                    <Icon type="user-add" />
                                    <span>Signup</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="/login">
                                    <Icon type="lock" />
                                    <span>Login</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Link to="/forgot-pwd">
                                    {" "}
                                    <Icon type="exclamation-circle" />
                                    <span>Forgot Password</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Link to="/settings">
                                    <Icon type="setting" />
                                    <span>Settings</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content
                            style={{
                                margin: "0",
                                padding: "16px",
                                backgroundColor: "#fff"
                            }}>
                            <Route path="/" exact component={Home} />
                            <Route path="/account" exact component={Account} />
                            <Route path="/signup" exact component={Signup} />
                            <Route path="/login" exact component={Login} />
                            <Route
                                path="/forgot-pwd"
                                exact
                                component={ForgotPassword}
                            />
                            <Route
                                path="/settings"
                                exact
                                component={Settings}
                            />
                        </Content>
                        <Footer style={{textAlign: "center"}}>
                            Ant Design ©2018 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default hot(App);
