import React from "react";
import { Search as SearchIcon } from "@mui/icons-material";
import { Box } from "@mui/material";
import { InputBase } from "@mui/material";
import { styled } from "@mui/material";

const Component = styled(Box)`
    bakground: #fff;
    height: 45px;
    border-bottom: 1px solid #F2F2F2;
    display: flex; 
    align-items: center;`;

const Wrapper = styled(Box)`
    background-color:#f0f2f5;
    position: relative;
    margin : 0 13px;
    width: 100%;
    border-radius: 10px;
    `;
const Icon = styled(Box)`
    position: absolute;
    height: 100px;
    padding : 6px 10px;
    color: #919191;`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 16px;
    padding-left: 65px;
    height: 15px;
    font-size : 14px;
    `;
const Search = () => {

    return (
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon />


                </Icon>
                <InputField
                    placeholder="Search or start a new chat" />
            </Wrapper>
        </Component>
    )
}

export default Search;