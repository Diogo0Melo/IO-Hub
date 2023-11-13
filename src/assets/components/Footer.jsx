import "../styles/Footer.css";
function Footer() {
    return (
        <div id="footer-container">
            <p>
                Em Desenvolvimento por{" "}
                <a
                    href="https://github.com/Diogo0Melo"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        color: "black",
                        textDecoration: "none",
                        fontWeight: "bold",
                        fontSize: "1.8rem",
                    }}
                >
                    Diogo Melo
                </a>
            </p>
        </div>
    );
}
export default Footer;
