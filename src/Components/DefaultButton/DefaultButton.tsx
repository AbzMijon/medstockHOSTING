import styles from './defaultButton.module.scss';

type Props = {
    text: string;
    onClick: any;
    type: 'primary' | 'secondary' | 'tertiary';
    icon?: string;
    className?: any;
    disabled?: boolean;
}

function DefaultButton({ text, onClick, type, icon, className, disabled }: Props) {
    return (
        <button 
            className={`${
                type === 'primary' 
                ? styles.primaryButton 
                : type === 'secondary' 
                ? styles.secondaryButton 
                : styles.tertiaryButton} 
                ${className ? className : ''}
            `}
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
            disabled={disabled}
        >
            {icon ? <img src={icon} alt="" className={styles.icon} /> : null}
            {text}
        </button>
    )
}

export default DefaultButton