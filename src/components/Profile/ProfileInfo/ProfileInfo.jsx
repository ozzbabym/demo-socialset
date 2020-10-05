import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile,status,updateStatus}) => {
  if (!profile){
    return <Preloader />
  }
 
  return (
    <div>
      <div className={s.photo}>
        <img src="https://fsb.zobj.net/crop.php?r=uEDtONmQiHTBf8m1XAv1MqjMMP0WjO2F1HNDq4xqlN9OATMrqJhDFvGYf80SGATpMGtEJASI0nEKZz-ceg255n9-HpXZpQdCy8XFqBK7Y2_J9JDhjNfF_YvlxGORHxSbuDffdEjFIm6HAgaP" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} />
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>
  );
};

export default ProfileInfo;
