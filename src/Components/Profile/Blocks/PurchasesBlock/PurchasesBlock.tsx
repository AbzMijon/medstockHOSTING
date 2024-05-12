import Table from '@src/Components/Table/Table';
import styles from './purchasesBlock.module.scss';
import StatusCell from './StatusCell/StatusCell';
import { useSelector } from 'react-redux';
import { profileCurrentClickedDataInTableSelector } from '@src/redux/reducers/personalProfileReducer/personalProfileSelector';
import { setCurrentClickedData } from '@src/redux/reducers/personalProfileReducer/personalProfileReducer';
import { useAppDispatch } from '@src/redux/store';
import { useEffect } from 'react';
import ViewPurchase from './ViewPurchase/ViewPurchase';
import TableContainer from '@src/Components/TableContainer/TableContainer';

function PurchasesBlock() {

    const headerRows = [
        { order: '524603718', created_at: '12 января 2024', price: '4 000 руб', status: 'complete' },
        { order: '524603718', created_at: '12 января 2024', price: '4 000 руб', status: 'complete' },
        { order: '524603718', created_at: '12 января 2024', price: '4 000 руб', status: 'cancel' },
        { order: '524603718', created_at: '12 января 2024', price: '4 000 руб', status: 'cancel' },
        { order: '524603718', created_at: '12 января 2024', price: '4 000 руб', status: 'complete' },
        { order: '524603718', created_at: '12 января 2024', price: '4 000 руб', status: 'complete' },
    ];

    const purchasesData = [
        {
            id: 0,
            field: "order",
            headerName: "Номер заказа",
        },
        {
            id: 1,
            field: "created_at",
            headerName: 'Дата',
        },
        {
            id: 2,
            field: "price",
            headerName: 'Стоимость',
        },
        {
            id: 3,
            field: "status",
            headerName: 'Статус',
            cellRenderer: StatusCell
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
        <div className={styles.purchasesBlock}>
            {currentTableDataClicked ? (
                <ViewPurchase />
            ) : (
                <>
                    <p className={styles.purchasesBlock__title}>История покупок</p>
                    <TableContainer
                        headerRows={headerRows}
                        tableData={purchasesData}
                        handleClick={(data: any) => dispatch(setCurrentClickedData({ data }))}
                    />
                </>
            )}
        </div>
    )
}

export default PurchasesBlock;