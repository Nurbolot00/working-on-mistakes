import LoginForm from "../components/LoginForm";
import classes from "./Login.Page.module.css";
import darkSouls from "../assets/images/darkSouls.jpg";
import { useDispatch, useSelector } from "react-redux";
import { asyncLogin } from "../store/auth/authActions";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { isLoading } = useSelector((state) => state.auth);

  const LoginHandler = (email, password) => {
    dispatch(asyncLogin({ email, password, navigate }));
  };

  return (
    <div className={classes.container}>
      <div className={classes.formWrapper}>
        <LoginForm onGetLoginData={LoginHandler} submitLoading={isLoading} />
      </div>
      <img
        className={classes.mainBackground}
        src={darkSouls}
        alt={"background"}
      />
    </div>
  );
};

export default LoginPage;
