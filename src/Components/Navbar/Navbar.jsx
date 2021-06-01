import React, { useEffect } from 'react';
import { scrollProgressBar } from '../../Utils/methods';
import './index.scss';

const Navbar = () => {
    useEffect(() => {
        scrollProgressBar();
    }, []);
    return (
        <>
            <div className="fixed-top">
                <header className="nav__header">
                    <div className="container ">
                        <nav className="navbar  navbar-expand-lg ">
                            <div className="container-fluid">
                                <a className="navbar-brand " href="/">
                                    Frederick Hazel
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon">
                                        <i class="fas fa-bars mt-2"></i>
                                    </span>
                                </button>
                                <div
                                    className="collapse navbar-collapse "
                                    id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link about__link"
                                                href="#firstSection">
                                                About
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                className="nav-link work__link"
                                                href="#fourthSection">
                                                My Work
                                            </a>
                                        </li>
                                        <li className="nav-item ">
                                            <a
                                                className="nav-link contact__link"
                                                href="#fifthSection">
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
            <div className="nav__spacer"></div>
        </>
    );
};

export default Navbar;
