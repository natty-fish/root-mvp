import { useState } from 'react';
import { Input, Button, message } from 'antd';
import { LockOutlined } from '@ant-design/icons';

const ResetPasswordForm = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            message.error("Passwords don't match.");
            return;
        }
        // Here you would call an API to reset the password with the new one
        console.log(password);
        // Show a success message or redirect to the sign-in page
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto bg-white p-6 border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Create New Password</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input.Password
                        prefix={<LockOutlined />}
                        placeholder="New Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full"
                    />
                    <Input.Password
                        prefix={<LockOutlined />}
                        placeholder="Confirm New Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="w-full"
                    />
                    <Button type="primary" htmlType="submit" className="w-full text-gray-700">
                        Reset Password
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ResetPasswordForm;
