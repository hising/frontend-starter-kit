import * as React from "react";
import {Form, Icon, Input, Button, Checkbox} from "antd";
import {Link} from "react-router-dom";

export class Signup extends React.Component<any, any> {
    state = {
        confirmDirty: false
    };
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="signup-form">
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
                            I have read the <a href="">agreement</a>
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
            </div>
        );
    }

    private handleSubmit(e: any) {
        e.preventDefault();
        alert("Signup");
    }

    private handleConfirmBlur(e: any) {
        const value = e.target.value;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    }

    private compareToFirstPassword(rule: any, value: any, callback: any) {
        const form = this.props.form;
        if (value && value !== form.getFieldValue("password")) {
            callback("Two passwords that you enter is inconsistent!");
        } else {
            callback();
        }
    }
}
