import React,{useEffect, useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {

  // let stateWithSetState=useState(true)
  let [editMode,setEditMode]=useState(false)
  let [status,setStatus]=useState(props.status)

  useEffect(()=>{
    setStatus(props.status)
  },[props.status])

  const activateEditMode=()=>{
    setEditMode(true)
  }

  const deactivateEditMode=()=>{
    
    setEditMode(false)
    props.updateStatus(status)
}

const onStatusChange = (e)=>{
  setStatus(e.currentTarget.value)
  }
  



  return (
    <>
      <div>
        { !editMode &&
          <div>
            <span onDoubleClick={activateEditMode}>
              {props.status || "-----"}
            </span>
          </div>
        }
        {editMode && (
          <div>
            <input
               onBlur={deactivateEditMode}
              autoFocus={true}
              onChange={onStatusChange}
              value={status}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileStatusWithHooks;
