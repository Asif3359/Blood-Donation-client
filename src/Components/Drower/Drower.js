'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const list1 = [
    {
        id: 1,
        link: "/",
        name: "Home",
        Icon: MenuIcon
    },
    {
        id: 2,
        link: "/login",
        name: "Login"
    },
    {
        id: 3,
        link: "/singup",
        name: 'singup'
    }
]

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {list1.map((item, index) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {
                                    index === 0 ? <HomeIcon /> : <></>
                                }
                                {
                                    index === 1 ? <LoginIcon /> : <></>
                                }
                                {
                                    index === 2 ? <LogoutIcon /> : <></>
                                }
                            </ListItemIcon>
                            <Link href={item.link}> {item.name} </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div className='text-white'>

            <div>
                {['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <button className='text-white btn btn-sm bg-black border-white hover:bg-white hover:text-black hover:border-black' onClick={toggleDrawer(anchor, true)}> <MenuIcon /></button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            <div className='text-center text-black font-bold text-2xl mt-3'>
                                <h2>Welcome</h2>
                            </div>
                            {list(anchor)}

                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}