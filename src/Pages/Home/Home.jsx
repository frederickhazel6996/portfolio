/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import {
    ServerImage,
    FrontendImage,
    WixImage,
    Server1Image,
    Adobe,
    Meister,
    Flutter,
    Languages
} from '../../Utils/values';
import { backToTop } from '../../Utils/methods';
import './index.scss';
import './animate.scss';
// import useInView from 'react-cool-inview';

const Home = () => {
    useEffect(() => {
        backToTop();
    }, []);

    const LanguagesFrameworks = Languages.map((languages, index) => (
        <li className="icons__inline me-3" key={index}>
            <div className="third__section__icons">
                {languages.type === 'extra' ? (
                    <img
                        src={languages.img}
                        alt={languages.item}
                        className="intel"
                    />
                ) : (
                    <img src={languages.img} alt={languages.item} />
                )}
                <p className="mt-2">{languages.item}</p>
            </div>
        </li>
    ));
    return (
        <>
            <Navbar />
            <br />

            <section id="firstSection">
                <div className="container first__section">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 ">
                            <div className="first__section__header slideDown">
                                Hi, my name is Frederick.{' '}
                                <span className="header__extra">
                                    (BSc. Computer Engineering)
                                </span>
                            </div>

                            <div className="first__section__secondary mt-4 mb-3 slideLeft">
                                I'm a fullstack web developer with experience in
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
                                I have great skills in
                                building,testing,maintaining and deploying
                                robust and secure Web APIs using{' '}
                                <span className="focus__text">
                                    Express JS,Java Spring
                                </span>{' '}
                                and several database technologies.
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
                                I build seamlessly aesthetic and responsive
                                frontend systems with{' '}
                                <span className="focus__text ">
                                    React JS, Next, Chakra UI
                                </span>{' '}
                                and other modern framework and tools. I also
                                handle the integration of frontend web apps with
                                APIs.
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
                                I can take your business a step further by
                                getting your shop online. I wiil do this by
                                designing and building a fully-functional
                                e-commerce shop with payment integrations, using{' '}
                                <span className="focus__text">
                                    Wix or Shopify.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="secondSection">
                <div className="container second__section">
                    <div className="row">
                        <div className="col-12">
                            <div className="second__section__header">
                                Extra Skills
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 col-lg-4 mb-2 fadeIn">
                            <div className="second__section__images__container">
                                <img
                                    src={Adobe}
                                    alt="server"
                                    className="second__section__images"
                                />
                            </div>
                            <div className="second__section__secondary__header mt-2">
                                UI/UX
                            </div>
                            <div className="second__section__secondary mt-2">
                                I design and create web and mobile user
                                interfaces that ensure that the user has a
                                thrilling experience using{' '}
                                <span className="focus__text">Adobe XD.</span>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 mb-2 fadeIn">
                            <div className="second__section__images__container">
                                <img
                                    src={Flutter}
                                    alt="server"
                                    className="second__section__images"
                                />
                            </div>
                            <div className="second__section__secondary__header mt-2">
                                Mobile Development
                            </div>
                            <div className="second__section__secondary mt-2">
                                I design and build cross-platform mobile
                                applications using{' '}
                                <span className="focus__text">Flutter.</span>
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
                                {LanguagesFrameworks}
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
