import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    // profilePage: {
    //   PostsData: [
    //     { id: 1, message: "Hi, how are you?", like: 15 },
    //     { id: 2, message: "it's my first post", like: 20 },
    //     { id: 3, message: "Hello my friend", like: 20 },
    //     { id: 4, message: "Hi my friend", like: 20 },
    //   ],
    //   newPostText: "itkamas",
    // },
    // messagePage: {
    //   dialogsData: [
    //     { id: 1, name: "Ivan" },
    //     { id: 2, name: "Max" },
    //     { id: 3, name: "Petr" },
    //     { id: 4, name: "Alex" },
    //     { id: 5, name: "Dima" },
    //     { id: 6, name: "Sveta" },
    //   ],
    //   MessagesData: [
    //     { id: 1, message: "Hi" },
    //     { id: 2, message: "How is your deal?" },
    //     { id: 3, message: "i`m fine" },
    //     { id: 4, message: "Yo" },
    //     { id: 5, message: "Yo" },
    //     { id: 6, message: "Yo" },
    //   ],
    //   newMessageText: "first",
    // },
    sideBar: {},
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed");
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = dialogsReducer(this._state.messagePage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);

    this._callSubscriber(this._state);
  },
  
};



export default store;
window.state = store;
