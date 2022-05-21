import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Menu.scss';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact}>
            {({ match }) => {
                const active = match ? 'header__active' : '';
                return (
                    <li className={active}>
                        <Link to={to}  >
                            {label}
                        </Link>
                    </li>
                )
            }}
        </ Route>
    )
}

const Menu = () => {
    return (
        <section className='header'>
            <div className='header__container m-container'>
                <div className='header__right-block'>
                    <ul>
                        <MenuLink
                            label={
                                <div>
                                    <label htmlFor='ocntrol-relay' >Điều Khiển Relay</label>
                                </div>
                            }
                            to='/'
                            activeOnlyWhenExact
                        />
                        <MenuLink
                            label={
                                <div>
                                    <label htmlFor='gps' >Theo Dõi Thiết Bị</label>
                                </div>
                            }
                            to='/GPS'
                            activeOnlyWhenExact
                        />
                        <MenuLink
                            label={
                                <div>
                                    <label htmlFor='dashboard' >Bảng Điều Khiển</label>
                                </div>
                            }
                            to='/dashboard'
                            activeOnlyWhenExact
                        />
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Menu;
