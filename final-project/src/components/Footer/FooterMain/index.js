import React from "react";
import StyleFooterMain from "./style";
import Container from "../../UI/Container";
import FooterIcons from "../FooterIcons";
import FooterLinks from "../FooterLinks";
import FooterCredits from "../FooterCredits";

const FooterMain = () => {
  return (
    <StyleFooterMain>
      <Container>
        <div className="lists">
          <FooterIcons />
          <FooterLinks
            links={true}
            items={[
              { name: "Yeni" },
              { name: "Endirimlər" },
              { name: "Aksessuarlar" },
              { name: "Bütün brendlər" },
            ]}
            header="Menu"
          />
          <FooterLinks
            links={true}
            items={[
              { name: "Tez-tez soruşulan suallar" },
              { name: "Çatdırılma xidməti" },
              { name: "Geri qaytarılma şərtləri" },
            ]}
            header="Kömək"
          />
          <FooterLinks header="Əlaqə" />
        </div>
        <FooterCredits />
      </Container>
    </StyleFooterMain>
  );
};

export default FooterMain;
