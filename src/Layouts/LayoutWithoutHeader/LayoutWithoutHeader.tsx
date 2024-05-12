import { Outlet } from 'react-router-dom'
import ModalContainer from 'src/Components/ModalContainer/ModalContainer'

function LayoutWithoutHeader() {
    return (
        <div>
            <Outlet />
            <ModalContainer />
        </div>
    )
}

export default LayoutWithoutHeader