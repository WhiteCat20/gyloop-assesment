import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import './App.css';
const { Header, Sider, Content } = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} className='slider-left'>
                <div className='top-sider-left' >
                    <img className='logo' src='/img/Logo.png' alt='logo-gyloop' />
                    {React.createElement(
                            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                            {
                                className: 'trigger',
                                onClick: () => setCollapsed(!collapsed),
                            }
                        )}
                </div>        
                <Menu
                    mode='inline'
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon:<UploadOutlined/>,
                            label: 'Home',
                        },
                        {
                            key: '2',
                            icon:<UploadOutlined/>,
                            label: 'Inbox',
                        },
                        {
                            key: '3',
                            icon:<UploadOutlined/>,
                            label: 'Calender',
                        },
                        {
                            key: '4',
                            icon:<UploadOutlined/>,
                            label: 'More',
                        },
                        {
                            key: '5',
                            icon:<UploadOutlined/>,
                            label: 'Customer',
                            children: [
                                {
                                    label: 'Master Data',
                                    children: [
                                        {
                                            label: 'Products',
                                        },
                                        {
                                            label: 'Pricing',
                                        },
                                        {
                                            label: 'Catalogs',
                                        },
                                        {
                                            label: 'Budgets',
                                        },
                                        {
                                            label: 'Vouchers',
                                        },
                                        {
                                            label: 'Loyalties',
                                        },
                                    ],
                                },
                                {
                                    label: 'Organization',
                                    children: [
                                        {
                                            label: 'Sales Group',
                                        },
                                        {
                                            label: 'Sales Person',
                                        },
                                        {
                                            label: 'Sales Teritory',
                                        },
                                        {
                                            label: 'Sales Target',
                                        },
                                    ],
                                },
                                {
                                    label: 'Contact',
                                    children: [
                                        {
                                            label: 'Leads',
                                        },
                                        {
                                            label: 'Contact',
                                        },
                                        {
                                            label: 'Costumers',
                                        },
                                    ],
                                },
                                {
                                    label: 'Partner',
                                    children: [
                                        {
                                            label: 'Business Partner',
                                        },
                                        {
                                            label: 'Reseller',
                                        },
                                        {
                                            label: 'Distributor',
                                        },
                                    ],
                                },
                                {
                                    label: 'Sales Activity',
                                    children: [
                                        {
                                            label: 'Pipelines',
                                        },
                                        {
                                            label: 'Activity',
                                        },
                                        {
                                            label: 'Quotations',
                                        },
                                        {
                                            label: 'Proposals',
                                        },
                                        {
                                            label: 'Contracts',
                                        },
                                        {
                                            label: 'Sales Orders',
                                        },
                                        {
                                            label: 'Subscriptions',
                                        },
                                    ],
                                },
                                {
                                    label: 'Delivery',
                                    children: [
                                        {
                                            label: 'Delivery Orders',
                                        },
                                        {
                                            label: 'Shipments',
                                        },
                                        {
                                            label: 'Stock Movement',
                                        },
                                        {
                                            label: 'Sales Return',
                                        },
                                    ],
                                },
                                {
                                    label: 'Billing',
                                    children: [
                                        {
                                            label: 'Customer Billing',
                                        },
                                        {
                                            label: 'Collections',
                                        },
                                    ],
                                },
                                {
                                    label: 'Sales Report',
                                    children: [
                                        {
                                            label: 'Sales Overview',
                                        },
                                        {
                                            label: 'Product Overview',
                                        },
                                        {
                                            label: 'Reports',
                                        },
                                        {
                                            label: 'Performances',
                                        },
                                    ],
                                },
                                {
                                    label: 'Portal',
                                    children: [
                                        {
                                            label: 'Customer Portal',
                                        },
                                    ],
                                },
                                {
                                    label: 'Setting',
                                    children: [
                                        {
                                            label: 'General Settings',
                                        },
                                        {
                                            label: 'Configurations',
                                        },
                                        {
                                            label: 'Portal Settings',
                                        },
                                        {
                                            label: 'Workflows',
                                        },
                                        {
                                            label: 'Report Painters',
                                        },
                                    ],
                                },
                                {
                                    label: 'Users',
                                    children: [
                                        {
                                            label: 'User and Roles',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            key: '6',
                            icon:<UploadOutlined/>,
                            label: 'Suppliers',
                        },
                        {
                            key: '7',
                            icon:<UploadOutlined/>,
                            label: 'Warehouse',
                        },
                    ]}
                />
            </Sider>
            <Layout className='site-layout'>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <div><h3>Home</h3></div>
                    <div>
                        <ul style={{display:'flex'}}>
                            <li><a href='#'>Dashboard</a></li>
                            <li><a href='#'>Task</a></li>
                            <li><a href='#'>Insight</a></li>
                        </ul>
                    </div>
                    
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    Content
                </Content>
            </Layout>
            <Sider className='sider-right'>

            </Sider>
        </Layout>
    );
};
export default App;
