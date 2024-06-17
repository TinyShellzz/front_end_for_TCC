import axios from "axios";
import {
  setEmail,
  setLogin,
  setPermission,
  setPhone,
} from "../store/slice/LoginSlice";

const loginWithSessionToken = (dispatch: any) => {
  axios({
    method: "get",
    url: "http://localhost/backend/get_user",
  })
    .then((res) => res.data)
    .then((user) => {
      if (user && user.errorMessage != undefined) {
        console.log(user.errorMessage);
      } else {
        dispatch(setLogin());
        dispatch(setPermission(user.permission));
        if (user.email != undefined) dispatch(setEmail(user.email));
        if (user.phone != undefined) dispatch(setPhone(user.phone));
      }

      return user;
    });
};

export default loginWithSessionToken;
