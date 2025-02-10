import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import {
    HomeOutlined,
    UserAddOutlined,
    LoginOutlined,
    MenuOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import './Header.css';
import { Link } from 'react-router-dom';
import { logout } from '../../../core/redux/features/authSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const dispatch = useDispatch();
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };
    const handleLogout = async () => {
        try {
            await dispatch(logout());
            navigate('/signin');
        } catch (error) {
            console.error('Failed to logout:', error);
        }
    };

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">BlogNest</div>

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
                        <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
                            <Link >Logout</Link>
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
                            <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
                                <Link>Logout</Link>
                            </Menu.Item>
                        </Menu>
                    </nav>
                )}
            </div>
        </header>
    );
};

export { Header };