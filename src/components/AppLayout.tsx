import Icon from "antd/lib/icon";
import Layout from "antd/lib/layout";
import Menu from "antd/lib/menu";
import * as React from "react";
import {Link} from "react-router-dom";
import {MenuItem} from "../ui/MenuItem";
const {Content, Footer, Sider} = Layout;

interface AppLayoutProps {
    children: any;
    menuItems: MenuItem[];
}

export class AppLayout extends React.Component<AppLayoutProps, any> {
    public render() {
        return (
            <Layout style={{minHeight: "100vh"}}>
                <Sider collapsible>
                    <Menu theme="dark">{this.renderMenuItems()}</Menu>
                </Sider>
                <Layout>
                    <Content
                        style={{
                            backgroundColor: "#fff",
                            margin: "0",
                            padding: "16px"
                        }}>
                        {this.props.children}
                    </Content>
                    <Footer style={{textAlign: "center"}}>
                        <a
                            href="https://github.com/hising/frontend-starter-kit"
                            target="_blank">
                            <Icon type="github" /> Frontend Starter Kit
                        </a>{" "}
                        ©2019 - Created by{" "}
                        <a href="https://yetric.com" target="_blank">
                            Yetric AB
                        </a>
                    </Footer>
                </Layout>
            </Layout>
        );
    }

    private renderMenuItems() {
        let menuIndex = 0;
        return this.props.menuItems.map((item: MenuItem) => {
            return (
                <Menu.Item key={menuIndex++}>
                    <Link to={item.path}>
                        <Icon type={item.icon} />
                        <span>{item.label}</span>
                    </Link>
                </Menu.Item>
            );
        });
    }
}
