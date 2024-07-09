import {useState} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {AppBar, Box, IconButton, Toolbar, Tooltip, Typography} from "@mui/material";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const appTitle = 'فهرست انبارگردانی';
const App = () => {
    const navigation = useNavigate();
    const [title, setTitle] = useState(appTitle);
    const [backButton, setBackButton] = useState(false);

    const handleBack = () => {
        navigation(backButton ? -1 : undefined);
    }

    return (
        <Box sx={{flexGrow: 1, flex: 1}}>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        {title}
                    </Typography>
                    {
                        backButton ?
                            <Tooltip title={'بازگشت'}>
                                <IconButton
                                    edge="end"
                                    color="inherit"
                                    onClick={handleBack}
                                >
                                    <ArrowBackRoundedIcon/>
                                </IconButton>
                            </Tooltip>
                            :
                            <Tooltip title={'بروزرسانی فایل'}>
                                <IconButton
                                    edge="end"
                                    color="inherit"
                                >
                                    <UploadFileIcon/>
                                </IconButton>
                            </Tooltip>
                    }

                </Toolbar>
            </AppBar>
            <Box sx={{mt: 8.5}}>
                <Outlet context={[setTitle, setBackButton]}/>
            </Box>
        </Box>
    );
}

export default App;