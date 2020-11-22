import React from 'react';
import { connect } from 'react-redux';
import styles from '../css/CardNumber.module.css'
import { setCardDate } from '../redux/cardData';


function Validity(props) {
    const validity = (e) => {
        let mounth = +e.target.value.split('/')[0]
        let year = +e.target.value.split('/')[1]
        console.log(year);
        let target = e.target
        target.value = target.value.replace(/[^\dA-Z]/g, '').replace(/(.{2})/g, '$1/').trim().slice(0, 5);
        if (e.target.value.length === 5
            && mounth <= 12
            && year >= 20
            && year <= 25) props.setCardDate(true)
        else props.setCardDate(false)
    }

    return (
        <div>
            <input type="text"
                onInput={validity}
                maxLength='5'
                className={styles.validity}
                placeholder='MM / YY'
            />
        </div>
    )
}



export default connect('', { setCardDate })(Validity)