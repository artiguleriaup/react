import React from 'react';
import './list.scss';
import SideBar from '../../components/sidebar/SideBar';
import Navbar from '../../components/navbar/NavBar';
import Datatable from '../../components/datatable/Datatable';

const List = () => {
    return (
        <div className='list'>
            <SideBar />
            <div className="listContainer">
                <Navbar />
                <Datatable />
            </div>
        </div>
    )
}

export default List
