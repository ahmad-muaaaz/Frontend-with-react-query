import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import {
    HomeOutlined,
    UserAddOutlined,
    LoginOutlined,
    MenuOutlined
} from '@ant-design/icons';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">Task Manager</div>

                <nav className="desktop-nav">
                    <Menu mode="horizontal">
                        <Menu.Item key="home" icon={<HomeOutlined />}>
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="signup" icon={<UserAddOutlined />}>
                            <Link to="/signup">Sign Up</Link>
                        </Menu.Item>
                        <Menu.Item key="signin" icon={<LoginOutlined />}>
                            <Link to="/signin">Sign In</Link>
                        </Menu.Item>
                    </Menu>
                </nav>

                <Button
                    className="mobile-menu-button"
                    icon={<MenuOutlined />}
                    onClick={toggleMenu}
                />

                {isMenuVisible && (
                    <nav className="mobile-nav">
                        <Menu mode="vertical">
                            <Menu.Item key="home" icon={<HomeOutlined />}>
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="signup" icon={<UserAddOutlined />}>
                                <Link to="/signup">Sign Up</Link>
                            </Menu.Item>
                            <Menu.Item key="signin" icon={<LoginOutlined />}>
                                <Link to="/signin">Sign In</Link>
                            </Menu.Item>
                        </Menu>
                    </nav>
                )}
            </div>
        </header>
    );
};

export { Header };