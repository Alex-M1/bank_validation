import React from 'react';
import { connect } from 'react-redux';
import style from '../css/CardValidation.module.css'
import { setCvv } from '../redux/cardData';

function Cvv(props) {
    const cvvValidation = e => {
        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '')
        if (e.target.value.length === 3) props.setCvv(true)
        else props.setCvv(false)
    }
    return (
        <div className={style.secondCard}>
            <div className={style.magnitLine}></div>
            <input type="password"
                className={style.svv}
                maxLength='3'
                onChange={cvvValidation}
                placeholder='CVV'
            />
        </div>
    )
}

export default connect('', { setCvv })(Cvv)