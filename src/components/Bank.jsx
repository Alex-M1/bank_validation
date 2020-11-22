import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';


function Bank(props) {
    const [bank, setBank] = useState('Банк')
    useEffect(() => {
        if (props.cardData.bank === undefined || props.cardData.length === 0) setBank('Банк')

        else setBank(props.cardData.bank.name)
    }, [props.cardData])
    return (
        <h1>
            {bank}
        </h1>
    )
}


const mapStateToProps = state => ({
    cardData: state.cardData.cardData
})

export default connect(mapStateToProps)(Bank)