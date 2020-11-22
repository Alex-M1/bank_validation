import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styles from '../css/CardValidation.module.css'

function ValidationButton({ cvv, cardNumber, cardDate }) {

    const [isDisabled, setDisabled] = useState(true)
    useEffect(() => {
        if (cvv && cardNumber && cardDate) {
            setDisabled(false);
        }
        else setDisabled(true)
    }, [cvv, cardNumber, cardDate])
    return (

        <Button
            className={styles.validateButton}
            variant="outlined" href='/stolen'
            disabled={isDisabled}
            color='primary'
        >
            Отправить данные
        </Button>
    )
}

const mapStateToProps = state => ({
    cvv: state.cardData.cvv,
    cardNumber: state.cardData.cardNumber,
    cardDate: state.cardData.cardDate
})

export default connect(mapStateToProps)(ValidationButton)