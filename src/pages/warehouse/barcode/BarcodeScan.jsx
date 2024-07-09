import {useEffect} from 'react';
import {useOutletContext} from "react-router-dom";
import {Controller, useForm} from "react-hook-form";
import {
    Badge,
    BottomNavigation,
    BottomNavigationAction,
    Box,
    CssBaseline,
    InputAdornment,
    Paper,
    TextField, Typography
} from "@mui/material";
import SendSharpIcon from '@mui/icons-material/SendSharp';

import BarcodeList from "../../../components/scan/BarcodeList.jsx";
import BarcodeItem from "../../../components/scan/BarcodeItem.jsx";

const BarcodeScan = () => {
    const [setTitle, setBackButton] = useOutletContext();
    const {control, handleSubmit} = useForm();

    const onSubmit = () => {

    }

    const onInvalid = () => {

    }

    const handleChangeBarcode = (e) => {
        console.log(e.target.value);
    }
    useEffect(() => {
        setTitle('اسکن محصولات');
        setBackButton(true);
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                ml: 1,
                mr: 1,
                pb: 7,
                pt: 8,
                flexDirection: 'column'
            }}
            component='form'
            onSubmit={handleSubmit(onSubmit, onInvalid)}>
            <CssBaseline/>
            <BarcodeList>
                <BarcodeItem
                    count={12}
                    productName={'پیراهن مردانه (سبز XL)'}
                    barcode={'1254178563214721'}
                />
                <BarcodeItem
                    count={12}
                    productName={'پیراهن مردانه (سبز XL)'}
                    barcode={'1254178563214721'}
                />
                <BarcodeItem
                    count={12}
                    productName={'پیراهن مردانه (سبز XL)'}
                    barcode={'1254178563214721'}
                />
                <BarcodeItem
                    count={12}
                    productName={'پیراهن مردانه (سبز XL)'}
                    barcode={'1254178563214721'}
                />
                <BarcodeItem
                    count={12}
                    productName={'پیراهن مردانه (سبز XL)'}
                    barcode={'1254178563214721'}
                />
                <BarcodeItem
                    count={12}
                    productName={'پیراهن مردانه (سبز XL)'}
                    barcode={'1254178563214721'}
                />
                <BarcodeItem
                    count={12}
                    productName={'پیراهن مردانه (سبز XL)'}
                    barcode={'1254178563214721'}
                />
                <BarcodeItem
                    count={12}
                    productName={'پیراهن مردانه (سبز XL)'}
                    barcode={'1254178563214721'}
                />
                <BarcodeItem
                    count={12}
                    productName={'پیراهن مردانه (سبز XL)'}
                    barcode={'1254178563214721'}
                />
            </BarcodeList>
            <Paper
                sx={{position: 'fixed', top: 60, left: 0, right: 0, p: 1}}
                elevation={3}>
                <Controller
                    render={({
                                 field: {onChange, value},
                                 fieldState: {error},
                                 formState
                             }) => (
                        <TextField
                            error={!!error}
                            helperText={error ? error?.message : null}
                            id="tf-barcode"
                            label="بارکد"
                            fullWidth
                            InputProps={{
                                endAdornment:
                                    <InputAdornment position="end">
                                        <Typography sx={{
                                            backgroundColor: 'rgb(255,102,0)',
                                            p: 1,
                                            height: 35,
                                            width: 35,
                                            textAlign: 'center',
                                            color: '#FFFFFF',
                                            borderRadius: 200,
                                            fontSize: 15,
                                        }}>
                                            0
                                        </Typography>
                                    </InputAdornment>,
                            }}
                            autoFocus
                            sx={{mt: 1}}
                            onChange={onChange}
                            value={value ?? ''}
                            variant="outlined"
                        />)}
                    name='barcode'
                    control={control}
                />
            </Paper>
            <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
                <BottomNavigation
                    showLabels
                >
                    <BottomNavigationAction label={'ارسال'} icon={<SendSharpIcon/>}/>
                </BottomNavigation>
            </Paper>
        </Box>
    );

}

export default BarcodeScan;