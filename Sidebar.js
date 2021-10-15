import React, { useEffect, useState } from 'react';
import './Sidebar.css';

import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';

import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
import db from './firebase';
import { useStateValue } from './StateProvider';


function Sidebar() {
    const [rooms, setRooms] = useState([]);
    const [{user}, dispatch] = useStateValue()

    useEffect(()=>{
        const unsubscribe = db.collection('rooms').onSnapshot( snapShot =>{
            setRooms (snapShot.docs.map(doc=>
                ({
                    id: doc.id,
                    data: doc.data()
                })
                ))

                return (() =>{
                    unsubscribe();
                })
        })

    },[])
    return (
        <div className="sidebar">
             <div className="sidebar__header">
                <Avatar  src={user?.photoURL} />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>

                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>                   
                </div>
            </div>
            
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">

                        <SearchIcon />
                        <input type="text" placeholder="Search or start a new chat" />     

                </div>          
            </div>

            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                {rooms.map(room=>(
                    <SidebarChat  key={room.id} id={room.id}
                    name={room.data.name} />
                ))}

            
            </div>
            {/* <h1>i am a sidebar</h1> */}
            
        </div>
    )
}

export default Sidebar
