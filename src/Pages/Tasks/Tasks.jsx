import React from 'react';
import { List, Spin, Alert } from 'antd';
import { useGetTasksQuery } from '../../../core/api/taskApi'
import Loader from '../../Components/Loader/Loader';

const Tasks = () => {
    const { data, isLoading } = useGetTasksQuery();

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
                renderItem={(task) => (
                    <List.Item>
                        <List.Item.Meta
                            title={task.title}
                            description={task.description}
                        />
                    </List.Item>
                )}
                locale={{ emptyText: 'No tasks found' }}
            />
        </div>
    );
};

export default Tasks;
