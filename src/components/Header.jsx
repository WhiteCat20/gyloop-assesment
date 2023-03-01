import React, { Fragment, useState, useEffect } from 'react';
import { Layout, Menu, theme } from 'antd';
import moment from 'moment';
import { EntitiyData } from './EntitiyData';

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
    const navItem = {
        backgroundColor: 'red',
    };
    const [activeNavItem, setActiveNavItem] = useState(0);

    const handleNavItemOnClick = (index) => {
        setActiveNavItem(index);
    };

    //clock
    const [currentTime, setCurrentTime] = useState(moment());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Fragment>
            <header
                style={{
                    padding: '20px 29px',
                    paddingBottom: '10px',
                    backgroundColor: '#0D6AD9',
                }}
            >
                <Layout
                    style={{
                        backgroundColor: 'inherit',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <div
                        style={{
                            fontWeight: '600',
                            fontSize: '30px',
                            color: '#fff',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                        className='home-text'
                    >
                        <h3>Home</h3>
                        <div
                            style={{
                                display: 'flex',
                                gap: '22px',
                                fontSize: '24px',
                                alignItems: 'center',
                            }}
                        >
                            <i className='fal fa-bell ' id='notification-badge'>
                                <span class='badge-bell'>5</span>
                            </i>

                            <i
                                className='far fa-envelope'
                                id='notification-badge'
                            >
                                <span class='badge-envelope '>...</span>
                            </i>
                            <i
                                className='far fa-building dropbtn'
                                id='notification-badge'
                            >
                                <div class='dropdown-content'>
                                    <div style={{ color: '#000' }}>
                                        <div
                                            style={{
                                                fontWeight: 600,
                                                fontSize: '16px',
                                                padding: '16px',
                                            }}
                                        >
                                            Entity Data
                                            <div
                                                style={{
                                                    color: '#989898',
                                                    fontWeight: 400,
                                                    marginTop: '.5rem',
                                                }}
                                            >
                                                2 of 2 are selected
                                            </div>
                                        </div>
                                    </div>
                                    <div id='entity-data-wrapper'>
                                        <EntitiyData name='United Tractor, PT' />
                                        <EntitiyData name='Bina Pertiwi, PT' />
                                        <EntitiyData name='Patria Buana,  PT' />
                                        <EntitiyData name='Tuah Turangga, PT' />
                                    </div>
                                </div>
                            </i>
                            <div className='clock-and-city'>
                                <div
                                    style={{
                                        fontFamily: 'SFCompact,sans-serif',
                                        fontSize: '30px',
                                        marginTop: '-10px',
                                    }}
                                >
                                    {currentTime.format('HH:mm')}
                                </div>
                                <div
                                    style={{
                                        fontFamily: 'SFCompact,sans-serif',
                                        fontSize: '12px',
                                        textAlign: 'center',
                                        marginTop: '-10px',
                                    }}
                                >
                                    Jakarta
                                </div>
                            </div>
                            <i class='fas fa-ellipsis-h'></i>
                        </div>
                    </div>
                </Layout>
                <nav
                    className='navbar-header'
                    style={{ color: 'white', marginTop: '3.25rem' }}
                >
                    <ul className='ul-text'>
                        <li style={{ display: 'flex', gap: '2.3125rem' }}>
                            <a
                                href='#'
                                className={
                                    activeNavItem === 0 ? 'active-nav' : ''
                                }
                                onClick={() => handleNavItemOnClick(0)}
                            >
                                Dashboard
                            </a>
                            <a
                                href='#'
                                className={
                                    activeNavItem === 1 ? 'active-nav' : ''
                                }
                                onClick={() => handleNavItemOnClick(1)}
                            >
                                Tasks
                            </a>
                            <a
                                href='#'
                                className={
                                    activeNavItem === 2 ? 'active-nav' : ''
                                }
                                onClick={() => handleNavItemOnClick(2)}
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
