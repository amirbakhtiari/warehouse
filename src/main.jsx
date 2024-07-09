import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {ThemeProvider} from "@mui/material";

import './index.css'
import Rtl from "./utils/ui/rtl/rtl-config/Rtl.jsx";
import {haftTheme} from "./utils/ui/rtl/rtl-config/theme.js";
import {routes} from "./routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Rtl>
            <ThemeProvider theme={haftTheme}>
                <RouterProvider router={routes}/>
            </ThemeProvider>
        </Rtl>
    </React.StrictMode>,
)
