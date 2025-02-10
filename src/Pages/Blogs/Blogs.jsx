import React from 'react';
import { List, Spin, Alert } from 'antd';
import { useGetBlogsQuery } from '../../../core/api/blogAPI'
import Loader from '../../Components/Loader/Loader';

const Tasks = () => {
    const { data, isLoading } = useGetBlogsQuery();

    if (isLoading) {
        return (
            <Loader />
        );
    }
    return (
        <div>
            <h1>Tasks</h1>
            <List
                dataSource={data?.data || []}
                renderItem={(blog) => (
                    <>
                        "Hey"
                        <List.Item>
                            <List.Item.Meta
                                title={blog.title}
                                description={blog.content}
                            />
                        </List.Item>
                        <img src={blog.image_url} />
                    </>

                )}
                locale={{ emptyText: 'No tasks found' }}
            />
        </div>
    );
};

export default Tasks;
