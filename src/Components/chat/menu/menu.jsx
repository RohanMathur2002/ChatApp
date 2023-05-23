import React  from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import Search from './Search';

const menu = () => {

    return (
        <Box>
            <Header/>
            <Search/>
        </Box>
        )
}

export default menu;