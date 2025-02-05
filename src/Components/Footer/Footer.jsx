// Header.jsx
import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import {
    HomeOutlined,
    UserOutlined,
    BellOutlined,
    MessageOutlined,
    MenuOutlined
} from '@ant-design/icons';
import '../Header/Header.css';

const Footer = () => {
    return (
        <footer className="footer" style={{ display: "fixed", bottom: "0", width: "100%" }}>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/press">Press</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="/documentation">Documentation</a></li>
                        <li><a href="/guides">Guides</a></li>
                        <li><a href="/tutorials">Tutorials</a></li>
                        <li><a href="/api">API Reference</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                        <li><a href="/cookies">Cookie Policy</a></li>
                        <li><a href="/compliance">Compliance</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact</h3>
                    <ul>
                        <li><a href="mailto:support@example.com">support@example.com</a></li>
                        <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
                        <li className="address">
                            123 Main Street<br />
                            New York, NY 10001<br />
                            United States
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Your Company. All rights reserved.</p>
                <div className="social-links">
                    <a href="/twitter">Twitter</a>
                    <a href="/facebook">Facebook</a>
                    <a href="/instagram">Instagram</a>
                    <a href="/linkedin">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;