import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
const { Sider, Content } = Layout;
import './assets/all.css';
import { ContentsLayout } from './components/ContentsLayout';
import { SidebarLeft } from './components/SidebarLeft';

const App = () => {
   
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout style={{ height: '100vh' }}>
            <SidebarLeft />
            <Layout className='site-layout'>
                <Header />
                <Content
                    style={{
                        border: '1px solid #0D6AD9',
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <ContentsLayout />
                </Content>
            </Layout>
            <aside
                style={{
                    width: '76px',
                }}
            >
                <div className='container-fluid'>
                    <div style={{ alignItems: 'center' }}>
                        <ul class='navbar-nav flex-row flex-md-column justify-content-center align-items-center'>
                            <li
                                className='nav-link'
                                style={{ paddingBottom: '1rem' }}
                            >
                                <a href='#' className='nav-item'>
                                    <i
                                        className='far fa-cog'
                                        style={{
                                            fontSize: '33px',
                                            color: '#757575',
                                        }}
                                    ></i>
                                </a>
                            </li>
                            <li
                                className='nav-link'
                                style={{ paddingBottom: '1rem' }}
                            >
                                <a href='#' classname='nav-item'>
                                    <i
                                        className='far fa-sticky-note'
                                        style={{
                                            fontSize: '33px',
                                            color: '#757575',
                                        }}
                                    ></i>
                                </a>
                            </li>
                            <li
                                className='nav-link'
                                style={{ paddingBottom: '1rem' }}
                            >
                                <a href='#' className='nav-item'>
                                    <i
                                        className='far fa-ballot-check'
                                        style={{
                                            fontSize: '33px',
                                            color: '#757575',
                                        }}
                                    ></i>
                                </a>
                            </li>
                            <li
                                className='nav-link'
                                style={{ paddingBottom: '1rem' }}
                            >
                                <a
                                    href='#'
                                    className='nav-item'
                                    data-toggle='fullscreen'
                                    data-fullscreen='false'
                                >
                                    <i
                                        className='far fa-expand-alt'
                                        style={{
                                            fontSize: '33px',
                                            color: '#757575',
                                        }}
                                    ></i>
                                    <i
                                        className='far fa-compress-alt d-none'
                                        style={{
                                            fontSize: '33px',
                                            color: '#757575',
                                        }}
                                    ></i>
                                </a>
                            </li>
                            <li
                                className='nav-link nav-link-divider'
                                style={{ paddingBottom: '1rem' }}
                            >
                                <hr />
                            </li>
                            <li
                                className='nav-link'
                                style={{ paddingBottom: '1rem' }}
                            >
                                <a
                                    href='#'
                                    className='nav-item'
                                    data-toggle='fullscreen'
                                    data-fullscreen='false'
                                >
                                    <i
                                        className='far fa-ellipsis-h'
                                        style={{
                                            fontSize: '33px',
                                            color: '#757575',
                                        }}
                                    ></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </Layout>
    );
};
export default App;
