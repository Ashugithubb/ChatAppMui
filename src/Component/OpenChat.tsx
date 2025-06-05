import { Avatar, Box, Divider, Stack, Typography } from "@mui/material"
import image from '../assets/images.jpeg';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import CloseIcon from '@mui/icons-material/Close';
export const OpenChat = () => {
    return (
        <>
            <Box sx={{ width: "100%"}}>
                <Stack direction={"row"}>
                    <Avatar src={image} sx={{ mb: 2, width: 56, height: 56 }} />
                    <Stack direction={'column'}>
                        <Typography variant="h4" sx={{ marginLeft: '15px' }}>
                            Edison
                        </Typography>
                        <Typography sx={{ marginLeft: '15px' }}>
                            Active Now
                        </Typography>
                    </Stack>
                    <Box sx={{ display: "flex", justifyItems: "flex-end", ml: "auto", gap: "30px" }}>
                        <MinimizeIcon />
                        <CropSquareIcon />
                        <CloseIcon />
                    </Box>
                </Stack>
                <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%", gap: "30px" }}>
                    <CallIcon />
                    <VideoCallIcon />
                    <MoreVertIcon />
                </Box>
                <Divider sx={{ mt: 2, borderColor: "light-black"}} />
            </Box>
          
          
        </>
    )
}