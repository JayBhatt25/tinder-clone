import React from 'react'
import './Header.css'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <AccountBoxIcon fontSize='large' className='header__icon' />
            </IconButton>

            <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX532QJYb67UCcrtuKYW22C7Pb1Zf1kSWvWw&usqp=CAU' 
            alt='' 
            className='header__logo' />
            
            <IconButton>
                <ChatIcon fontSize='large' className='header__icon' />
            </IconButton>
            
        </div>
    )
}

export default Header
