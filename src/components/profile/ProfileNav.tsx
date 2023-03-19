import { NavLink } from "react-router-dom";
import styles from "./Profile.module.scss";
import { getUserData, useCheckForUserToken } from "../../hooks/auth";

const ProfileNav: React.FC = () => {
  const isUserLoggedIn = useCheckForUserToken();
  const userData = getUserData();
  const userProfileImage = userData.photoUrl
    ? userData.photoUrl
    : userData.profilePicture
    ? userData.profilePicture
    : `/avatar/m1.webp`;

  return (
    <div className={styles["profile__nav"]}>
      {isUserLoggedIn && (
        <>
          <div className={styles["profile__user-img"]}>
            <img src={userProfileImage} />
          </div>
          <h3 className="text-center">{userData.displayName}</h3>
          <nav>
            <ul>
              <li>
                <NavLink to="/profile" end>
                  My Recipes
                </NavLink>
              </li>
              <li>
                <NavLink to="edit" end>
                  Edit Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/" end>
                  Edit Password
                </NavLink>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};

export default ProfileNav;
