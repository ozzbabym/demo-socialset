import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Redirect } from "react-router-dom";

import {Field, reduxForm} from 'redux-form'
import { maxLengthCreator, required } from "../../utils/validators/validators";
import {Textarea} from '../../components/common/FormsControls/FormsControls'

const maxLength50 = maxLengthCreator(50)

const AddMessageForm =(props)=>{
  return(
    <form onSubmit={props.handleSubmit}>
      
        <Field component={Textarea} validate={[required,maxLength50]} name="newMessageElement" placeholder="Enter your message"/>
        
        <div>
          
          <button >Написать</button>
        </div>
      </form>
  )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)


const Dialogs = (props) => {
  
  let state = props.messagePage;

  let dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let messageElements = state.MessagesData.map((message) => (
    <Message message={message.message} key={message.id}/>
  ));

  let newMessageElement = state.newMessageText;

  

  let addNewMessageChange = (value) => {
  
  props.sendMessage(value.newMessageElement);
  };

  if(!props.isAuth) return <Redirect to={'/login'} />
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messageElements}</div>
      <AddMessageFormRedux onSubmit={addNewMessageChange} />
    </div>
  );
};


export default Dialogs;
