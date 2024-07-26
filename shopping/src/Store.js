import { createStore } from "redux"


const intialState = {
    user:{
        username: "Bhanu",
        wallet: 25000
    }
}
//actio type
const UPADTE_WALLET = 'UPADTE_WALLET';
//Aaction creation
 export const updateWallet = (amount) => (
    {
        type: UPADTE_WALLET,
        payload : amount
    }
);

function reducer(state = intialState,action){
    switch(action.type){
        case UPADTE_WALLET:{
        return{
            user:{
                 username : state.username,
                wallet:state.user.wallet - action.payload
            }
        }
    }
    default:{
        return state;
    }
}

}
const store = createStore(reducer);
export default store;