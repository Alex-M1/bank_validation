const SET_CARD_DATA = 'GET_CARD_DATA',
    SET_CVV = 'SET_CVV',
    SET_CARD_NUMBER = 'SET_CARD_NUMBER',
    SET_CARD_DATE = 'SET_CARD_DATE'


const initialState = {
    cardData: [],
    cvv: false,
    cardNumber: false,
    cardDate: false
}

export default function cardData(state = initialState, action) {
    switch (action.type) {

        case SET_CARD_DATA:
            return {
                ...state,
                cardData: action.cardData
            }
        case SET_CVV:
            return {
                ...state,
                cvv: action.bool
            }
        case SET_CARD_DATE:
            return {
                ...state,
                cardDate: action.bool
            }
        case SET_CARD_NUMBER:
            return {
                ...state,
                cardNumber: action.bool
            }
        default:
            return state
    }
}

export const setCardData = cardData => ({ type: SET_CARD_DATA, cardData })
export const setCvv = bool => ({ type: SET_CVV, bool })
export const setCardNumber = bool => ({ type: SET_CARD_NUMBER, bool })
export const setCardDate = bool => ({ type: SET_CARD_DATE, bool })