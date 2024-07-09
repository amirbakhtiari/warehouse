import {useOutletContext} from "react-router-dom";
import {useEffect} from "react";
import {Autocomplete, Box, Button, TextField} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {AdapterMomentJalaali} from "@mui/x-date-pickers/AdapterMomentJalaali";
import {DatePicker, LocalizationProvider, TimePicker} from "@mui/x-date-pickers";
import SaveIcon from '@mui/icons-material/Save';
import {warehouseValidation} from "../../common/validation/WarehouseValidation.js";


const AddWareHouse = () => {
    const [setTitle, setBackButton] = useOutletContext();
    const {handleSubmit, reset, control} = useForm({
        resolver: yupResolver(warehouseValidation)
    });

    const onSubmit = (data) => {
        console.log(data);
    }
    const onInvalid = (error) => {
        console.log(error);
    }
    useEffect(() => {
        setTitle('انبارگردانی - جدید');
        setBackButton(true)
    }, []);
    return (
        <Box
            sx={{
                display: 'flex',
                mt: 10,
                ml: 1,
                mr: 1,
                flexDirection: 'column'
            }}
            component='form'
            onSubmit={handleSubmit(onSubmit, onInvalid)}>

            <Controller render={({
                                     field: {onChange, value},
                                     fieldState: {error},
                                     formState
                                 }) => (
                <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
                    <DatePicker
                        views={["year", "month", "day"]}
                        format="jYYYY/jMM/jDD"
                        label="تاریخ انبارگردانی"
                        name='date'
                        onChange={onChange}
                        slotProps={{
                            textField: {
                                error: !!error,
                                helperText: `${error ? error?.message : ''}`
                            },
                            field: {clearable: true}
                        }}
                    />
                </LocalizationProvider>
            )}
                        name='date'
                        control={control}
            />

            <Controller render={({
                                     field: {onChange, value},
                                     fieldState: {error},
                                     formState
                                 }) => (
                <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
                    <TimePicker
                        sx={{mt: 1}}
                        format='HH:mm'
                        label="ساعت شروع انبارگردانی"
                        name='warehousing-time'
                        onChange={onChange}
                        ampm={false}
                        disablePast
                        slotProps={{
                            textField: {
                                error: !!error,
                                helperText: `${error ? error?.message : ''}`
                            },
                            field: {clearable: true}
                        }}
                    />
                </LocalizationProvider>
            )}
                        name='time'
                        control={control}
            />

            <Controller render={({
                                     field: {onChange, value},
                                     fieldState: {error},
                                     formState
                                 }) => (
                <Autocomplete
                    sx={{mt: 1}}
                    renderInput={params => <TextField
                        {...params}
                        error={!!error}
                        helperText={error ? error.message : null}
                        label='فروشگاه'/>}
                    options={[]}
                    value={value ?? ''}
                    onChange={onChange}
                />

            )}
                        name='shop'
                        control={control}
            />
            <Controller render={({
                                     field: {onChange, value},
                                     fieldState: {error},
                                     formState
                                 }) => (
                <Autocomplete
                    sx={{mt: 1}}
                    renderInput={params => <TextField
                        {...params}
                        error={!!error}
                        helperText={error ? error.message : null}
                        label='مسئول انبارگردانی'/>}
                    options={[]}
                    value={value ?? ''}
                    onChange={onChange}
                />

            )}
                        name='manager_warehousing'
                        control={control}
            />
            <Controller render={({
                                     field: {onChange, value},
                                     fieldState: {error},
                                     formState
                                 }) => (
                <Autocomplete
                    sx={{mt: 1}}
                    renderInput={params => <TextField
                        {...params}
                        error={!!error}
                        helperText={!!error ? error.message : null}
                        label='مسئول شمارش'/>}
                    options={[]}
                    value={value ?? ''}
                    onChange={onChange}
                />

            )}
                        name='manager_warehousing_counting'
                        control={control}
            />
            <Controller render={({
                                     field: {onChange, value},
                                     fieldState: {error},
                                     formState
                                 }) => (
                <Autocomplete
                    sx={{mt: 1}}
                    renderInput={params => <TextField
                        {...params}
                        error={!!error}
                        helperText={!!error ? error.message : null}
                        label='نماینده/مدیر فروشگاه'/>}
                    options={[]}
                    value={value ?? ''}
                    onChange={onChange}
                />

            )}
                        name='shop_manager'
                        control={control}
            />
            <Controller
                render={({
                             field: {onChange, value},
                             fieldState: {error},
                             formState
                         }) => (
                    <TextField
                        error={!!error}
                        helperText={!!error ? error?.message : null}
                        id="tf-counting-group"
                        label="تعداد گروه شمارش"
                        fullWidth
                        onChange={onChange}
                        value={value ?? 0}
                        sx={{mt: 1}}
                        variant="outlined"
                    />)}
                name='counting_group'
                control={control}
            />
            <Button
                sx={{mt: 5}}
                type='submit'
                variant='contained'
                size='large'
                startIcon={<SaveIcon/>}
            >
                ذخیره
            </Button>
        </Box>
    );
}

export default AddWareHouse;