import {Badge, IconButton, ListItem, ListItemText, Tooltip} from "@mui/material";
import FunctionsIcon from '@mui/icons-material/Functions';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from "prop-types";

const BarcodeItem = ({count = 0, barcode, productName}) => {

    return (
        <ListItem
            sx={{border: 1, mt: 1, borderColor: '#DDDDDD', background: 'rgba(204,204,204,0.22)'}}
            secondaryAction={
                // <Avatar sx={{bgcolor: blue[500], textAlign: 'left'}}>10</Avatar>
                <>
                    <Badge
                        badgeContent={count}
                        color="primary"
                        max={1000}>
                        <FunctionsIcon/>
                    </Badge>
                </>
            }>
            <ListItemText primary={barcode} secondary={productName}/>
            <Tooltip title={'ویرایش'}>
                <IconButton>
                    <EditIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title={'حذف'}>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </Tooltip>
        </ListItem>

    );
}
BarcodeItem.propTypes = {
    count: PropTypes.number.isRequired,
    barcode: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired
}

export default BarcodeItem;