import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer w-1560" style={{ marginTop: "1rem" }}>
      <div className="footer-list">
        <p>Pizza App © 2022</p>
        <p>
          Powered by WinterSalt and{" "}
          <span style={{ fontSize: "10px" }}>thofnas</span>
        </p>
        <p>Made With ❤️</p>
      </div>
    </div>
  );
};

export default Footer;
