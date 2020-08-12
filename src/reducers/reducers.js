const reducers=(state,action)=>{
    const newObject=action.payload;
   switch(action.type){
       case 'CHANGE_CREDIT_VALS': 

       return {...state,
        jCreditForm: newObject
       }

       case 'ADD_CREDIT_ADDS_VALS': 
       return {...state,
        jAddValues: newObject
       }

       case 'CALC_VALS': 
   
       return {...state,
        result: newObject
       }
       default: return state;
   }
}




export default reducers;