import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import WarehouseList from "../pages/warehouse/WarehouseList.jsx";
import AddWareHouse from "../pages/warehouse/AddWareHouse.jsx";
import BarcodeScan from "../pages/warehouse/barcode/BarcodeScan.jsx";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <h1>Not Found</h1>,
        children: [
            {
                path: '/warehouses',
                element: <WarehouseList/>
            },
            {
                path: '/warehouses/new',
                element: <AddWareHouse/>
            },
            {
                path: '/warehouses/barcode_scan',
                element: <BarcodeScan/>
            }
        ]
    }
]);