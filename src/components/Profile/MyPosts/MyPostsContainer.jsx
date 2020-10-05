import React from "react";
import {
  
  addPostActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";



const mapStateToProps = (state) => {
  
  return {
    PostsData: state.profilePage.PostsData,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
  };
};

let MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsConteiner;
