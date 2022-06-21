import React from 'react'
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const TableData = () => {
    const rows = [
        {
            id: 1143155,
            product: "Acer Nitro 5",
            img: "https://static.acer.com/up/Resource/Acer/Laptops/Nitro_5/Image/20200413/Acer-Nitro-5_AN515-55_modelpreview.png",
            customer: "John Smith",
            date: "1 March",
            amount: "785",
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 1143156,
            product: "Acer Nitro 5",
            img: "https://i.gadgets360cdn.com/products/large/Acer-nitro-5-intel-DB-995x800-1618226243.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: "785",
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 1143157,
            product: "Acer Nitro 6",
            img: "https://static.acer.com/up/Resource/Acer/Laptops/Nitro_5/rev-jan-2022-intel/20211216/Nitro_5_AGW_KSP07_640.jpg",
            customer: "John ",
            date: "14 March",
            amount: "785",
            method: "Online",
            status: "Approved",
        },
        {
            id: 1143158,
            product: "Acer Nit 5",
            img: "https://www.notebookcheck.net/uploads/tx_nbc2/acer_nitro_5_1_18.jpg",
            customer: "Areve Smith",
            date: "3 March",
            amount: "750",
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 1143159,
            product: "Acer R 5",
            img: "https://i.pcmag.com/imagery/reviews/07J7DaXOx346G75h1NRnz1F-16..v1569469971.jpg",
            customer: "Jess Smith",
            date: "2 March",
            amount: "700",
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 1143160,
            product: "Acer Ni 5",
            img: "https://microless.com/cdn/products/bef3e644dfbe279f30f04e18b908f938-hi.jpg",
            customer: "Jully",
            date: "5 March",
            amount: "600",
            method: "Cash on Delivery",
            status: "Pending",
        },
    ]
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell' >Tracking ID</TableCell>
                        <TableCell className='tableCell' >Product</TableCell>
                        <TableCell className='tableCell' >Customer</TableCell>
                        <TableCell className='tableCell' >Date</TableCell>
                        <TableCell className='tableCell' >Amount</TableCell>
                        <TableCell className='tableCell' >Payment Method</TableCell>
                        <TableCell className='tableCell' >Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                        >
                            <TableCell>
                                {row.id}
                            </TableCell>
                            <TableCell>
                                <div className="cellWrapper">
                                    <img src={row.img} alt="" className='image' />
                                    {row.product}
                                </div></TableCell>
                            <TableCell>{row.customer}</TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.amount}</TableCell>
                            <TableCell>{row.method}</TableCell>
                            <TableCell>
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableData
