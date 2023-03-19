import { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import { getUserData } from "../../hooks/auth";

const EditForm: React.FC<{
  onSubmitEditProfile: (
    token: string,
    username: string,
    avatar: string | null
  ) => void;
}> = ({ onSubmitEditProfile }) => {
  const userData = getUserData();
  const [username, setUsername] = useState<string>(userData.displayName);
  const [avatar, setAvatar] = useState<string>(
    userData.profilePicture || userData.photoUrl
  );

  useEffect(() => {
    setUsername(userData.displayName);
    setAvatar(userData.profilePicture || userData.photoUrl);
  }, []);

  function onAvatarChangeHandle(e: any) {
    setAvatar(e.target.value);
  }

  function onUsernameChangeHandle(e: any) {
    setUsername(e.target.value);
  }

  function editProfileHandle(e: any) {
    e.preventDefault();

    onSubmitEditProfile(userData.idToken, username, avatar);
  }
  return (
    <form onSubmit={editProfileHandle}>
      <div className="mb-4">
        <label className="mb-1">Choose your avatar</label>
        <div className={styles["avatars"]}>
          <label className={avatar.includes("f1") ? styles["active"] : ""}>
            <input
              type="radio"
              name="avatar"
              value="/avatar/f1.webp"
              onChange={onAvatarChangeHandle}
            />
            <img src="/avatar/f1.webp" />
          </label>
          <label className={avatar.includes("m1") ? styles["active"] : ""}>
            <input
              type="radio"
              name="avatar"
              value="/avatar/m1.webp"
              onChange={onAvatarChangeHandle}
            />
            <img src="/avatar/m1.webp" />
          </label>
          <label className={avatar.includes("f2") ? styles["active"] : ""}>
            <input
              type="radio"
              name="avatar"
              value="/avatar/f2.png"
              onChange={onAvatarChangeHandle}
            />
            <img src="/avatar/f2.png" />
          </label>
          <label className={avatar.includes("m2") ? styles["active"] : ""}>
            <input
              type="radio"
              name="avatar"
              value="/avatar/m2.png"
              onChange={onAvatarChangeHandle}
            />
            <img src="/avatar/m2.png" />
          </label>
          <label className={avatar.includes("f3") ? styles["active"] : ""}>
            <input
              type="radio"
              name="avatar"
              value="/avatar/f3.png"
              onChange={onAvatarChangeHandle}
            />
            <img src="/avatar/f3.png" />
          </label>
          <label className={avatar.includes("m3") ? styles["active"] : ""}>
            <input
              type="radio"
              name="avatar"
              value="/avatar/m3.png"
              onChange={onAvatarChangeHandle}
            />
            <img src="/avatar/m3.png" />
          </label>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <label className="mb-1">User Name</label>
          <input
            id="name"
            type="text"
            className="form-control"
            onChange={onUsernameChangeHandle}
            value={username}
            required
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        submit
      </button>
    </form>
  );
};

export default EditForm;
