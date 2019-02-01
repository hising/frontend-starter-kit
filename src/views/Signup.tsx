import * as React from "react";
import {
    Form, Icon, Input, Button,
} from 'antd';

export class Signup extends React.Component<any, any> {
    render() {
        return <div>
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item>
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                </Form.Item>
            </Form>
        </div>;
    }

    private handleSubmit() {

    }
}
