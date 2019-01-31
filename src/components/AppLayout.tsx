import {Link} from "react-router-dom";
import {Menu, Icon, Layout} from "antd";
import * as React from "react";
import {MenuItem} from "../ui/MenuItem";
const {Content, Footer, Sider} = Layout;

interface IAppLayoutProps {
    children: any;
    menuItems: MenuItem[];
}

export class AppLayout extends React.Component<IAppLayoutProps, any> {
    render() {
        let menuIndex = 0;
        return (
            <Layout style={{minHeight: "100vh"}}>
                <Sider collapsible>
                    <Menu theme="dark">
                        {this.props.menuItems.map((menuItem: MenuItem) => {
                            return (
                                <Menu.Item key={menuIndex++}>
                                    <Link to={menuItem.path}>
                                        <Icon type={menuItem.icon} />
                                        <span>{menuItem.label}</span>
                                    </Link>
                                </Menu.Item>
                            );
                        })}
                    </Menu>
                </Sider>
                <Layout>
                    <Content
                        style={{
                            margin: "0",
                            padding: "16px",
                            backgroundColor: "#fff"
                        }}>
                        {this.props.children}
                    </Content>
                    <Footer style={{textAlign: "center"}}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
