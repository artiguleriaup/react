export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },{
        field:'user', headerName:"User" , width:230 , renderCell: (params)=>{
            return(
                <>
                    <div className="cellWithImg">
                        <img src={params.row.img} alt="avatar" className="cellImg" />
                        {params.row.username}
                    </div>
                </>
            )
        }

    },{
        field: 'email', headerName: 'Email', width: 230
    },
    {
        field: 'age', headerName: 'Age', width: 100
    },
    {
        field: 'status', headerName: 'Status', width: 160,
        renderCell: (params)=>{
            return(
                <>
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
                </>
            )
        }

    }

]

//temporary data
export const userRows = [
    {
        id: 1,
        username: "Snowhite",
        img: 'http://hindipro.com/wp-content/uploads/2021/05/girls-dp.jpg',
        status: 'active',
        email:"1snow@gmail.com",
        age: 35
    },
    {
        id: 2,
        username: "Snow",
        img: 'https://308286-943399-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2022/03/best-whatsapp-dp-for-boys-attitude.png',
        status: 'passive',
        email:"2snow@gmail.com",
        age: 30
    },
    {
        id: 3,
        username: "Jamie Lannister",
        img: 'https://www.unigreet.com/wp-content/uploads/2020/12/whatsapp-dp-sad-boy.jpg',
        status: 'active',
        email:"3snow@gmail.com",
        age: 32
    },
    {
        id: 4,
        username: "Cliffered",
        img: 'https://loveshayariimages.in/wp-content/uploads/2021/10/Stylish-Men-Whatsapp-Dp-Images-photo-wallpaper.jpg',
        status: 'pending',
        email:"4snow@gmail.com",
        age: 35
    },
    {
        id: 5,
        username: "Jeniffer",
        img: 'https://hindify.org/wp-content/uploads/2022/03/girls-dp61.jpg',
        status: 'active',
        email:"5snow@gmail.com",
        age: 33
    },
    {
        id: 6,
        username: "Riff",
        img: 'https://i.pinimg.com/736x/55/d9/07/55d9074dea926bd0b92936e6ae1f4dbf.jpg',
        status: 'pending',
        email:"6snow@gmail.com",
        age: 36
    },
    {
        id: 7,
        username: "Sazz",
        img: 'https://hindimarathisms.com/wp-content/uploads/2022/02/Whatsapp-Dp-for-Girls.jpg',
        status: 'active',
        email:"7snow@gmail.com",
        age: 37
    },
    {
        id: 8,
        username: "Wrazel",
        img: 'https://www.whatsappimages.in/wp-content/uploads/2021/02/Royal-Boy-Whatsapp-Dp-Images-photo-hd.gif',
        status: 'passive',
        email:"8snow@gmail.com",
        age: 38
    },
    {
        id: 9,
        username: "Ninoa",
        img: 'https://loveshayariimages.in/wp-content/uploads/2021/10/Stylish-Men-Whatsapp-Dp-Images.jpg',
        status: 'active',
        email:"9snow@gmail.com",
        age: 32
    },
    {
        id: 10,
        username: "Sarrion",
        img: 'https://cdn.sharechat.com/cutegirlsdp_31083196_1628668054982_sc_webp_cmprsd_40.webp',
        status: 'active',
        email:"10snow@gmail.com",
        age: 31
    },
]