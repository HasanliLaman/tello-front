import React, { useEffect } from "react";
import JoinWithGoogle from "../../components/Join/JoinWithGoogle";
import LogInForm from "../../components/Join/LogInForm";

const LogIn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Tello | Daxil ol";
  }, []);

  return (
    <section>
      <h1>Daxil ol</h1>
      <JoinWithGoogle />
      <LogInForm />
    </section>
  );
};

export default LogIn;
