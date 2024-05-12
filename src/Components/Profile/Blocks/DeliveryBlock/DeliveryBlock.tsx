import { useEffect } from 'react';
import styles from './deliveryBlock.module.scss';
import { useAppDispatch } from '@src/redux/store';
import { setCurrentClickedData } from '@src/redux/reducers/personalProfileReducer/personalProfileReducer';
import { useSelector } from 'react-redux';
import { profileCurrentClickedDataInTableSelector } from '@src/redux/reducers/personalProfileReducer/personalProfileSelector';
import DefaultButton from '@src/Components/DefaultButton/DefaultButton';
import ViewDeliveryForm from './ViewDeliveryForm/ViewDeliveryForm';
import TableContainer from '@src/Components/TableContainer/TableContainer';

function DeliveryBlock() {

    const headerRows = [
        { name: 'Светлана Скобелева', region: 'Беларусь, Минск', adress: 'ул. Сердича 7, кв 87', phone: '+ 375 (44) 760 15 02' },
        { name: 'Светлана Скобелева', region: 'Беларусь, Минск', adress: 'ул. Сердича 7, кв 87', phone: '+ 375 (44) 760 15 02' },
        { name: 'Светлана Скобелева', region: 'Беларусь, Минск', adress: 'ул. Сердича 7, кв 87', phone: '+ 375 (44) 760 15 02' },
        { name: 'Светлана Скобелева', region: 'Беларусь, Минск', adress: 'ул. Сердича 7, кв 87', phone: '+ 375 (44) 760 15 02' },
    ];

    const purchasesData = [
        {
            id: 0,
            field: "name",
            headerName: "Имя",
        },
        {
            id: 1,
            field: "region",
            headerName: 'Регион',
        },
        {
            id: 2,
            field: "adress",
            headerName: 'Адрес',
        },
        {
            id: 3,
            field: "phone",
            headerName: 'Телефон',
/*             valueGetter: (params: any) => {
                if (params?.answer === null) {
                return 'Админ не ответил!';
                } else {
                return params?.answer;
                }
            }, */
        },
    ];

    const currentTableDataClicked = useSelector(profileCurrentClickedDataInTableSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        return () => {
            dispatch(setCurrentClickedData({ data: null }));
        }
    }, [])

    return (
        <div className={styles.deliveryBlock}>
            <p className={styles.deliveryBlock__title}>Адрес доставки</p>
            {currentTableDataClicked ? (
                <ViewDeliveryForm />
            ) : (
                <>
                    <TableContainer
                        headerRows={headerRows}
                        tableData={purchasesData}
                        handleClick={(data: any) => dispatch(setCurrentClickedData({ data }))}
                    />
                    <DefaultButton
                        type='primary'
                        text='Новый адрес'
                        onClick={() => dispatch(setCurrentClickedData({ data: {} }))}
                        className={styles.deliveryBlock__btn}
                    />
                </>
            )}
        </div>
    )
}

export default DeliveryBlock;