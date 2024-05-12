import styles from './tableMobile.module.scss';

type Props = {
    headerRows: any[];
    tableData: any[];
    handleClick: any;
};

function TableMobile({ headerRows, handleClick, tableData }: Props) {
    return (
        <div className={styles.tableMobile}>
            {headerRows.map((row, index) => (
                <div key={index} className={styles.tableMobile__table} onClick={() => handleClick(row)}>
                {tableData.map((column) => (
                    <div key={`${index}-${column.id}`} className={styles.tableMobile__row}>
                        <div className={styles.tableMobile__cell_name}>{column.headerName}</div>
                        <div className={styles.tableMobile__cell_data}>
                            {column?.valueGetter
                                ? column.valueGetter(row)
                                : column?.cellRenderer
                                ? <column.cellRenderer data={row} />
                                : row[column?.field]
                            }
                        </div>
                    </div>
                ))}
                </div>
            ))}
        </div>
    )
}

export default TableMobile;