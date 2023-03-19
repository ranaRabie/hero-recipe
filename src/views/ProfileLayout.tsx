import { Outlet } from "react-router-dom";
import styles from "../components/profile/Profile.module.scss";
import ProfileNav from "../components/profile/ProfileNav";

const ProfileLayout: React.FC = () => {
  return (
    <div className={styles["profile__wrapper"]}>
      <ProfileNav />
      <div className={styles["profile__body"]}>
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
