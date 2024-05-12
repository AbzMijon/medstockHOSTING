import React, { useImperativeHandle, useRef } from 'react';
import styles from './pinInput.module.scss';

type Props = {
    digits: any[];
    onChange: any;
}

function PinInput({ digits, onChange }: Props, ref) {

    const inputRefs = useRef(new Array(digits.length));

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRefs.current[0].focus();
        }
    }))

    const updateDigitsArray = (array: any[], index: number, newValue: any) => {
        const copy = [...array];
        copy[index] = newValue;
        return copy;
    }

    const handleChange = (index: number, newValue: any) => {
        const oldDigit = digits[index];
        const newDigit = newValue?.trim().replace(oldDigit, '');

        if(newDigit < '0' || newDigit > '9') {
            return;
        }

        onChange(updateDigitsArray(digits, index, newValue))

        const inputs = inputRefs.current;
        if(index < inputs.length - 1) {
            inputs[index + 1].focus();
        }   else {
            inputs[index].blur();
        }
    };

    const handleKeyDown = (index: number, keyPressed: string) => {
        if(keyPressed === 'Backspace') {
            return;
        }
        if(digits[index]) {
            onChange(updateDigitsArray(digits, index, ''));
        }   else if(index > 0) {
            inputRefs.current[index].focus();
        }
    }


    return (
        <div className={styles.pinInput}>
            {digits && digits?.map((digit: any, index: number) => (
                <input 
                    key={index} 
                    className={styles.pinInput__digit} 
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    ref={(ref) => {
                        inputRefs.current[index] = ref
                    }}
                    onKeyDown={(e) => handleKeyDown(index, e.nativeEvent.key)}
                />
            ))}
        </div>
    )
}

export default React.forwardRef(PinInput);