import { useContext } from "react";

import { AdminContext } from "../../index.jsx";
import { Button } from "../index.js";

import "./sign-in.css";

export default function SignIn() {
  const { config } = useContext(AdminContext);
  const onClickSignIn = async () => {
    window.open(`${config.URL}/api/auth/login/google`, "_self");
  };

  return (
    <>
      <Button
        type="sign-in"
        onClick={onClickSignIn}
        className="sign-in sign-in__text"
        value="&nbsp;Sign in with Google"
        width="24px"
        height="24px"
      />
      <span />
    </>
  );
}
