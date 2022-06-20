import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import Widget from '../../components/widgets/Widget'
import './home.scss'
const Home = () => {
    return (
        <div className='home'>
            <SideBar />
            <div className="homeContainer">
                <NavBar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
            </div>
        </div>
    )
}

export default Home
