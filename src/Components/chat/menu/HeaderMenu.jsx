import React from "react";

import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem } from '@mui/material';
import { useState } from "react";

const HeaderMenu = () => {
    
    const [open, setOpen] = useState(null);
    
    const handleClose = () => {
        setOpen(null);
    }

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }


    return (
        <>
            <MoreVert onClick= {handleClick}/>

            <Menu
                
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1= {null}
                anchorOrigin={{
                    vetrical: 'bottom',
                    horizontal: 'center'


        
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </>
    )
}

export default HeaderMenu;