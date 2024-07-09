import {colors, createTheme} from "@mui/material";
import {faIR as dataGridFa} from "@mui/x-data-grid/locales/faIR";
import {faIR as pickerFa} from "@mui/x-date-pickers/locales";
import {faIR as coreFa} from '@mui/material/locale';

export const haftTheme = createTheme({
    direction: 'rtl',
    palette: {
        mode: 'light',
        background: {
            paper: colors.common.white
        }
        /*primary: {
            main: 'rgba(138,138,138,0.78)',
            light: orange[500],
            dark: red,
        },
        text: {
            primary: '#ffffff',
            secondary: grey[500]
        },
        secondary: {
            main: orange[500]
        },*/
    },

    typography: {
        fontSize: 13,
        fontFamily: [
            'Dubai'
        ]
    }
}, pickerFa, dataGridFa);
