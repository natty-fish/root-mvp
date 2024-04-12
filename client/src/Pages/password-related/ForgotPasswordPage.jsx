import { useState } from 'react';
import { Input, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, implement the logic to handle password reset request (e.g., API call)
        console.log(email);
        // Show confirmation message or redirect as needed
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto bg-white p-6 border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
                <p className="text-sm text-gray-600 text-center mb-6">
                    Enter your email address and we'll send you a link to reset your password.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        prefix={<MailOutlined />}
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                        required
                        className="w-full"
                    />
                    <Button type="primary" htmlType="submit" className="w-full text-gray-700">Send Reset Link</Button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
