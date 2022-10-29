import React from "react"
import "./Footer.css"

const Footer = () => <footer className="page-footer font-small blue pt-4" style={{background: "linear-gradient(135.77deg, rgba(255, 255, 255, 0.4) -94.16%, rgba(255, 255, 255, 0) 100%)"}}>
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Foodie Adda</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Useful Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Home</a></li>
                    <li><a href="#!">Restaurants</a></li>
                    <li><a href="#!">About Us</a></li>
                    <li><a href="#!">Contact Us</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Terms and Policies</h5>
                <ul className="list-unstyled">
                    <li><a style={{textDecoration: "none"}}href="#!">Privacy</a></li>
                    <li><a href="#!">Security</a></li>
                    <li><a href="#!">Terms of Use</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3" style={{color: "white"}}>© 2022 Copyright:
        <a href="https://mdbootstrap.com/"> foodieAdda.com</a>
    </div>

</footer>

export default Footer;