// src/Features/Auth/Profile.jsx
import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, updateProfile } from '../../Features/Auth/AuthSlice'; // Ensure the path is correct

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        dispatch(fetchProfile());
    }, [dispatch]);

    const onFinish = (values) => {
        dispatch(updateProfile(values)); // Dispatch the updateProfile action
    };

    return (
        <Form name="profile" initialValues={user} onFinish={onFinish}>
            <Form.Item name="name">
                <Input placeholder="Name" />
            </Form.Item>
            <Form.Item name="email">
                <Input placeholder="Email" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Update</Button>
            </Form.Item>
        </Form>
    );
};

export default Profile;
