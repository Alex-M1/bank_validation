import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import { connect } from 'react-redux';
import { setCardNumber } from '../redux/cardData';
import { getCardData } from '../redux/thunks';
import styles from '../css/CardNumber.module.css'


function CardNumber(props) {
    const [isValid, setValid] = useState(null)
    let screen = window.screen.width,
        svgSize = 60
    if (screen <= 576) svgSize = 40
    const isLuhnValid = function luhn(array) {
        return (number) => {
            let len = number ? number.length : 0,
                bit = 1,
                sum = 0;
            while (len--) {
                sum += !(bit ^= 1) ? parseInt(number[len], 10) : array[number[len]];
            }
            return sum % 10 === 0 && sum > 0;
        };
    }([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]);

    const iban = (e) => {
        let target = e.target, position = target.selectionEnd, length = target.value.length;
        target.value = target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
        target.selectionEnd = position += ((target.value.charAt(position - 1) === ' ' && target.value.charAt(length - 1) === ' ' && length !== target.value.length) ? 1 : 0);
    }

    const getInput = (e) => {
        let inputValue = e.target.value.replace(/\s+/g, '')
        if (inputValue.length > 15) setValid(isLuhnValid(inputValue) ?
            < CheckIcon style={{ fill: 'green', fontSize: svgSize }} className={styles.validIcon} />
            : <CloseIcon style={{ fill: 'red', fontSize: svgSize }} className={styles.validIcon} />)
        else setValid(null)
        if (inputValue.length === 7) props.getCardData(inputValue)
        else if (inputValue.length === 16) props.getCardData(inputValue.slice(0, 6))
        props.setCardNumber(isLuhnValid(inputValue))
    }


    return (
        <div className={styles.input_wrapper}>
            <input
                required
                type="text"
                onInput={iban}
                onChange={getInput}
                maxLength='19'
                placeholder='XXXX-XXXX-XXXX-XXXX'
                className={styles.card_number}
            />
            {isValid}
        </div>
    )
}

const mapStateToProps = (state) => ({
    cardData: state.cardData.cardData
})
export default connect(mapStateToProps, { getCardData, setCardNumber })(CardNumber)


