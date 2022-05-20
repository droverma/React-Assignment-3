
import React from 'react';
import { Link } from "react-router-dom"
const Footer = () => {
    return <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
            {/* <!-- Section: Social media --> */}
            <section className="mb-4">
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                    className="fa fa-facebook"></i></a>

                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                    className="fa fa-twitter"></i></a>

                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                    className="fa fa-google"></i></a>

                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                    className="fa fa-instagram"></i></a>

                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                    className="fa fa-linkedin"></i></a>

                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                    className="fa fa-github"></i></a>
            </section>
            {/* <!-- Section: Web Site --> */}
            <section className="mb-4">
                <Link to="/dashboard" className="mx-2" >Dashboad </Link>
                <Link to="/readnow" className="mx-2" >Read Now </Link>

            </section>
        </div>
        {/* <!-- Copyright --> */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2022 Copyright:
            <a className="text-white" href="/">news.com</a>
        </div>
    </footer>
}
export default Footer;