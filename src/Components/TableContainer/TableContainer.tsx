import { useMediaQuery } from "react-responsive";
import TableMobile from "../MobileComponents/TableMobile/TableMobile";
import Table from "../Table/Table";

type Props = {
    headerRows: any[];
    tableData: any[];
    handleClick: any;
};

function TableContainer({ headerRows, tableData, handleClick }: Props) {

    const isMobile = useMediaQuery({
        query: '(max-width: 650px)',
    });

    return (
        <div>
            {isMobile ? (
                <TableMobile
                    headerRows={headerRows}
                    tableData={tableData}
                    handleClick={handleClick}
                />
            ) : (
                <Table
                    headerRows={headerRows}
                    tableData={tableData}
                    handleClick={handleClick}
                />
            )}
        </div>
    )
}

export default TableContainer;