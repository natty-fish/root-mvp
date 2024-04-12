import { useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import { Input, Button } from 'antd';
import { MailOutlined, LockOutlined, PhoneOutlined, UserOutlined, NumberOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        first_name: "",
        last_name: "",
        fayda_identification_number: "",
        email: "",
        phone_number: "",
        password_hash: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:9000/users", formData);
            if (response) {
                toast.success("Successful Sign up")
                navigate("/");
            }

        }
        catch (err) {
            toast.warn(err.response.data?.message);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto bg-white p-6 border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        prefix={<UserOutlined />}
                        placeholder="Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        prefix={<UserOutlined />}
                        placeholder="First Name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        prefix={<UserOutlined />}
                        placeholder="Last Name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        prefix={<NumberOutlined />}
                        placeholder="Fayda Identification Number"
                        name="fayda_identification_number"
                        value={formData.fayda_identification_number}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        prefix={<MailOutlined />}
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        prefix={<PhoneOutlined />}
                        placeholder="Phone Number"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        required
                    />
                    <Input.Password
                        prefix={<LockOutlined />}
                        placeholder="Password"
                        name="password_hash"
                        value={formData.password_hash}
                        onChange={handleChange}
                        required
                    />
                    <p className='text-sm'>
                        Already have an account? <Link className='text-blue-500 hover:underline' to="/signin">Sign In</Link>
                    </p>
                    <Button type="primary" htmlType="submit" className="w-full text-gray-500">Sign Up</Button>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
