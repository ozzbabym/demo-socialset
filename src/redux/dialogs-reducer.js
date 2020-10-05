let initialState = {
  dialogsData: [
    { id: 1, name: "Ivan" },
    { id: 2, name: "Max" },
    { id: 3, name: "Petr" },
    { id: 4, name: "Alex" },
    { id: 5, name: "Dima" },
    { id: 6, name: "Sveta" },
  ],
  MessagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your deal?" },
    { id: 3, message: "i`m fine" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
    { id: 6, message: "Yo" },
  ],
  
};


let ADD_MESSAGE = "ADD-MESSAGE";

const dialogsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    
    case ADD_MESSAGE: 
    
      let body = action.newMessageText;
      return {
        ...state,
        
        MessagesData: [...state.MessagesData, { id: 7, message: body }],
      }

      
    
    default:
      return state;
  }
};
export const addMessageActionCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText });


export default dialogsReducer;
