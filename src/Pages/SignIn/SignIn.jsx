import React from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../../core/api/authAPI';
import { setCredentials } from '../../../core/redux/features/authSlice';
import "../SignUp/SignUp.css"

const SignIn = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation();

    const onFinish = async (values) => {
        try {
            const result = await login(values).unwrap();
            console.log(result, "result")
            if (result.data.authToken) {
                dispatch(setCredentials(result))
                navigate('/');
                return
            }
            form.resetFields();
            navigate('/code-verification?verification-token=' + result.data.verificationToken);
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
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Password" />
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
