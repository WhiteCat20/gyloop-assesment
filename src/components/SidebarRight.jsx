import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
const { Sider, Content } = Layout;

export const SidebarRight = () => {
    return(
        <aside className='sidebar-right' style={{ width: '76px'}}>
                <div className='container-fluid' style={{right:'0', bottom:'0'}}>
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
                                            fontSize: '20px',
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
                                            fontSize: '20px',
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
                                            fontSize: '20px',
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
                                            fontSize: '20px',
                                            color: '#757575',
                                        }}
                                    ></i>
                                    <i
                                        className='far fa-compress-alt d-none'
                                        style={{
                                            fontSize: '20px',
                                            color: '#757575',
                                        }}
                                    ></i>
                                </a>
                            </li>
                            <li className='nav-link nav-link-divider' style={{ paddingBottom: '1rem', fontSize:'20px' }}>
                                <br className="divider"/>
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
                                            fontSize: '20px',
                                            color: '#757575',
                                        }}
                                    ></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
    )
}
