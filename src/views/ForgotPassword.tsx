import {Button, Form, Icon, Input} from "antd";
import * as React from "react";

export class ForgotPassword extends React.Component<any, any> {
    private static handleSubmit(e: any) {
        e.preventDefault();
        alert("Remind me");
    }

    public render() {
        return (
            <div>
                <Form
                    onSubmit={ForgotPassword.handleSubmit}
                    className="signup-form">
                    <Form.Item>
                        <Input
                            prefix={<Icon type="mail" />}
                            type="email"
                            placeholder="E-mail"
                            required={true}
                        />
                    </Form.Item>
                    <Form.Item>
                        <div style={{marginTop: "16px"}}>
                            <Button
                                htmlType="submit"
                                className="login-form-button"
                                style={{marginRight: "12px"}}>
                                Remind me
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
