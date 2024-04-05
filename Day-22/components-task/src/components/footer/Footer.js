import "./Footer.css"

function Footer() {
    return (
        <div className="footer bg-light">
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <ul>
                            <li>
                                <a href="/">About</a>
                            </li>
                            <li>
                                <a href="/">Contact</a>
                            </li>
                            <li>
                                <a href="/">Terms of Use</a>
                            </li>
                            <li>
                                <a href="/">Privacy Policy</a>
                            </li>
                        </ul>
                        <p className="text-muted small mb-4 mb-lg-0">© Your Website 2023. All Rights Reserved.</p>
                    </div>
                </div>
                <div className="row">
                    <ul>
                        <li>
                            <a href="/">
                                <i className="bi bi-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="bi bi-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="bi bi-instagram"></i>
                            </a>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;