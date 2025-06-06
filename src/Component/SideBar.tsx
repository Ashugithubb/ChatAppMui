import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import avatarImg from '../assets/images.jpeg';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import SearchIcon from '@mui/icons-material/Search';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
export default function SideBar() {
    return (
        <Box sx={{ width: '20%', height: '120vh', backgroundColor: '#FDDFD6' }}>
            <Stack spacing={8} alignItems="center" sx={{margin:'10px'}}>
                <Avatar src={avatarImg} sx={{ mb: 2, width: 56, height: 56}} />
                <HomeIcon sx={{ fontSize: 40 , color:"#982176E5"}} />
                <MessageIcon sx={{ fontSize: 40, color:"#982176E5" }} />
                <SearchIcon sx={{ fontSize: 40 , color:"#982176E5"}} />
                <EditSquareIcon sx={{ fontSize: 40 , color:"#982176E5"}} />
                <SettingsApplicationsIcon sx={{ fontSize: 40 , color:"#982176E5"}} />
            </Stack>
        </Box>
    );
}
