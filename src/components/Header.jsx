import React, { Fragment, useState } from 'react';
import { Layout, Menu, theme } from 'antd';

export const Header = () => {
    const items = [
        {
            label: 'Navigation One',
            key: 'mail',
        },
        {
            label: 'Navigation Two',
            key: 'app',
        },
    ];
    const [activeNavItem, setActiveNavItem] = useState(0);

    const handleNavItemOnClick = (index) => {
        setActiveNavItem(index);
    };
    return (
        <Fragment>
            <header
                style={{ padding: '20px 29px', backgroundColor: '#0D6AD9' }}
            >
                <h3
                    style={{
                        fontWeight: '600',
                        fontSize: '30px',
                        color: '#fff',
                    }}
                    className='home-text'
                >
                    Home
                </h3>
                <nav
                    className='navbar-header'
                    style={{ color: 'white', marginTop: '3.25rem' }}
                >
                    <ul className='ul-text'>
                        <li style={{ display: 'flex', gap: '2.3125rem' }}>
                            <a
                                href='#'
                                style={{ all: 'unset', cursor: 'pointer' }}
                            >
                                Dashboard
                            </a>
                            <a
                                href='#'
                                style={{ all: 'unset', cursor: 'pointer' }}
                            >
                                Tasks
                            </a>
                            <a
                                href='#'
                                style={{ all: 'unset', cursor: 'pointer' }}
                            >
                                Insights
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    );
};
