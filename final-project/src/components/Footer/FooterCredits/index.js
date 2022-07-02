import React from "react";
import StyleFooterCredits from "./style";

//TODO: replace <a> with <Link>

const FooterCredits = () => {
  return (
    <StyleFooterCredits>
      <p> &copy; PeojectX 2021. Bütün hüquqlar qorunur.</p>
      <div>
        <a href="#">Qaydalar və şərtlər</a>
        <a href="#">Məxfilik siyasəti</a>
      </div>
    </StyleFooterCredits>
  );
};

export default FooterCredits;
