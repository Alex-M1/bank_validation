import { bankAPI } from "../axios/bankAPI"
import { setCardData } from "./cardData"


export const getCardData = (cardData, bool) => (dispatch) => {
    bankAPI.getCardData(cardData)
        .then(res => {
            dispatch(setCardData(res.data))
        }).
        catch(err => {
            console.log(err)
        })


}
