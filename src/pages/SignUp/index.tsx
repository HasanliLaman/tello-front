import React, { useEffect } from "react";
import JoinWithGoogle from "../../components/Join/JoinWithGoogle";
import SignUpForm from "../../components/Join/SignUpForm";

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Tello | Qeydiyyat";
  }, []);

  return (
    <section>
      <h1>Qeydiyyat</h1>
      <JoinWithGoogle />
      <SignUpForm />
    </section>
  );
};

export default SignUp;
