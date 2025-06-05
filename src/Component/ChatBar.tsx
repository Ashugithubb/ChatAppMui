import AddIcon from '@mui/icons-material/Add';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { Stack, TextField } from '@mui/material';
export const ChatBar = () => {
    return (
        <>
        <Stack direction={'row'} spacing={3}>
            <AddIcon />
            <MicIcon />

            <TextField
                label="search"
                variant="outlined"
                size="small"
                sx={{
                    marginTop: 2,
                    marginBottom: 2,
                    width: 290,
                    borderRadius: '100px',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '100px',
                    }
                }}
            />
            <EmojiEmotionsIcon/>
            <SendIcon/>
                </Stack>
        </>
    )
}