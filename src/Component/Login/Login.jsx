// src/Features/Auth/Login.jsx
import React from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Features/Auth/AuthSlice'; // Ensure the path is correct

const Login = () => {
    const dispatch = useDispatch();

    const onFinish = (values) => {
        dispatch(loginUser(values));
    };

    return (
        <Form name="login" onFinish={onFinish}>
            <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input placeholder="Email" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Log in
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Login;
