import {Modal} from "antd";
import Button from "antd/lib/button";
import Checkbox from "antd/lib/checkbox";
import Form from "antd/lib/form";
import Icon from "antd/lib/icon";
import Input from "antd/lib/input";
import * as React from "react";
import {Link} from "react-router-dom";

export class Signup extends React.Component<any, any> {
    private static handleSubmit(e: any) {
        e.preventDefault();
        alert("Signup");
    }

    public state = {
        confirmDirty: false,
        visible: false
    };

    public render() {
        return (
            <div>
                <Form onSubmit={Signup.handleSubmit} className="signup-form">
                    <Form.Item>
                        <Input
                            prefix={<Icon type="mail" />}
                            type="email"
                            placeholder="E-mail"
                            required={true}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="user" />}
                            placeholder="Username"
                            required={true}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" />}
                            type="password"
                            placeholder="Password"
                            onBlur={this.handleConfirmBlur}
                            required={true}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" />}
                            type="password"
                            placeholder="Repeat Password"
                            required={true}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Checkbox>
                            I have read the{" "}
                            <a
                                href=""
                                onClick={(event: any) => {
                                    event.preventDefault();
                                    this.setState({
                                        visible: true
                                    });
                                }}>
                                agreement
                            </a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <div style={{marginTop: "16px"}}>
                            <Button
                                htmlType="submit"
                                className="login-form-button"
                                style={{marginRight: "12px"}}>
                                Signup
                            </Button>
                            Or <Link to="/login">Login</Link>
                        </div>
                    </Form.Item>
                </Form>
                <Modal
                    title="Terms of Service"
                    visible={this.state.visible}
                    onCancel={() => {
                        this.setState({
                            visible: false
                        });
                    }}
                    onOk={() => {
                        this.setState({
                            visible: false
                        });
                    }}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }

    private handleConfirmBlur(e: any) {
        const value = e.target.value;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    }
}
