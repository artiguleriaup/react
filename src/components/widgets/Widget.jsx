import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


const Widget = ({ type }) => {
    let data;

    //temporary data
    const amount = 100
    const diff = 20



    switch (type) {
        case "user":
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See all users',
                icon: <PersonOutlinedIcon className='icon' style={{ color: 'crimson', backgroundColor: 'rgba(255, 0, 0, 0.2)' }} />
            }
            break;
        case "order":
            data = {
                title: 'ORDER',
                isMoney: false,
                link: 'See all orders',
                icon: <ShoppingCartIcon className='icon' style={{ color: 'goldenrod', backgroundColor: 'rgba(218, 165, 32, 0.2)' }} />
            }
            break;
        case "earning":
            data = {
                title: 'EARNING',
                isMoney: true,
                link: 'View all earnings',
                icon: <MonetizationOnIcon className='icon' style={{ color: 'green', backgroundColor: 'rgba(0, 128 , 0, 0.2)' }} />
            }
            break;
        case "balance":
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'See all users',
                icon: <AccountBalanceWalletIcon className='icon' style={{ color: 'purple', backgroundColor: 'rgba(128, 0, 128, 0.2)' }} />
            }
            break;
        default:
            break;
    }




    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">

                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff} %</div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget
