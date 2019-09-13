import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Icon from "antd/lib/icon";
import Input from "antd/lib/input";
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
