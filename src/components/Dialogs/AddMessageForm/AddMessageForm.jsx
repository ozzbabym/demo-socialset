// import React from 'react'
// import {Field, reduxForm} from 'redux-form'
// import { maxLengthCreator, required } from "../../utils/validators/validators";
// import {Textarea} from '../../components/common/FormsControls/FormsControls'

// const maxLength50 = maxLengthCreator(50)

// const AddMessageForm =(props)=>{
//   return(
//     <form onSubmit={props.handleSubmit}>
//         <Field component={Textarea} validate={[required,maxLength50]} name="newMessageElement" placeholder="Enter your message"/>
       
//         <div>
//           <button >Написать</button>
//         </div>
//       </form>
//   )
// }

// export const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)