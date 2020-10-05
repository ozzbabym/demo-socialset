import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from 'redux-form'
import {maxLengthCreator, required} from "../../../utils/validators/validators"
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm=(props)=>{
  return(
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field 
          name={"newPostText"} component={Textarea} placeholder={'Post message'} 
          validate={[required ,maxLength10 ]}
          />
        </div>
        <div>
          <button>add post</button>
          
        </div>
      </form>
  )
}

let AddNewPostFormRedux = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm)




const MyPosts = React.memo ((props) => {
  //reverse перевернул все посты
  let postsElement = [...props.PostsData].reverse().map((post) => (
    <Post message={post.message} like={post.like} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = (value) => {
    props.addPost(value.newPostText);
    
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    
  }


  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
})



export default MyPosts;
