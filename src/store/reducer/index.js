const initial_State={
    users:[
        {name:'qamar', email:'qamar@gmail.com'}
    ]
}

export default (state=initial_State , actions)=>{

    switch (actions.type) {
        case 'setdata':
            return( {
                ...state,
                users:[...state.users , actions.data]
            })
            
            break;
    
        default:
            break;
    }

    {
        console.log(actions)
    }
    return state
}