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
    Languages,
    Projects,
    Light,
    Contact,
    Meister2
} from '../../Utils/values';
import $ from 'jquery';
import { backToTop } from '../../Utils/methods';
import './index.scss';
import './animate.scss';
import useInView from 'react-cool-inview';

const Home = () => {
    useEffect(() => {
        backToTop();
    }, []);
    const { observe: observe1 } = useInView({
        onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
            $('.work__link').addClass('active');
            $('.contact__link').removeClass('active');
            $('.about__link').removeClass('active');
        }
    });
    const { observe: observe2 } = useInView({
        onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
            $('.work__link').removeClass('active');
            $('.contact__link').addClass('active');
            $('.about__link').removeClass('active');
        }
    });
    const { observe } = useInView({
        onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
            $('.work__link').removeClass('active');
            $('.contact__link').removeClass('active');
            $('.about__link').addClass('active');
        }
    });

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

            <section id="firstSection" ref={observe}>
                <div className="container first__section">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-lg-5 ">
                            <div className="first__section__header slideDown">
                                Hi, my name is Frederick.{' '}
                            </div>
                            <div className="first__section__secondary mt-4 mb-3 slideLeft">
                                I'm a fullstack web developer with experience in
                                building web applications with
                                React/Express/Spring
                            </div>
                            <div className="header__extra mb-3">
                                (BSc Computer Engineering)
                            </div>{' '}
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

                        <div className="col-12 col-lg-5 header__image fadeIn">
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
            <section id="fourthSection" ref={observe1}>
                <div className="container fourth__section">
                    <div className="row">
                        <div className="col-12">
                            <div className="fourth__section__header">
                                Projects
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12  ">
                            <div className="big__project cedi">
                                <div className="row align-items-center justify-content-around">
                                    <div className="col-12 col-lg-5">
                                        <div className="name mb-2">
                                            {Projects[0].name}{' '}
                                            <span>
                                                <img
                                                    src={Projects[0].icon}
                                                    alt="Icon"
                                                    className="project__icon ms-2"
                                                />
                                            </span>
                                        </div>
                                        <div className="description mb-2">
                                            {Projects[0].desc}
                                        </div>
                                        <div className="type mb-2">
                                            {Projects[0].type}
                                        </div>
                                        <div className="stack mt-3">
                                            <ul>
                                                {Projects[0].tech.map(
                                                    project => (
                                                        <li>
                                                            <span className="">
                                                                <img
                                                                    src={Light}
                                                                    alt="Light"
                                                                    className="icon__light"
                                                                />
                                                            </span>
                                                            {project}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                        <div className="note">
                                            {Projects[0].note}
                                        </div>
                                        <div className="link">
                                            <a
                                                href={Projects[0].url}
                                                target="_blank"
                                                rel="noreferrer">
                                                {' '}
                                                Visit {Projects[0].name}{' '}
                                                <span className="link__icon">
                                                    <i class="fas fa-external-link-alt ms-2"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-11 col-lg-5 large__screen">
                                        <img
                                            src={Projects[0].img}
                                            alt={Projects[0].name}
                                            className="project__main__image"
                                        />
                                    </div>
                                    <div className="col-11 col-lg-5 small__screen">
                                        <img
                                            src={Projects[0].extraImg}
                                            alt={Projects[0].name}
                                            className="project__main__image2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mt-5">
                            <div className="small__project blaze">
                                <div className="row align-items-center justify-content-around">
                                    <div className="col-11">
                                        <div className="name mb-2">
                                            {Projects[1].name}{' '}
                                            <span>
                                                <img
                                                    src={Projects[1].icon}
                                                    alt="Icon"
                                                    className="project__icon ms-2"
                                                />
                                            </span>
                                        </div>
                                        <div className="description mb-2">
                                            {Projects[1].desc}
                                        </div>
                                        <div className="type mb-2">
                                            {Projects[1].type}
                                        </div>
                                        <div className="stack mt-3">
                                            <ul>
                                                {Projects[1].tech.map(
                                                    project => (
                                                        <li>
                                                            <span className="">
                                                                <img
                                                                    src={Light}
                                                                    alt="Light"
                                                                    className="icon__light"
                                                                />
                                                            </span>
                                                            {project}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>

                                        <div className="link my-3">
                                            <a
                                                href={Projects[1].url}
                                                target="_blank"
                                                rel="noreferrer">
                                                {' '}
                                                Visit {Projects[1].name}{' '}
                                                <span className="link__icon">
                                                    <i class="fas fa-external-link-alt ms-2"></i>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="note mb-2">
                                            {Projects[1].note}
                                        </div>
                                    </div>
                                    <div className="col-11">
                                        <img
                                            src={Projects[1].img}
                                            alt={Projects[1].name}
                                            className="project__main__image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mt-5">
                            <div className="small__project hazegen">
                                <div className="row align-items-center justify-content-around">
                                    <div className="col-11">
                                        <div className="name mb-2">
                                            {Projects[6].name}{' '}
                                            <span>
                                                <img
                                                    src={Projects[6].icon}
                                                    alt="Icon"
                                                    className="project__icon ms-2"
                                                />
                                            </span>
                                        </div>
                                        <div className="description mb-2">
                                            {Projects[6].desc}
                                        </div>
                                        <div className="type mb-2">
                                            {Projects[6].type}
                                        </div>
                                        <div className="stack mt-3">
                                            <ul>
                                                {Projects[6].tech.map(
                                                    project => (
                                                        <li>
                                                            <span className="">
                                                                <img
                                                                    src={Light}
                                                                    alt="Light"
                                                                    className="icon__light"
                                                                />
                                                            </span>
                                                            {project}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>

                                        <div className="link my-3">
                                            <a
                                                href={Projects[6].url}
                                                target="_blank"
                                                rel="noreferrer">
                                                {' '}
                                                Visit {Projects[6].name}{' '}
                                                <span className="link__icon">
                                                    <i class="fas fa-external-link-alt ms-2"></i>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="note mb-2">
                                            {Projects[6].note}
                                        </div>
                                    </div>
                                    <div className="col-11">
                                        <img
                                            src={Projects[6].img}
                                            alt={Projects[6].name}
                                            className="project__main__image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-5">
                            <div className="big__project medic">
                                <div className="row align-items-center justify-content-around">
                                    <div className="col-11 col-lg-5">
                                        <div className="name mb-2">
                                            {Projects[2].name}{' '}
                                            <span>
                                                <img
                                                    src={Projects[2].icon}
                                                    alt="Icon"
                                                    className="project__icon ms-2"
                                                />
                                            </span>
                                        </div>
                                        <div className="description mb-2">
                                            {Projects[2].desc}
                                        </div>
                                        <div className="type mb-2">
                                            {Projects[2].type}
                                        </div>
                                        <div className="stack mt-3">
                                            <ul>
                                                {Projects[2].tech.map(
                                                    project => (
                                                        <li>
                                                            <span className="">
                                                                <img
                                                                    src={Light}
                                                                    alt="Light"
                                                                    className="icon__light"
                                                                />
                                                            </span>
                                                            {project}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                        <div className="note my-2">
                                            {Projects[2].note}
                                        </div>
                                        <div className="link">
                                            <a
                                                href={Projects[2].url}
                                                target="_blank"
                                                rel="noreferrer">
                                                {' '}
                                                Visit {Projects[2].name}{' '}
                                                <span className="link__icon">
                                                    <i class="fas fa-external-link-alt ms-2"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-11 col-lg-5">
                                        <img
                                            src={Projects[2].img}
                                            alt={Projects[2].name}
                                            className="project__main__image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-4 mt-5">
                            <div className="tiny__project shop">
                                <div className="row align-items-center justify-content-around">
                                    <div className="col-11">
                                        <div className="name mb-2">
                                            {Projects[5].name}{' '}
                                            <span>
                                                <img
                                                    src={Projects[5].icon}
                                                    alt="Icon"
                                                    className="project__icon ms-2"
                                                />
                                            </span>
                                        </div>
                                        <div className="description mb-2">
                                            {Projects[5].desc}
                                        </div>
                                        <div className="type mb-2">
                                            {Projects[5].type}
                                        </div>
                                        <div className="stack mt-3">
                                            <ul>
                                                {Projects[5].tech.map(
                                                    project => (
                                                        <li>
                                                            <span className="">
                                                                <img
                                                                    src={Light}
                                                                    alt="Light"
                                                                    className="icon__light"
                                                                />
                                                            </span>
                                                            {project}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                        <div className="note my-2">
                                            {Projects[5].note}
                                        </div>
                                        <div className="link">
                                            <a
                                                href={Projects[5].url}
                                                target="_blank"
                                                rel="noreferrer">
                                                {' '}
                                                Visit {Projects[5].name}{' '}
                                                <span className="link__icon">
                                                    <i class="fas fa-external-link-alt ms-2"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-11 mt-3">
                                        <img
                                            src={Projects[5].img}
                                            alt={Projects[5].name}
                                            className="project__main__image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-4 mt-5">
                            <div className="tiny__project spawn">
                                <div className="row align-items-center justify-content-around">
                                    <div className="col-11">
                                        <div className="name mb-2">
                                            {Projects[9].name}{' '}
                                            <span>
                                                <img
                                                    src={Projects[9].icon}
                                                    alt="Icon"
                                                    className="project__icon ms-2"
                                                />
                                            </span>
                                        </div>
                                        <div className="description mb-2">
                                            {Projects[9].desc}
                                        </div>
                                        <div className="type mb-2">
                                            {Projects[9].type}
                                        </div>
                                        <div className="stack mt-3">
                                            <ul>
                                                {Projects[9].tech.map(
                                                    project => (
                                                        <li>
                                                            <span className="">
                                                                <img
                                                                    src={Light}
                                                                    alt="Light"
                                                                    className="icon__light"
                                                                />
                                                            </span>
                                                            {project}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                        <div className="note my-2">
                                            {Projects[9].note}
                                        </div>
                                        <div className="link">
                                            <a
                                                href={Projects[9].url}
                                                target="_blank"
                                                rel="noreferrer">
                                                {' '}
                                                Visit {Projects[9].name}{' '}
                                                <span className="link__icon">
                                                    <i class="fas fa-external-link-alt ms-2"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-11 mt-3">
                                        <img
                                            src={Projects[9].img}
                                            alt={Projects[9].name}
                                            className="project__main__image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-4 mt-5">
                            <div className="tiny__project tofie">
                                <div className="row align-items-center justify-content-around">
                                    <div className="col-11">
                                        <div className="name mb-2">
                                            {Projects[3].name}{' '}
                                            <span>
                                                <img
                                                    src={Projects[3].icon}
                                                    alt="Icon"
                                                    className="project__icon ms-2"
                                                />
                                            </span>
                                        </div>
                                        <div className="description mb-2">
                                            {Projects[3].desc}
                                        </div>
                                        <div className="type mb-2">
                                            {Projects[3].type}
                                        </div>
                                        <div className="stack mt-3">
                                            <ul>
                                                {Projects[3].tech.map(
                                                    project => (
                                                        <li>
                                                            <span className="   ">
                                                                <img
                                                                    src={Light}
                                                                    alt="Light"
                                                                    className="icon__light"
                                                                />
                                                            </span>
                                                            {project}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                        <div className="note my-2">
                                            {Projects[3].note}
                                        </div>
                                        <div className="link">
                                            <a
                                                href={Projects[3].url}
                                                target="_blank"
                                                rel="noreferrer">
                                                {' '}
                                                Visit {Projects[3].name}{' '}
                                                <span className="link__icon">
                                                    <i class="fas fa-external-link-alt ms-2"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-11 mt-3 contact__svg">
                                        <img
                                            src={Projects[3].img}
                                            alt={Projects[3].name}
                                            className="project__main__image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="sixthSection" ref={observe2}>
                <div className="container sixth__section">
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-5">
                            <div className="sixth__section__header">
                                Just Say Hello
                            </div>
                            <div className="sixth__section__secondary">
                                I am always open to discussing new projects or
                                help with improving already existing ones.
                            </div>
                            <div className="sixth__section__header__extra mt-5">
                                Email me at
                            </div>
                            <div className="email">
                                <a href="mailto:  frederick_hazel@hotmail.com">
                                    frederick_hazel@hotmail.com{' '}
                                    <i class="fas fa-external-link-alt ms-2"></i>
                                </a>
                            </div>
                            <div className="sixth__section__header__extra mt-5">
                                Follow me
                            </div>
                            <div className="col-12 mt-2 follow__icons">
                                <a
                                    class="btn btn-outline-primary extra me-2"
                                    href="https://github.com/frederickhazel6996?tab=repositories">
                                    <i class="fab fa-fw fa-github"></i>
                                </a>
                                <a
                                    class="btn btn-outline-primary extra me-1 px-3"
                                    href="https://www.linkedin.com/in/frederick-sagoe-753856182/">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a
                                    class="btn btn-outline-primary extra me-2"
                                    href="https://twitter.com/meister_kwame">
                                    <i class="fab fa-fw fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 ">
                            <div className="contact__image ">
                                <img
                                    src={Meister2}
                                    alt="Meister"
                                    className="sixth__section__image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <footer>
                <div className="container footer__section">
                    {' '}
                    <div id="date" className="my-2">
                        {' '}
                        &copy; 2021 Frederick Hazel{' '}
                    </div>
                </div>
            </footer>

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
