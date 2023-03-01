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
const { Sider, Content } = Layout;


export const SidebarLeft = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            className='slider-left'
            width={290}
        >
            <div className='top-sider-left' style={{display:'flex'}}>
                <img className='logo' src='/img/Logo.png' alt='logo-gyloop' style={{width:'150px', paddingLeft:'2rem', paddingTop:'1rem'}}/>
                <div>
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        }
                    )}
                </div>
            </div>

            <Menu
                style={{ padding: '0 20px', marginTop:'2rem' }}
                mode='inline'
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: (
                            <i
                                className='fas fa-home'
                                style={{ fontSize: '20px' }}
                            ></i>
                        ),
                        label: 'Home',
                    },
                    {
                        key: '2',
                        icon: (
                            <i
                                className='far fa-envelope'
                                style={{ fontSize: '20px' }}
                            ></i>
                        ),
                        label: 'Inbox',
                    },
                    {
                        key: '3',
                        icon: (
                            <i
                                className='far fa-calendar-alt'
                                style={{ fontSize: '20px' }}
                            ></i>
                        ),
                        label: 'Calendar',
                    },
                    {
                        key: '4',
                        icon: (
                            <i
                                className='far fa-envelope'
                                style={{ fontSize: '20px' }}
                            ></i>
                        ),
                        label: 'More',
                    },
                    {
                        label: '    ',
                    },
                    {
                        key: '5',
                        icon: (
                            <i
                                className='fas fa-heart'
                                style={{
                                    color: '#FF8080',
                                    fontSize: '20px',
                                }}
                            ></i>
                        ),
                        label: 'Customer',
                        children:[
                            {
                                label: 'Master Data ',
                                icon: <i className='fas fa-box'></i>,
                                children: [
                                    {
                                        label: 'Products',
                                        icon: <i className='far fa-box'></i>,
                                    },
                                    {
                                        label: 'Pricing',
                                        icon: <i className='far fa-tags'></i>,
                                    },
                                    {
                                        label: 'Catalogs',
                                        icon: (
                                            <i className='far fa-folder-tree'></i>
                                        ),
                                    },
                                    {
                                        label: 'Budgets',
                                        icon: (
                                            <i className='far fa-sack-dollar'></i>
                                        ),
                                    },
                                    {
                                        label: 'Vouchers',
                                        icon: (
                                            <i className='far fa-credit-card'></i>
                                        ),
                                    },
                                    {
                                        label: 'Loyalties',
                                        icon: <i className='far fa-gift'></i>,
                                    },
                                ],
                            },
                            {
                                label: 'Organization',
                                icon: <i className='fas fa-sitemap'></i>,
                                children: [
                                    {
                                        label: 'Sales Group',
                                        icon: <i className='far fa-users'></i>,
                                    },
                                    {
                                        label: 'Sales Person',
                                        icon: <i className='far fa-user'></i>,
                                    },
                                    {
                                        label: 'Sales Teritory',
                                        icon: (
                                            <i className='far fa-map-marker-smile'></i>
                                        ),
                                    },
                                    {
                                        label: 'Sales Target',
                                        icon: (
                                            <i className='far fa-bullseye-pointer'></i>
                                        ),
                                    },
                                ],
                            },
                            {
                                label: 'Contact',
                                icon: <i className='fas fa-address-book'></i>,
                                children: [
                                    {
                                        label: 'Leads',
                                        icon: (
                                            <i className='far fa-users-medical'></i>
                                        ),
                                    },
                                    {
                                        label: 'Contact',
                                        icon: (
                                            <i className='far fa-address-book'></i>
                                        ),
                                    },
                                    {
                                        label: 'Costumers',
                                        icon: (
                                            <i className='far fa-user-tag'></i>
                                        ),
                                    },
                                ],
                            },
                            {
                                label: 'Partner',
                                icon: <i className='fas fa-handshake'></i>,
                                children: [
                                    {
                                        label: 'Business Partner',
                                        icon: (
                                            <i className='far fa-people-arrows'></i>
                                        ),
                                    },
                                    {
                                        label: 'Reseller',
                                        icon: (
                                            <i className='far fa-person-dolly-empty'></i>
                                        ),
                                    },
                                    {
                                        label: 'Distributor',
                                        icon: (
                                            <i className='far fa-person-dolly'></i>
                                        ),
                                    },
                                ],
                            },
                            {
                                label: 'Sales Activity',
                                icon: <i className='fas fa-calendar-edit'></i>,
                                children: [
                                    {
                                        label: 'Pipelines',
                                        icon: (
                                            <i className='far fa-funnel-dollar'></i>
                                        ),
                                    },
                                    {
                                        label: 'Activity',
                                        icon: <i className='far fa-clock'></i>,
                                    },
                                    {
                                        label: 'Quotations',
                                        icon: (
                                            <i className='far fa-paper-plane'></i>
                                        ),
                                    },
                                    {
                                        label: 'Proposals',
                                        icon: (
                                            <i className='far fa-clipboard-check'></i>
                                        ),
                                    },
                                    {
                                        label: 'Contracts',
                                        icon: (
                                            <i className='far fa-file-contract'></i>
                                        ),
                                    },
                                    {
                                        label: 'Sales Orders',
                                        icon: (
                                            <i className='far fa-shopping-bag'></i>
                                        ),
                                    },
                                    {
                                        label: 'Subscriptions',
                                        icon: (
                                            <i className='far fa-repeat-alt'></i>
                                        ),
                                    },
                                ],
                            },
                            {
                                label: 'Delivery',
                                icon: <i className='fas fa-truck'></i>,
                                children: [
                                    {
                                        label: 'Delivery Orders',
                                        icon: <i className='far fa-truck'></i>,
                                    },
                                    {
                                        label: 'Shipments',
                                        icon: (
                                            <i className='far fa-box-check'></i>
                                        ),
                                    },
                                    {
                                        label: 'Stock Movement',
                                        icon: (
                                            <i className='far fa-forklift'></i>
                                        ),
                                    },
                                    {
                                        label: 'Sales Return',
                                        icon: <i className='far fa-undo'></i>,
                                    },
                                ],
                            },
                            {
                                label: 'Billing',
                                icon: <i className='fas fa-university'></i>,
                                children: [
                                    {
                                        label: 'Customer Billing',
                                        icon: (
                                            <i className='far fa-file-invoice-dollar'></i>
                                        ),
                                    },
                                    {
                                        label: 'Collections',
                                        icon: (
                                            <i className='far fa-piggy-bank'></i>
                                        ),
                                    },
                                ],
                            },
                            {
                                label: 'Sales Report',
                                icon: <i className='fas fa-chart-bar'></i>,
                                children: [
                                    {
                                        label: 'Sales Overview',
                                        icon: (
                                            <i className='far fa-chart-line'></i>
                                        ),
                                    },
                                    {
                                        label: 'Product Overview',
                                        icon: (
                                            <i className='far fa-box-heart'></i>
                                        ),
                                    },
                                    {
                                        label: 'Reports',
                                        icon: <i className='far fa-table'></i>,
                                    },
                                    {
                                        label: 'Performances',
                                        icon: (
                                            <i className='far fa-tachometer-fastest'></i>
                                        ),
                                    },
                                ],
                            },
                            {
                                label: 'Portal',
                                icon: <i className='fas fa-chalkboard'></i>,
                                children: [
                                    {
                                        label: 'Customer Portal',
                                        icon: (
                                            <i className='far fa-desktop'></i>
                                        ),
                                    },
                                ],
                            },
                            {
                                label: 'Setting',
                                icon: <i className='fas fa-cog'></i>,
                                children: [
                                    {
                                        label: 'General Settings',
                                        icon: <i className='far fa-cog'></i>,
                                    },
                                    {
                                        label: 'Configurations',
                                        icon: (
                                            <i className='far fa-sliders-h'></i>
                                        ),
                                    },
                                    {
                                        label: 'Portal Settings',
                                        icon: <i className='far fa-cogs'></i>,
                                    },
                                    {
                                        label: 'Workflows',
                                        icon: <i className='far fa-random'></i>,
                                    },
                                    {
                                        label: 'Report Painters',
                                        icon: (
                                            <i className='far fa-pencil-paintbrush'></i>
                                        ),
                                    },
                                ],
                            },
                            {
                                label: 'Users',
                                icon: <i className='fas fa-user'></i>,
                                children: [
                                    {
                                        label: 'User and Roles',
                                        icon: (
                                            <i className='far fa-user-cog'></i>
                                        ),
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        key: '6',
                        icon: (
                            <i
                                className='fas fa-shopping-cart'
                                style={{
                                    color: '#30E1F8',
                                    fontSize: '20px',
                                }}
                            ></i>
                        ),
                        label: 'Suppliers',
                        children: [],
                    },
                    {
                        key: '7',
                        icon: (
                            <i
                                className='fas fa-warehouse'
                                style={{
                                    color: '#FFBF69',
                                    fontSize: '20px',
                                }}
                            ></i>
                        ),
                        label: 'Warehouse',
                        children: [],
                    },
                    {
                        key: '8',
                        icon: (
                            <i
                                className='fas fa-chart-network'
                                style={{ color: '#FF98F7' }}
                            ></i>
                        ),
                        label: 'Network',
                        children: [],
                    },
                ]}
            />
        </Sider>
    );
};
