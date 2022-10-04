import "./FooterElement.css";

function FooterElement(props) {
  return (
    <div className="footerElement">
      <a className="footerLink" href="https://gitlab.igem.org/2022/teccem">
        {props.elementName}
      </a>
    </div>
  );
}

export default FooterElement;
