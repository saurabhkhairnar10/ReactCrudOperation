const initialState = [
    { id: 0, name: "saurabh", email: "saurabh@gmail.com", phone: 9876543210 },
    { id: 1, name: "gauraw", email: "gauraw1@gmail.com", phone: 8976543210 },
  ];

  export const contactReducer = ((state = initialState,action)=>{
     switch(action.type){
         case "ADDCONTACT":
             state = [...state,action.payload];
             return state;
         case "UPDATECONTACT":
             const updatedState = state.map((contact)=>{return (contact.id === action.payload.id)?action.payload:contact})
             state  = updatedState;
             return state;    
         case "DELETECONTACT" : // action.payload  = id
             const deletedState = state.filter((contact)=>{return (contact.id !== action.payload)?contact:null});
              state = deletedState;
             return state;    
         default:
             return state;
     }
  })