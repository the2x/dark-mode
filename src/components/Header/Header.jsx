import React from 'react'
import Logo from './Logo'
import Menu from '../Menu/Menu';
import Button from '../Button/Button';

const Header = () => {
    return (
        <div className="l-header">
            <Logo/>
            <Menu/>
            <Button/>
        </div>
    )
}

export default Header
