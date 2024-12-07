import { IUser } from "../../types/users/userTypes";
import { useFetch } from "../useFetch";
import { RoutesWithoutParams } from "../useFetch/getRoutes";

const useSession = () => {
  return useFetch<Partial<IUser>>(RoutesWithoutParams.Session, {
    initialValue: {}
  });
};

export default useSession;
