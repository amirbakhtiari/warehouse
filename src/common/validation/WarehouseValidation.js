import * as Yup from 'yup';

export const warehouseValidation = Yup.object().shape({
    date: Yup.date().required('لطفا تاریخ انبارگردانی را مشخص کنید.'),
    time: Yup.date().required('لطفا ساعت شروع انبارگردانی را مشخص کنید.'),
    shop: Yup.object().required('لطفا فروشگاه را انتخاب کنید.'),
    manager_warehousing: Yup.object().required('لطفا مسئول انبارگردانی را مشخص کنید.'),
    manager_warehousing_counting: Yup.object().required('لطفا مسئول شمارش انبارگردانی را مشخص کنید.'),
    shop_manager: Yup.object().required('لطفا نماینده/مدیر فروشگاه را مشخص کنید.'),
    counting_group: Yup.number().required('لطفا تعداد گروه را وارد نمایید.'),
});