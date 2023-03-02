import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import './SidebarNew.css';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
const { Sider, Content } = Layout;

export const SidebarNew = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            className='slider-left'
            width={290}
        >
            <div className='top-sider-left' style={{ display: 'flex' }}>
                <img
                    className='logo'
                    src='/img/Logo.png'
                    alt='logo-gyloop'
                    style={{
                        width: '150px',
                        paddingLeft: '2rem',
                        paddingTop: '1rem',
                    }}
                />
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

            {/* <Menu
                style={{ padding: '0 20px', marginTop: '2rem' }}
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
                        children: [
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
            /> */}

    <div className="sidebar clearfix">
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item">
                    <a href="index.html" className="active nav-link" aria-current="page" >
                        <i className='nav-icon fas fa-home'></i>
                        <p>Home</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="crm.html" className="nav-link">
                        <i className="nav-icon far fa-envelope"></i>
                        <p>Inbox</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="crm.html" className="nav-link" >
                        <i className="nav-icon far fa-calendar-alt"></i>
                        <p>Calendar</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="crm.html" className="nav-link">
                        <i className="nav-icon far fa-envelope"></i>
                        <p>More</p>
                    </a>
                </li>

                <li><br className="divider"/><br className="divider"/></li>

                <li className="nav-item has-treeview menu-closed">
                    <a href="#" className="nav-link parent">
                        <i className="nav-icon fas fa-shopping-cart" style={{ color:'#FF8080' }}></i>
                        <p>
                            Customers
                            <i className="right fal fa-caret-down" style={{ color:'#1B64D8' }}></i>
                        </p>
                        
                        
                    </a>

                    <ul className="nav-item nav-treeview menu-closed">
                        <li className="nav-item">
                            <a href="#" className="nav-link" style={{ fontWeight:'bold' }}>
                                <i className="nav-icon fas fa-box"></i>
                                <p>
                                    Master Data
                                    <i className="right fal fa-caret-down" style={{ color:'#1B64D8' }}></i>
                                </p>
                            </a>

                            <ul className="nav nav-treeview menu-open" style={{ paddingLeft:'34px' }}>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link" >
                                        <i className="nav-icon far fa-box"></i>
                                        <p>Products</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-tags"></i>
                                        <p>Pricing</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-folder-tree"></i>
                                        <p>Catalogs</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-sack-dollar"></i>
                                        <p>Budgets</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-credit-card"></i>
                                        <p>Vouchers</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-gift"></i>
                                        <p>Loyalties</p>
                                    </a> 
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item-divider"><hr/></li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" style={{ fontWeight:'bold'}}>
                                <i className="nav-icon fas fa-sitemap"></i>
                                <p>
                                    Organization
                                    <i className="right fal fa-caret-down" style={{ color:'#1B64D8' }}></i>
                                </p>
                            </a>
                            
                            <ul className="nav nav-treeview menu-open" style={{ paddingLeft:'34px' }}>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-users"></i>
                                        <p>Sales Group</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-user"></i>
                                        <p>Sales Person</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-map-marker-smile"></i>
                                        <p>Sales Teritory</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-bullseye-pointer"></i>
                                        <p>Sales Target</p>
                                    </a> 
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item-divider"></li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" style={{ fontWeight:'bold'}}>
                                <i className="nav-icon fas fa-address-book"></i>
                                <p>
                                    Contact
                                    <i className="right fal fa-caret-down" style={{ color:'#1B64D8' }}></i>
                                </p>
                            </a> 
                            
                            <ul className="nav nav-treeview menu-open" style={{ paddingLeft:'34px' }}>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-users-medical"></i>
                                        <p>Leads</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-address-book"></i>
                                        <p>Contact</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-user-tag"></i>
                                        <p>Customer</p>
                                    </a> 
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item-divider"></li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" style={{ fontWeight:'bold'}}>
                                <i className="nav-icon fas fa-handshake"></i>
                                <p>
                                    Partner
                                    <i className="right fal fa-caret-down" style={{ color:'#1B64D8' }}></i>
                                </p>
                            </a> 
                            
                            <ul className="nav nav-treeview menu-open" style={{ paddingLeft:'34px' }}>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-people-arrows"></i>
                                        <p>Bussiness Partner</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-person-dolly-empty"></i>
                                        <p>Reseller</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-person-dolly"></i>
                                        <p>Distributor</p>
                                    </a> 
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item-divider"></li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" style={{ fontWeight:'bold'}}>
                                <i className="nav-icon fas fa-calendar-edit"></i>
                                <p>
                                    Sales Activity
                                    <i className="right fal fa-caret-down" style={{ color:'#1B64D8' }}></i>
                                </p>
                            </a>  

                            <ul className="nav nav-treeview menu-open" style={{ paddingLeft:'34px' }}>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-funnel-dollar"></i>
                                        <p>Pipelines</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-clock"></i>
                                        <p>Activity</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-paper-plane"></i>
                                        <p>Quotations</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-clipboard-check"></i>
                                        <p>Proposals</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-file-contract"></i>
                                        <p>Contracts</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-shopping-bag"></i>
                                        <p>Sales Orders</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-repeat-alt"></i>
                                        <p>Subscriptions</p>
                                    </a> 
                                </li>
                            </ul>
                        </li> 

                        <li className="nav-item-divider"></li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" style={{ fontWeight:'bold'}}>
                                <i className="nav-icon fas fa-truck"></i>
                                <p>
                                    Delivery
                                    <i className="right fal fa-caret-down" style={{ color:'#1B64D8' }}></i>
                                </p>
                            </a>  

                            <ul className="nav nav-treeview menu-open" style={{ paddingLeft:'34px' }}>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-truck"></i>
                                        <p>Delivery Orders</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-box-check"></i>
                                        <p>Shipments</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-forklift"></i>
                                        <p>Stock Movement</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-undo"></i>
                                        <p>Sales Return</p>
                                    </a>  
                                </li>
                            </ul>
                        </li>
                        
                        <li className="nav-item-divider"></li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" style={{ fontWeight:'bold'}}>
                                <i className="nav-icon fas fa-university"></i>
                                <p>
                                    Billing
                                    <i className="right fal fa-caret-down" style={{ color:'#1B64D8' }}></i>
                                </p>
                            </a> 
                            
                            <ul className="nav nav-treeview menu-open" style={{ paddingLeft:'34px' }}>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-file-invoice-dollar"></i>
                                        <p>Customer Billing</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-piggy-bank"></i>
                                        <p>Collections</p>
                                    </a> 
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item-divider"></li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" style={{ fontWeight:'bold'}}>
                                <i className="nav-icon fas fa-chart-bar"></i>
                                <p>
                                    Sales Report
                                    <i className="right fal fa-caret-down" style={{ color:'#1B64D8' }}></i>
                                </p>
                            </a> 

                            <ul className="nav nav-treeview menu-open" style={{ paddingLeft:'34px' }}>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-chart-line"></i>
                                        <p>Sales Overview</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-box-heart"></i>
                                        <p>Product Overview</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-table"></i>
                                        <p>Reports</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-tachometer-fastest"></i>
                                        <p>Performances</p>
                                    </a> 
                                </li> 
                            </ul>
                        </li>

                        <li className="nav-item-divider"></li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" style={{ fontWeight:'bold'}}>
                                <i className="nav-icon fas fa-chalkboard"></i>
                                <p>
                                    Portal
                                    <i className="right fal fa-caret-down" style={{ color:'#1B64D8' }}></i>
                                </p>
                            </a>  

                            <ul clasNames="nav nav-treeview menu-open" style={{ paddingLeft:'34px' }}>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-desktop"></i>
                                        <p>Customer Portal</p>
                                    </a> 
                                </li>
                                
                            </ul>
                        </li>

                        <li className="nav-item-divider"></li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" style={{ fontWeight:'bold'}}>
                                <i className="nav-icon fas fa-cog"></i>
                                <p>
                                    Setting
                                    <i className="right fal fa-caret-down" style={{ color:'#1B64D8' }}></i>
                                </p>
                            </a> 
                            
                            <ul className="nav nav-treeview menu-open" style={{ paddingLeft:'34px' }}>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-cog"></i>
                                        <p>General Settings</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-sliders-h"></i>
                                        <p>Configurations</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-cogs"></i>
                                        <p>Portal Settings</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-random"></i>
                                        <p>Workflows</p>
                                    </a> 
                                </li>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-pencil-paintbrush"></i>
                                        <p>Report Painters</p>
                                    </a> 
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item-divider"></li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" style={{ fontWeight:'bold'}}>
                                <i className="nav-icon fas fa-user"></i>
                                <p>
                                    Users
                                    <i className="right fal fa-caret-down" style={{ color:'#1B64D8' }}></i>
                                </p>
                            </a>  

                            <ul className="nav nav-treeview menu-open" style={{ paddingLeft:'34px' }}>
                                <li className="nav-item nav-subitem">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-user-cog"></i>
                                        <p>User and Roles</p>
                                    </a> 
                                </li>
                                
                            </ul>
                        </li> 


                    </ul>


                </li>

                <li className="nav-item has-treeview menu-closed">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-shopping-cart" style={{ color:'#30E1F8' }}></i>
                        <p>
                            Suppliers
                            <i className="right fal fa-caret-down" style={{ color:'#1B64D8' }}></i>
                        </p>
                    </a>
                </li>

                <li className="nav-item has-treeview menu-closed">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-warehouse" style={{ color:'#FFBF69' }}></i>
                        <p>
                            Warehouse
                            <i className="right fal fa-caret-down" style={{ color:'#1B64D8' }}></i>
                        </p>
                    </a>
                </li>

                <li className="nav-item has-treeview menu-closed">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-chart-network" style={{ color:'#FF98F7' }}></i>
                        <p>
                            Network
                            <i className="right fal fa-caret-down" style={{ color:'#1B64D8' }}></i>
                        </p>
                    </a>
                </li>
            </ul>
        </nav>
    </div>


        </Sider>
    );
};
