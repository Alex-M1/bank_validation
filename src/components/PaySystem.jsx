import React from 'react';
import { connect } from 'react-redux';
import styles from '../css/CardNumber.module.css'

function PaySystem(props) {
    return (
        <>{
            props.cardData.scheme === undefined ? <div></div>
                : <img src={`img/${props.cardData.scheme}.svg`}
                    alt={props.cardData.scheme}
                    className={styles.paySystem}
                />
        }
        </>
    )
}

const mapStateToProps = state => ({
    cardData: state.cardData.cardData
})
export default connect(mapStateToProps)(PaySystem)