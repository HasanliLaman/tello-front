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
            base="products"
            items={[
              { name: "Yeni", id: "63499c8c0dcd7543dea37b48" },
              { name: "Endirimlər", id: "63499c790dcd7543dea37b45" },
              { name: "Aksessuarlar", id: "6349a240deb4fa69723b4d73" },
              { name: "Bütün brendlər", id: "6349a258deb4fa69723b4d76" },
            ]}
            header="Menu"
          />
          <FooterLinks
            links={true}
            base=""
            items={[
              { name: "Tez-tez soruşulan suallar", id: "" },
              { name: "Çatdırılma xidməti", id: "" },
              { name: "Geri qaytarılma şərtləri", id: "" },
            ]}
            header="Kömək"
          />
          <FooterLinks base="" links={false} items={[]} header="Əlaqə" />
        </div>
        <FooterCredits />
      </Container>
    </StyleFooterMain>
  );
};

export default FooterMain;
