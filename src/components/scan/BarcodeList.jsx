import {List} from "@mui/material";
import PropTypes from "prop-types";

const BarcodeList = ({children}) => {
    return (
        <List>
            {children}
        </List>
    )
}
BarcodeList.propTypes = {
    children: PropTypes.any.isRequired
}


export default BarcodeList;