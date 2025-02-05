import React from 'react'
import { List, Spin, Alert } from 'antd';

const Loader = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Spin size="default" />
        </div>
    )
}

export default Loader