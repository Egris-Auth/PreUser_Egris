import React from 'react';
import './Navbar.css';
import Link from 'next/link';
import InviteButton from '../InviteButton/InviteButton';

function Navbar() {
    return (
        <nav className="navbar">
            <Link className="flex justify-center items-center gap-2 logo" href="/">
                <img className='logoImg w-8' src='./EgrisIcon.png' alt='img'/>
                <p className='homeNavLink'>Egris Auth</p>
            </Link>
            <InviteButton/>
        </nav>
    );
}

export default Navbar;