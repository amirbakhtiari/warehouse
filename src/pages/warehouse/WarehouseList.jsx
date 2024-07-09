import {useEffect} from 'react';
import {DataGrid, GridToolbarContainer} from "@mui/x-data-grid";
import {IconButton, Tooltip} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ReplayIcon from "@mui/icons-material/Replay";
import {useNavigate, useOutletContext} from "react-router-dom";

const columns = [
    {
        field: 'id', headerName: 'شناسه', width: 90, type: 'number', headerAlign: 'center', align: 'center',
    },
    {
        field: 'shop', headerName: 'فروشگاه', width: 150, type: 'string', headerAlign: 'center', align: 'center',
    },
    {
        field: 'manager_warehousing',
        headerName: 'مدیر انبارگردانی',
        width: 150,
        type: 'string',
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'manager_warehousing_counting',
        headerName: 'مسئول شمارش',
        width: 150,
        type: 'string',
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'shop_manager',
        headerName: 'مدیر/نماینده فروشگاه',
        width: 200,
        type: 'string',
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'number_of_warehousing_counting',
        headerName: 'تعداد نفرات شمارش',
        width: 150,
        type: 'string',
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'date',
        headerName: 'تاریخ',
        width: 150,
        type: 'string',
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'time',
        headerName: 'ساعت شروع',
        width: 150,
        type: 'string',
        headerAlign: 'center',
        align: 'center',
    }
];
const WarehouseList = () => {
    const navigate = useNavigate();
    const [setTitle, setBackButton] = useOutletContext();

    const handleNew = () => {
        navigate('/warehouses/new');
    }
    useEffect(() => {
        setBackButton(false);
        setTitle('فهرست انبارگردانی');
    }, []);
    return (
        <div dir='rtl' style={{height: '650px'}}>
            <DataGrid
                loading={false}
                columns={columns}
                slots={{
                    toolbar: () => (
                        <GridToolbarContainer>
                            <Tooltip title={'جدید'}>
                                <IconButton
                                    color='primary'
                                    onClick={handleNew}
                                >
                                    <AddCircleIcon/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={'بارگذاری مجدد'}>
                                <IconButton color='primary'>
                                    <ReplayIcon/>
                                </IconButton>
                            </Tooltip>
                        </GridToolbarContainer>
                    )
                }}
            />
        </div>
    );
}

export default WarehouseList;