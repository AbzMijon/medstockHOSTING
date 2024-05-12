import styles from './table.module.scss';

type Props = {
    headerRows: any[];
    handleClick: any;
    tableData: any[];
};

function Table({ headerRows, handleClick, tableData }: Props) {

    const gridColumnCount = tableData?.length;

    return (
        <div className={styles.table}>
            <div className={styles.table__head} style={{ gridTemplateColumns: `repeat(${gridColumnCount}, 1fr)` }}>
                {tableData &&
                tableData?.map((column: any) => (
                    <div
                        key={column.field}
                        className={styles.table__head_item}
                        >
                        {column.headerName}
                    </div>
                ))}
            </div>
            <div className={styles.table__body}>
                {headerRows && headerRows?.map((cell: any) => (
                    <div className={styles.table__body_item}>
                        {cell.title}
                    </div>
                ))}
                <div className={styles.table__body}>
                    {headerRows && headerRows?.length ?
                        headerRows?.map((item: any) => (
                            <div
                                key={item?.id}
                                className={styles.table__row}
                                onClick={() => handleClick(item)}
                                style={{ gridTemplateColumns: `repeat(${gridColumnCount}, 1fr)` }}
                            >
                            {tableData?.map((column: any, columnIndex: number) => {
                                return (
                                    <div className={styles.table__row_wrap_item}>
                                        <div key={columnIndex} className={styles.table__row_item}>
                                            {column?.valueGetter
                                            ? column.valueGetter(item)
                                            : column?.cellRenderer
                                            ? <column.cellRenderer data={item} />
                                            : item[column?.field]}
                                        </div>
                                    </div>
                                );
                            })}
                            </div>
                    )) : null}
                </div>
            </div>
        </div>
    )
}

export default Table;