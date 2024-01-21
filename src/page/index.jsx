import { React, useState } from "react";
import Nav_bar from "../utils/nav_bar";
import Footer from "../utils/footer";

import ImageGallery from "react-image-gallery";
import { TypeAnimation } from "react-type-animation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import { useNavigate } from "react-router-dom";
import Gptengine_utils from "../utils/gptengine.utils";
import Instruction_utils from "../utils/instruction.utils";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Home() {
    // const navigate = useNavigate();

    function getStorageValue(key) {
        // getting stored value
        const saved = localStorage.getItem(key);
        return saved;
    }
    function getStars(nos) {
        // take input 0 to 10
        const classlist1 = "bg-green-500 mask mask-star-2 mask-half-1";
        const classlist2 = "bg-green-500 mask mask-star-2 mask-half-2";
        return (
            <>
                <div className="rating rating-md rating-half">
                    {[...Array(10)].map((x, i) => {
                        if (i % 2 == 0) {
                            if (i < nos) {
                                return (
                                    <div key={i}>
                                        <input
                                            type="radio"
                                            name="rating-10"
                                            className={classlist1}
                                        />
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={i}>
                                        <input
                                            type="radio"
                                            name="rating-10"
                                            className={classlist1.replace(
                                                "bg-green-500",
                                                "bg-green-300"
                                            )}
                                        />
                                    </div>
                                );
                            }
                        } else {
                            if (i < nos) {
                                return (
                                    <div key={i}>
                                        <input
                                            type="radio"
                                            name="rating-10"
                                            className={classlist2}
                                        />
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={i}>
                                        <input
                                            type="radio"
                                            name="rating-10"
                                            className={classlist2.replace(
                                                "bg-green-500",
                                                "bg-green-300"
                                            )}
                                        />
                                    </div>
                                );
                            }
                        }
                    })}
                </div>
            </>
        );
    }

    const thumbnail = [
        {
            original: "/img/thumbnail/3dprinting1.jpg",
        },
        {
            original: "/img/thumbnail/3dprinting2.jpg",
        },
        {
            original: "/img/thumbnail/3dprinting3.jpg",
        },
        {
            original: "/img/thumbnail/3dprinting4.jpg",
        },
        {
            original: "/img/thumbnail/3dprinting5.jpg",
        },
        {
            original: "/img/thumbnail/3dprinting6.jpg",
        },
        {
            original: "/img/thumbnail/3dprinting7.jpg",
        },
    ];

    const supportedBrandsURL = [
        ["/img/brands/UltiMaker_Logo.svg", "https://ultimaker.cn/"],
        ["/img/brands/MakerBot-Logo.webp", "https://www.lwtsistemas.com.br"],
        ["/img/brands/crealitylogo.png", "https://www.creality.com/"],
        ["/img/brands/stratasys-logo.png", "https://support.stratasys.com/"],
        ["/img/brands/eos_gmbh_logo_bw.svg", "https://eos-c963.kxcdn.com/"],
        ["/img/brands/logo_top.png", "https://www.sz3dp.com/"],
        ["/img/brands/jgew3dlogo.png", "http://www.jgew3d.com/"],
        ["/img/brands/prusaresearch-logo.png", "https://www.makerspaceman.com/en/"],
        ["/img/brands/hori3dlogo.png", "http://www.hori3d.com/"],
    ];

    const feedbackDetails = [
        [
            "/img/userFeedback/product1.jpg",
            "Good but can be better!",
            7,
            "I am a professional user and the print quality does not meet my expectation although there are some defects.",
        ],
        [
            "/img/userFeedback/product2.jpg",
            "Decent quality",
            6,
            "I don't expect getting something like this...",
        ],
        [
            "/img/userFeedback/product3.jpg",
            "Perfect print!",
            10,
            "This is my first time try out SAMple GPT engine and it works like a charm! Well done!",
        ],
        [
            "/img/userFeedback/product4.jpg",
            "Something is not right!",
            5,
            "I used the engine multiple times and never get something similar like this! ",
        ],
        [
            "/img/userFeedback/product5.jpg",
            "Beautiful!",
            10,
            "Perfect and simple instructions. Thanks SAMple.",
        ],
    ];

    return (
        <>
            <Nav_bar />

            <div className="flex flex-1 flex-col overflow-y-auto p-7">
                <div className="text-center">
                    <div className="flex justify-center items-center align-middle ">
                        <object data="/sampleLogo.svg" className="h-20 "></object>
                        <h1 className="font-SAMple  text-3xl sm:text-5xl">3D Printer Cookbook</h1>
                    </div>
                    <br></br>
                    <div className="flex flex-col max-w-3xl mx-auto">
                        <h2 className="text-2xl">
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    "We produce 3D printer settings for professionals.",
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    "We produce 3D printer settings for hobbyists.",
                                    1000,
                                    "We produce 3D printer settings for learners.",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={30}
                                style={{ display: "inline-block" }}
                                repeat={Infinity}
                            />
                        </h2>
                        <br></br>
                        <span className="text-lg md:w-10/12 md:mx-auto">
                            SAMple 3D printer cookbook aims to provide{" "}
                            <span className="font-bold">S</span>tep-by-step guidance,{" "}
                            <span className="font-bold">A</span>dvanced printing tips,{" "}
                            <span className="font-bold">M</span>aterial expertise,{" "}
                            <span className="font-bold">p</span>rinter type customization,{" "}
                            <span className="font-bold">l</span>ayer perfection and{" "}
                            <span className="font-bold">e</span>xcellent results.
                        </span>
                    </div>
                    <br></br>
                    <a
                        className="btn btn-xs w-60 h-10 sm:btn-sm sm:w-64 sm:h-10 md:btn-md md:w-80 lg:btn-lg lg:w-96"
                        href="\gptengine">
                        Trial GPT engine for free
                    </a>
                </div>
                <br></br>

                <div className="md:w-10/12 md:mx-auto">
                    {/* image gallery */}
                    <div className="my-4 w-10/12 mx-auto">
                        {/* place holder for product gallery */}
                        {/* https://unsplash.com/s/photos/3d-printing */}
                        <ImageGallery
                            items={thumbnail}
                            loading={true}
                            showFullscreenButton={false}
                            showThumbnails={false}
                            showPlayButton={false}
                            showBullets={true}
                            slideInterval={2100}
                            slideDuration={450}
                            infinite={true}
                            autoPlay={true}
                        />
                    </div>

                    {/*  simple instruction demo */}
                    <div className=" my-4 ">
                        <div className="mockup-browser border bg-base-300">
                            <div className="mockup-browser-toolbar">
                                <div className="input">
                                    https://engg5203-cookbook.web.app/gptengine
                                </div>
                            </div>
                            <div className="flex flex-col justify-center px-4 py-5 bg-base-200 overflow-hidden">
                                <Gptengine_utils dummy={true} />
                                <Instruction_utils dummy={true} />
                            </div>
                        </div>
                    </div>

                    {/* lib intro */}
                    <div className=" my-4">
                        <AnimationOnScroll
                            animateIn="animate__fadeInLeftBig"
                            animateOut="animate__fadeOut"
                            animatePreScroll={false}
                            animateOnce={true}
                            duration={0.3}>
                            <div className="flex flex-col sm:flex-row m-2 mt-5 sm:mt-2 items-center">
                                <object
                                    data="/company_logo/ChatGPT_logo.svg"
                                    className="h-36 ml-2"></object>
                                <span className="m-4 font-libDes text-md sm:text-2xl">
                                    <span className="text-2xl sm:text-4xl"> Chat GPT </span>is an
                                    NLP technology that uses machine learning and AI to understand
                                    and respond to human conversations, making it useful for
                                    chatbots, virtual assistants, and more.
                                </span>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll
                            animateIn="animate__fadeInRightBig"
                            animateOut="animate__fadeOut"
                            animatePreScroll={false}
                            animateOnce={true}
                            duration={0.3}>
                            <div className="flex flex-col sm:flex-row m-2 items-center">
                                <object
                                    data="/company_logo/Tailwind_CSS_Logo.svg"
                                    className="h-28 mx-2 block sm:hidden"></object>
                                <span className="m-4 font-libDes text-md sm:text-2xl">
                                    <span className="text-2xl sm:text-4xl"> Tailwind CSS </span>
                                    streamlines UI creation by combining low-level utility classes,
                                    negating the need for custom CSS. It's user-friendly and ideal
                                    for rapid responsive design development.
                                </span>

                                <object
                                    data="/company_logo/Tailwind_CSS_Logo.svg"
                                    className="h-28 mx-2 hidden sm:block"></object>
                            </div>
                        </AnimationOnScroll>

                        <AnimationOnScroll
                            animateIn="animate__fadeInLeftBig"
                            animateOut="animate__fadeOut"
                            animatePreScroll={false}
                            animateOnce={true}
                            duration={0.3}>
                            <div className="flex flex-col sm:flex-row  m-2 items-center">
                                <object
                                    data="/company_logo/React-icon.svg"
                                    className="h-32 ml-2"></object>
                                <span className="m-4 font-libDes text-md sm:text-2xl">
                                    <span className="text-2xl sm:text-4xl"> React JS </span>is a
                                    JavaScript library for web and mobile app UIs, known for its
                                    efficiency, speed, and scalability in building complex
                                    interfaces.
                                </span>
                            </div>
                        </AnimationOnScroll>
                    </div>

                    {/* supported brand */}
                    <div className=" my-4 mt-8 flex flex-col ">
                        <div className="text-center ">
                            <h1 className="text-3xl">Supported brands</h1>
                            <div className="flex flex-wrap justify-center items-center align-middle ">
                                {supportedBrandsURL.map((item, index) => (
                                    <div key={index}>
                                        <div>
                                            <a href={item[1]}>
                                                <img src={item[0]} className="h-8 m-4"></img>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* customer review  */}
                    <div className="carousel rounded-box carousel-center mt-4 w-full">
                        {feedbackDetails.map((item, index) => (
                            <div key={index}>
                                <div className=" p-7">
                                    <div className="card card-compact w-80 h-96 shadow-xl carousel-item">
                                        <figure>
                                            <img
                                                src={item[0]}
                                                className="w-full h-52 object-cover"
                                            />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{item[1]}</h2>
                                            {getStars(item[2])}
                                            <p>{item[3]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-right text-pink-500">
                        Note: Try shift+scoll wheel to see the review on computer.
                    </p>


                </div>
            </div>

            <Footer />
        </>
    );
}
export default Home;
