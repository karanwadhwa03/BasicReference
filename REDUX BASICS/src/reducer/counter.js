const counter=(state=0,action)=>{
    if(action.type==='INC')
    return state+1;
    return state;
}

export default counter