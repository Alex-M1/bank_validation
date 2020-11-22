import React from 'react';
import { NavLink } from 'react-router-dom';

export default function StolenDataScreen() {

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Ваши данные успешно отправленны!</h2>
            <h3>Больше так не делайте!</h3 >
            <NavLink style={{ color: 'inherit' }} to='/'>На главную</NavLink>

        </div>
    )
}