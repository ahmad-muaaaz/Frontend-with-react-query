import React from 'react';
import { Form, Input, Button } from 'antd';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useCodeVerificationMutation } from '../../../core/api/authAPI';
import { setCredentials } from '../../../core/redux/features/authSlice';
import "../SignUp/SignUp.css"

const SignIn = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const verificationToken = searchParams.get('verification-token');
    console.log(verificationToken, "sss")
    const [codeVerification, { isLoading }] = useCodeVerificationMutation();

    const onFinish = async (values) => {
        try {
            const result = await codeVerification({ code: values.code, verificationToken }).unwrap();

            dispatch(setCredentials(result))
            form.resetFields();

            navigate('/tasks');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="signup-container">
            <div className="right_SignIn">
                <Form
                    form={form}
                    name="login"
                    onFinish={onFinish}
                    scrollToFirstError
                    className="signup-form"
                >
                    <Form.Item
                        name="code"
                        rules={[
                            {
                                // Fix: Better number validation
                                pattern: /^\d+$/,
                                message: 'Please input a valid number!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input placeholder="Code" />
                    </Form.Item>


                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={isLoading}
                            className="signup-form-button"
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default SignIn;
