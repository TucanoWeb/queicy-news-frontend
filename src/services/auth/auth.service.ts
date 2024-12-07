import { api } from "../../api";
import { IServerResponse } from "../../types/serverResponse/types";
import { IUserRequest, IUserResponse } from "../../types/users/userTypes";

const authServices = {
  auth: async (payload: IUserRequest) => {
    const { data, status } = await api.post<IServerResponse<IUserResponse>>("/api/v1/login", payload);
    return { data, status };
  },
  logout: async () => {
    await api.post("/api/v1/logout");
    return true;
  }
};

export { authServices };
