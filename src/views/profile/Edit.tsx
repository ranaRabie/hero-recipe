import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import EditForm from "../../components/profile/EditForm";

const EditProfile: React.FC = () => {
  const dispatch = useDispatch();
  const submitEdit = async (
    token: string,
    username: string,
    avatar: string | null
  ) => {
    const res = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBqfNpn7RO5qaghsKx6Bt9UExlGGHpPZXI",
      {
        idToken: token,
        displayName: username,
        photoUrl: avatar,
        returnSecureToken: true,
      }
    );

    localStorage.setItem(
      "user",
      JSON.stringify({ idToken: token, ...res.data })
    );

    dispatch(authActions.editUser({ idToken: token, ...res.data }));
  };
  return <EditForm onSubmitEditProfile={submitEdit} />;
};

export default EditProfile;
