import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.content}>
      <div>
        <div className={s.item}>
          <img src="https://c.wallhere.com/photos/1e/7d/1600x1200_px_action_adventure_alien_Aliens_Avatar_fantasy_fi-1635355.jpg!d" />
          {props.message}
          <div>
            <span>Like </span> {props.like}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
