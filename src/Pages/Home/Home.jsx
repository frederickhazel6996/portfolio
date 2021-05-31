/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import {
    Webpack,
    Wix,
    ServerImage,
    FrontendImage,
    WixImage,
    Server1Image,
    GraphQL,
    Nextjs,
    MongoDB,
    Html,
    Digital,
    Bootstrap,
    ReactImage,
    Spring,
    Java,
    JavaScript,
    Sass,
    PG,
    Heroku,
    AWS,
    Chakra,
    Express,
    Postman,
    Intel,
    Adobe,
    VS,
    Meister
} from '../../Utils/values';
import { backToTop } from '../../Utils/methods';
import $ from 'jquery';
import './index.scss';
import './animate.scss';
import useInView from 'react-cool-inview';

const Home = () => {
    useEffect(() => {
        backToTop();
    }, []);

    return (
        <>
            <Navbar />
            <br />

            <section id="firstSection">
                <div className="container first__section">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 ">
                            <div className="first__section__header slideDown">
                                Hi, my name is Frederick.
                            </div>
                            <div className="first__section__secondary mt-4 mb-3 slideLeft">
                                I'm a fullstack web developer with Experience in
                                building web applications with
                                React/Express/Spring
                            </div>
                            <div className="first__section__buttons slideUp">
                                <a
                                    className="btn btn-lg btn-outline-primary me-3 my__cv"
                                    href="https://www.dropbox.com/s/2q718ixsvlvjcf0/Frederick_Hazel_Sagoe_CV.pdf?dl=0"
                                    target="_blank"
                                    rel="noreferrer">
                                    My CV
                                </a>
                                <div className="btn btn-lg btn-primary me-3 work__button">
                                    My Work
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 header__image fadeIn">
                            <img
                                src={Meister}
                                alt="Header"
                                className="first__section__image"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="secondSection">
                <div className="container second__section">
                    <div className="row">
                        <div className="col-12">
                            <div className="second__section__header">
                                What I do
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 col-lg-4 mb-2 fadeIn">
                            <div className="second__section__images__container">
                                <img
                                    src={ServerImage}
                                    alt="server"
                                    className="second__section__images"
                                />
                            </div>
                            <div className="second__section__secondary__header mt-2">
                                Backend Web Development
                            </div>
                            <div className="second__section__secondary mt-2">
                                I build,maintain and deploy robust and secure
                                Web APIS with Express JS,Java Spring and several
                                database technologies.
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 mb-2 fadeIn">
                            <div className="second__section__images__container">
                                <img
                                    src={FrontendImage}
                                    alt="server"
                                    className="second__section__images"
                                />
                            </div>
                            <div className="second__section__secondary__header mt-2">
                                Frontend Web Development
                            </div>
                            <div className="second__section__secondary mt-2">
                                Do you need a beautiful and responsive
                                website/webapp ? I build beautiful frontend
                                systems with react JS/bootstrap css/Chakra
                                UI,etc. I also handle the integration of
                                frontend apps with APIs
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 mb-2 fadeIn">
                            <div className="second__section__images__container">
                                <img
                                    src={WixImage}
                                    alt="server"
                                    className="second__section__images"
                                />
                            </div>
                            <div className="second__section__secondary__header mt-2">
                                Wix e-commerce Design and Setup
                            </div>
                            <div className="second__section__secondary mt-2">
                                Are you an eCommerce store owner? I can help you
                                design & build fully custom landing pages,
                                product & collection pages.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="thirdSection">
                <div className="container third__section">
                    <div className="row">
                        <div className="col-12">
                            <div className="third__section__header">
                                Languages,Frameworks and Tools I use
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 align-items-center">
                        <div className="col-12 col-lg-6 third__section__image__container">
                            <img
                                src={Server1Image}
                                alt="Server"
                                className="third__section__image"
                            />
                        </div>

                        <div className="col-12 col-xl-6">
                            <ul className="dev__icons">
                                <li className="icons__inline me-3">
                                    <div className="third__section__icons">
                                        <img src={JavaScript} alt="JS" />
                                        <p className="mt-2">Java Script</p>
                                    </div>
                                </li>
                                <li className="icons__inline me-3">
                                    <div className="third__section__icons">
                                        <img src={Java} alt="Java" />
                                        <p className="mt-2">Java</p>
                                    </div>
                                </li>
                                <li className="icons__inline me-3">
                                    <div className="third__section__icons">
                                        <img src={Html} alt="HTML" />
                                        <p className="mt-2">HTML</p>
                                    </div>
                                </li>
                                <li className="icons__inline me-3">
                                    <div className="third__section__icons">
                                        <img src={Sass} alt="Sass" />
                                        <p className="mt-2">CSS/SCSS</p>
                                    </div>
                                </li>
                                <li className="icons__inline me-3">
                                    <div className="third__section__icons">
                                        <img src={Bootstrap} alt="Boot" />
                                        <p className="mt-2">Bootstrap</p>
                                    </div>
                                </li>
                                <li className="icons__inline me-3">
                                    <div className="third__section__icons">
                                        <img src={Chakra} alt="Chakra" />
                                        <p className="mt-2">Chakra UI</p>
                                    </div>
                                </li>
                                <li className="icons__inline me-3">
                                    <div className="third__section__icons">
                                        <img src={ReactImage} alt="React" />
                                        <p className="mt-2">ReactJS</p>
                                    </div>
                                </li>
                                <li className="icons__inline me-3">
                                    <div className="third__section__icons">
                                        <img src={Express} alt="Express" />
                                        <p className="mt-2">
                                            Node JS (Express JS)
                                        </p>
                                    </div>
                                </li>
                                <li className="icons__inline me-3">
                                    <div className="third__section__icons">
                                        <img src={Spring} alt="Spring" />
                                        <p className="mt-2">Java Springboot</p>
                                    </div>
                                </li>
                                <li className="icons__inline me-3">
                                    <div className="third__section__icons">
                                        <img src={GraphQL} alt="GraphQL" />
                                        <p className="mt-2">GraphQL</p>
                                    </div>
                                </li>
                                <li className="icons__inline me-3">
                                    <div className="third__section__icons">
                                        <img src={Nextjs} alt="Next JS" />
                                        <p className="mt-2">Next JS</p>
                                    </div>
                                </li>
                                <li className="icons__inline me-3">
                                    <div className="third__section__icons">
                                        <img src={PG} alt="PG" />
                                        <p className="mt-2">PGSQL-database</p>
                                    </div>
                                </li>
                                <li className="icons__inline me-3">
                                    <div className="third__section__icons">
                                        <img src={MongoDB} alt="Mongo" />
                                        <p className="mt-2">MongoDB</p>
                                    </div>
                                </li>
                                <li className="icons__inline me-3">
                                    <div className="third__section__icons">
                                        <img src={AWS} alt="AWS" />
                                        <p className="mt-2">AWS</p>
                                    </div>
                                </li>
                                <li className="icons__inline me-3">
                                    <div className="third__section__icons">
                                        <img src={Digital} alt="Next JS" />
                                        <p className="mt-2">Digital Ocean</p>
                                    </div>
                                </li>
                                <li className="icons__inline me-3">
                                    <div className="third__section__icons">
                                        <img src={Heroku} alt="Heroku" />
                                        <p className="mt-2">Heroku</p>
                                    </div>
                                </li>
                                <li className="icons__inline me-3">
                                    <div className="third__section__icons">
                                        <img src={VS} alt="VS" />
                                        <p className="mt-2">VS Code</p>
                                    </div>
                                </li>
                                <li className="icons__inline me-3">
                                    <div className="third__section__icons">
                                        <img src={Postman} alt="Postman" />
                                        <p className="mt-2">Postman</p>
                                    </div>
                                </li>
                                <li className="icons__inline me-3">
                                    <div className="third__section__icons">
                                        <img src={Adobe} alt="Adobe" />
                                        <p className="mt-2">Adobe XD</p>
                                    </div>
                                </li>
                                <li className="icons__inline me-3">
                                    <div className="third__section__icons">
                                        <img
                                            src={Intel}
                                            alt="Intel"
                                            className="intel"
                                        />
                                        <p className="mt-2">IntelliJ</p>
                                    </div>
                                </li>
                                <li className="icons__inline me-3">
                                    <div className="third__section__icons">
                                        <img src={Webpack} alt="Webpack" />
                                        <p className="mt-2">Webpack</p>
                                    </div>
                                </li>
                                <li className="icons__inline me-3">
                                    <div className="third__section__icons">
                                        <img src={Wix} alt="Wix" />
                                        <p className="mt-2">Wix</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <br />

            <a
                id="back-to-top"
                href="#"
                class="btn btn-light btn-lg back-to-top"
                role="button">
                <i class="fas fa-chevron-up "></i>
            </a>
        </>
    );
};

export default Home;
