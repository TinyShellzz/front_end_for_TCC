import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setLogout } from "../store/slice/LoginSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.login.login);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(setLogin())}>Increment</button>
        <button onClick={() => dispatch(setLogout())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
