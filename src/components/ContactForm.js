import React from 'react';
import { Layout, Form, Input, Checkbox, Switch, Button } from 'element-react';
import '../styles/ContactForm.css';

function ContactForm() {
    return (
        <Layout.Col span="14" offset="5">
            <Form labelPosition="left" labelWidth="250">
                <Form.Item label="Your name">
                    <Input placeholder="Elon Musk"/>
                </Form.Item>

                <Form.Item label="Your email address">
                    <Input placeholder="elon@spacex.com"/>
                </Form.Item>

                <Form.Item label="Where did you hear about us?">
                    <Checkbox.Group>
                        <Checkbox label="Social Networks"/>
                        <Checkbox label="Search Engine"/>
                        <Checkbox label="Friend"/>
                        <Checkbox label="Other"/>
                    </Checkbox.Group>
                </Form.Item>

                <Form.Item label="Message">
                    <Input type="textarea" placeholder="Hello world!"/>
                </Form.Item>

                <Form.Item label="Do you want to receive our newsletter?">
                    <Switch value={false} onText="" offText=""/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary">Send</Button>
                </Form.Item>
            </Form>
        </Layout.Col>
    )
}

export default ContactForm;