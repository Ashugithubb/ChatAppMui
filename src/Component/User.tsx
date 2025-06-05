import { Avatar, Stack, Typography } from "@mui/material"
import image from '../assets/images.jpeg';
export const User = () => {
    return (
        <>
        <Stack direction={'row'} sx={{backgroundColor:"#FDDFD633"}}>
            <Avatar src={image} sx={{ mb: 2, width: 56, height: 56 }} />
            <Stack direction={'column'}>
            <Typography variant="h6" component="h4" sx={{ marginLeft: '12px' }}>
               Ayush
            </Typography>
            <Typography sx={{ marginLeft: '12px' }}>
            How are you?
            </Typography>
            </Stack>
</Stack>
        </>
    )

}