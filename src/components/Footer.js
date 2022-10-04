import "./Footer.css";
import FooterElement from "./FooterElement";
function Footer() {
  //A static footer for now that only shows the gitlab logo and our gitlab link

  return (
    <div className="footer">
      <FooterElement elementName="TecCEM Gitlab Repository" />
    </div>
  );
}

export default Footer;
