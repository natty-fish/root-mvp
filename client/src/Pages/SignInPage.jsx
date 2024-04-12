import { useState } from 'react';
import { Input, Button } from 'antd';
import axios from 'axios';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slices/currentUserSlice';

const SignInPage = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        usernameOrEmail: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:9000/users/users/login", formData);

            toast.success(response.data.message || "Login successful");
            dispatch(addUser(response.data.data));
        }
        catch (err) {
            console.log("login error: ", err.response.data.error);
            toast.warn(err.response.data?.error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto bg-white p-6 border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        prefix={<UserOutlined />}
                        placeholder="Username or Email"
                        name="usernameOrEmail"
                        value={formData.usernameOrEmail}
                        onChange={handleChange}
                        required
                    />
                    <Input.Password
                        prefix={<LockOutlined />}
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <p><Link to="/forgot-password" className="mt-2 text-right block text-sm text-blue-500 hover:underline">Forgot Password?</Link></p>
                    <Button type="primary" htmlType="submit" className="w-full text-gray-600">Sign In</Button>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;
