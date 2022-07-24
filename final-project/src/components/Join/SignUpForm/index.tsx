import React from "react";
import eye from "../../../assets/images/icon-eye.svg";

const SignUpForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Ad, Soyad</label>
        <input
          type="name"
          placeholder="Ad və soyadınızı daxil edin"
          id="name"
        />
        <p>Wrong email address</p>
      </div>
      <div className="form-group">
        <label htmlFor="email">E-mail</label>
        <input type="email" placeholder="nümunə@gmail.com" id="email" />
        <p>Wrong email address</p>
      </div>
      <div className="form-group">
        <label htmlFor="phone">Mobil nömrə</label>
        <div className=" form-phone">
          <select id="identifier">
            <option>077</option>
            <option>050</option>
            <option>055</option>
          </select>
          <input type="phone" placeholder="000 - 00 - 00" id="phone" />
        </div>

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
      <div className="form-terms">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">
          <span>İstifadəçi şərtləri </span>ilə razıyam
        </label>
      </div>
      <button>Qeydiyyat</button>
    </form>
  );
};

export default SignUpForm;
