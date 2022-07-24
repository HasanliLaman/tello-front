import React from "react";
import eye from "../../../assets/images/icon-eye.svg";

const LogInForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="email">E-mail</label>
        <input type="email" placeholder="nümunə@gmail.com" id="email" />
        <p>Wrong email address</p>
      </div>
      <div className="form-group">
        <label htmlFor="password">Şifrə</label>
        <div className="form-password">
          <input
            type="password"
            placeholder="Şifrənizi daxil edin"
            id="password"
          />
          <img src={eye} alt="password" />
        </div>
        <p>Wrong email address</p>
      </div>
      <p>Şifrəni unutmusunuz?</p>
      <button>Daxil ol</button>
    </form>
  );
};

export default LogInForm;
