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
import { SidebarRight } from './components/SidebarRight';
import { SidebarNew } from './components/SidebarNew';

const App = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout style={{ height: '100vh' }}>
            <SidebarNew />
            <Layout className='site-layout' style={{ display: 'flex' }}>
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
            <SidebarRight />
        </Layout>
    );
};
export default App;
