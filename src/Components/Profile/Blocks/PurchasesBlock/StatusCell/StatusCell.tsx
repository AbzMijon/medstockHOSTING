import styles from './statusCell.module.scss';

type Props = {
    data: {
        status: 'complete' | 'cancel'
    };
};

function StatusCell({ data }: Props) {
    return (
        <div className={data?.status === 'complete' ? styles.statusCellComplete : styles.statusCellCancel}>
            {data?.status === 'complete' ? (
                'Выполнен'
            ) : (
                'Отменен'
            )}
        </div>
    )
}

export default StatusCell;