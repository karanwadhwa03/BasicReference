const redux = require('redux')


//reducer
const Firstreducer = (state=0,action)=>{
    return state


}

// store
const store= redux.createStore(Firstreducer);
console.log(store.getState())
//action
function ADD(){
    return{
        type:'ADD'
    }
}
function SUB(){
    return{
        type:'SUB'
    }
}
//dospatcj

store.dispatch(SUB)
store.dispatch(ADD)

