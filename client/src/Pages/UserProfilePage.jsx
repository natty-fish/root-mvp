import { useState } from 'react';
import { Input, Button, Form, message } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const UserProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        username: 'johndoe',
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        phone_number: '123-456-7890'
    });

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleFormSubmit = (values) => {
        // Here, you would handle updating the user profile
        console.log(values);
        message.success('Profile updated successfully!');
        setIsEditing(false);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-lg mx-auto bg-white p-6 border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Your Profile</h2>
                <div className="mb-4 text-center">
                    <Button onClick={handleEditToggle} type="default">
                        {isEditing ? 'Cancel' : 'Edit Profile'}
                    </Button>
                </div>

                {isEditing ? (
                    <Form
                        layout="vertical"
                        initialValues={profile}
                        onFinish={handleFormSubmit}
                    >
                        <Form.Item
                            name="first_name"
                            rules={[{ required: true, message: 'Please input your first name!' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="First Name" />
                        </Form.Item>
                        <Form.Item
                            name="last_name"
                            rules={[{ required: true, message: 'Please input your last name!' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Last Name" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[{ type: 'email', message: 'Please input a valid email!' }]}
                        >
                            <Input prefix={<MailOutlined />} placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="phone_number"
                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                        >
                            <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" className='text-gray-700'>
                            Update Profile
                        </Button>
                    </Form>
                ) : (
                    <div>
                        <p><strong>First Name:</strong> {profile.first_name}</p>
                        <p><strong>Last Name:</strong> {profile.last_name}</p>
                        <p><strong>Email:</strong> {profile.email}</p>
                        <p><strong>Phone Number:</strong> {profile.phone_number}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserProfilePage;
