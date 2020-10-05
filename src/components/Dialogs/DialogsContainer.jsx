import React from "react";

import {
  addMessageActionCreator,
  
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";




const mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage
    
  };
};



const mapDispatchToProps = (dispatch) => {
  return {
    
    sendMessage: (newMessageText) => {
      dispatch(addMessageActionCreator(newMessageText));
    },
  };
};



// let AuthRedirectComponent = withAuthRedirect(Dialogs)

// let DialogsCointainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect )(Dialogs )
