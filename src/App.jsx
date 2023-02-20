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
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <img className='logo' src='/img/Logo.png' alt='logo-gyloop' />
                <Menu
                    mode='inline'
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            label: 'Home',
                        },
                        {
                            key: '2',
                            label: 'Inbox',
                        },
                        {
                            key: '3',
                            label: 'Calender',
                        },
                        {
                            key: '4',
                            label: 'More',
                        },
                        {
                            key: '5',
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
                            label: 'Suppliers',
                        },
                        {
                            key: '7',
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
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        }
                    )}
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
            <Sider></Sider>
        </Layout>
    );
};
export default App;
