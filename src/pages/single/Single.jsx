import React from 'react'
import './single.scss'
import SideBar from '../../components/sidebar/SideBar'
import Navbar from '../../components/navbar/NavBar'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'

const Single = () => {
    return (
        <div className='single'>
            <SideBar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://1.bp.blogspot.com/-BtaHGNsKgTs/YUG87Rpl0eI/AAAAAAAAD1M/PQk3kFVMehQvdlM3eJQpFjRzETXgaUFNwCLcBGAsYHQ/s1155/hidden-face-dp-for-girls_1.jpg" alt="" className="itemImg" />

                            <div className="details">
                                <h1 className="itemTitle">Jane doe</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">janedoe@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+1 345 67 89</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">Nerchowk</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="Users Spending (Last 6 Months) " />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <List />
                </div>
            </div>

        </div>
    )
}

export default Single
