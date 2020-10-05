import React from "react";
import style from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";
import { usersAPI } from "../../api/api";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChange,users, ...props}) => {

  // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  // let pages = [];
  // for (let i = 1; i <= pagesCount; i++) {
  //   pages.push(i);
  // }

  return (
    <div>
      <Paginator currentPage={currentPage} onPageChange={onPageChange}
                 totalUsersCount={totalUsersCount} pageSize={pageSize}/>
      {/* <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && style.selectedPage}
              onClick={(e) => props.onPageChange(p)}
            >
              {p}
            </span>
          );
        })}
      </div> */}
      <div>
      {users.map((u) => <User 
      user={u} 
      key={u.id}
      followingInProgress={props.followingInProgress}
      unfollow={props.unfollow}
      follow={props.follow} />
      
      // (
      //   <div key={u.id}>
      //     <span>
      //       <div>
      //         <NavLink to={'/profile/'+u.id}>
      //         <img
      //           src={u.photos.small != null ? u.photos.small : userPhoto}
      //           className={style.userPhoto}
      //         />
      //         </NavLink>
      //       </div>
      //       <div>
      //         {u.followed 

      //         ? <button disabled={props.followingInProgress
      //           .some(id=>id===u.id)}
      //           onClick={() => {props.unfollow(u.id)}}>
      //           Unfollow</button>

      //         : <button disabled={props.followingInProgress
      //           .some(id=>id===u.id)}
      //           onClick={() => {props.follow(u.id)}}>
      //             Follow</button>
      //         }
      //       </div>
      //     </span>
      //     <span>
      //       <span>
      //         <div>{u.name}</div>
      //         <div>{u.status}</div>
      //       </span>
      //       <span>
      //         <div>{"u.location.country"}</div>
      //         <div>{"u.location.city"}</div>
      //       </span>
      //     </span>
      //   </div>
      // )
      )}
      </div>
    </div>
  );
};

export default Users;
