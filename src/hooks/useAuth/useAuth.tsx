import { useDispatch } from "react-redux";
import { userData, signOut } from "../../store/userSlice";
import { session } from "../../store/sessionSlice";

import { authServices } from "../../services/auth/auth.service";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (credentials: { email: string; password: string }) => {
    const { data, status } = await authServices.auth(credentials);
    if (status === 200) {
      dispatch(userData(data.data));
      dispatch(
        session({
          valid: true,
          code: status,
          message: "Login Successfully"
        })
      );
      return true;
    } else {
      dispatch(
        session({
          valid: false,
          code: status,
          message: "Credentials Error"
        })
      );
      return false;
    }
  };

  const logout = async () => {
    await authServices.logout();
    dispatch(signOut());
    navigate("/home");
    dispatch(
      session({
        valid: false,
        code: 403,
        message: "Credentials Error"
      })
    );
  };

  return { login, logout };
};

export default useAuth;
