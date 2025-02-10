import React from 'react';
import { Form, Input, Button, Upload, message, Select } from 'antd';
import { useCreateBlogMutation } from '../../../core/api/blogAPI';
import { UploadOutlined } from '@ant-design/icons';
const { TextArea } = Input;

const BlogForm = ({ onSubmit, loading }) => {
    const [form] = Form.useForm();
    const [createBlog, { isLoading }] = useCreateBlogMutation();

    const handleSubmit = async (values) => {
        try {
            const { image, title, content, status } = values;
            const formData = new FormData();

            // Append the title, content, and image file to the form data
            formData.append('title', title);
            formData.append('content', content);
            formData.append('status', status);
            if (image && image[0]) {
                formData.append('image', image[0].originFileObj); // Access the file object from the Upload component
            }

            // Send the form data with the file via your mutation
            const response = await createBlog(formData).unwrap();
            message.success(response.message || 'Blog created successfully!');
            form.resetFields();
        } catch (error) {
            message.error(error.data?.message || 'Failed to create blog');
            console.error('Error submitting blog:', error);
        }
    };

    return (
        <div className="signup-container">
            <div className="right_createBlog">
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    autoComplete="off"
                    className="signup-form"
                >
                    <Form.Item
                        name="title"
                        rules={[
                            { required: true, message: 'Please enter a title' },
                            { min: 3, message: 'Title must be at least 3 characters' },
                        ]}
                    >
                        <Input placeholder="Title" />
                    </Form.Item>
                    <Form.Item
                        name="status"
                        initialValue="published"
                    >
                        <Select>
                            <Select.Option value="published">Published</Select.Option>
                            <Select.Option value="pending_approval">Pending Approval</Select.Option>
                            <Select.Option value="pasta">Pasta</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="image"
                        valuePropName="fileList"
                        getValueFromEvent={(e) => e?.fileList}
                        rules={[{ required: true, message: 'Please upload an image' }]}
                    >
                        <Upload
                            listType="picture"
                            beforeUpload={() => false} // Prevent automatic upload
                        >
                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        </Upload>
                    </Form.Item>

                    <Form.Item
                        name="content"
                        rules={[{ required: true, message: 'Please enter content' }]}
                    >
                        <TextArea
                            placeholder="Write your blog content here"
                            rows={6}
                            style={{ minHeight: '120px', borderRadius: '6px' }}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading || isLoading}
                            className="signup-form-button"
                        >
                            Create Blog
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default BlogForm;
