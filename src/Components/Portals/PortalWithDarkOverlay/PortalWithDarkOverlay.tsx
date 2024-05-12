import { Portal } from "../Portal/Portal";
import style from "./Popup.module.scss";

type Props = {
    children: any;
    onClose: Function;
    isOpened: boolean;
};

export const PopupWithDarkOverlay = ({ children, onClose, isOpened }: Props) => {
    if (!isOpened) return null;
    return (
        <Portal>
            <div className={style.container} role="dialog">
                <div className={style.overlay} role="button" onClick={() => onClose()} />
                <div className={style.content}>{children}</div>
            </div>
        </Portal>
    );
};
