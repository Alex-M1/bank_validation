import React from 'react';
import CardNumber from './CardNumber';
import style from '../css/CardValidation.module.css'
import Validity from './Validity';
import PaySystem from './PaySystem';
import Bank from './Bank';
import ValidationButton from './ValidationButton';
import Cvv from './Cvv';


export default function CardValidation() {
    return (
        <>
            <form className={style.wrapper}>
                <div className={style.card}>
                    <Bank />
                    <CardNumber />
                    <Validity />
                    <PaySystem />
                </div>
                <Cvv />
                <ValidationButton />
            </form>
        </>
    )
}