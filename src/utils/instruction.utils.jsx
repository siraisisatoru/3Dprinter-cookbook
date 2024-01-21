import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import gptAPI from "../js/gptAPI.js";
import { useNavigate } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { TypeAnimation } from "react-type-animation";

import { pushComment } from "../js/firebase.utils.js";

import { PDFsnippet } from "./pdf.utils.jsx";

function Instruction_utils(props) {
    const navigate = useNavigate();
    console.log(props);
    var obj;

    if (!props.dummy) {
        console.log("for ins page or dashboard");
        if (props.dashboard) {
            // dashboard
        } else {
            obj = localStorage.getItem("lastInputOutput");
            if (JSON.parse(obj).input === "") {
                console.log("empty input, go home");
                useEffect(() => {
                    navigate("/");
                }, []);
            }
        }
    }

    const clickCB = async (e) => {
        // regenerate the output and reload
        if (localStorage.getItem("access_count") > 0 || localStorage.getItem("authUser")) {
            localStorage.setItem(
                "lastInputOutput",
                JSON.stringify({
                    input: JSON.parse(localStorage.getItem("lastInputOutput")).input,
                    regenerated: true,
                })
            );

            // add loading effect
            document.getElementById("loadingModal").classList.add("modal-open");
            // end loading effect

            await gptAPI.sendInput(
                JSON.parse(localStorage.getItem("lastInputOutput")).input,
                "ins"
            );
            // let output = gptAPI.renderOutput();

            window.location.href = "#top";
            document.getElementById("loadingModal").classList.remove("modal-open");

            window.location.reload(true);
        }
        console.log("re");
    };

    const loadingAniCommon =
        "border-2 border-solid border-transparent border-t-gray-400 border-r-gray-400 rounded-full absolute top-1/2 left-1/2";
    const loadingAniOuter = "animate-spin-loading-out w-28 h-28 -ml-14 -mt-14 ";
    const loadingAniMid = "animate-spin-loading-mid middle w-16 h-16 -ml-8 -mt-8 ";
    const loadingAniInner = "animate-spin-loading-inner inner w-6 h-6 -ml-3 -mt-3 ";

    const randPicList = [
        "/img/randompic/randpic1.png",
        "/img/randompic/randpic2.png",
        "/img/randompic/randpic3.png",
        "/img/randompic/randpic4.png",
        "/img/randompic/randpic5.png",
    ];

    const randTips = [
        "Thinner layers = smoother prints.",
        "Higher density = stronger, but longer.",
        "Needed for overhangs. Remove post-print.",
        "Clean and lubricate regularly.",
        "Check recommended temperatures.",
    ];

    const randnum = Math.floor(Math.random() * randPicList.length);

    return (
        <>
            <div className="flex flex-col justify-center items-center align-middle ">
                <div className="box-content sm:mx-4 p-4 px-4 sm:px-8">
                    <AnimationOnScroll
                        animateIn="animate__fadeInRight"
                        animateOnce={true}
                        offset={0}
                        animatePreScroll={true}>
                        <div className="chat chat-end">
                            <div className="chat-bubble bg-gray-200 shadow-md max-sm:text-sm">
                                {gptAPI.renderInput(props.dummy)}
                            </div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn="animate__fadeInLeft"
                        animateOnce={true}
                        delay={1}
                        animatePreScroll={true}>
                        <div className="chat chat-start">
                            <div
                                className="chat-bubble bg-gray-200 shadow-md max-sm:text-sm"
                                id="indDiv">
                                <span>{parse(gptAPI.renderOutput(props.dummy).instructions)}</span>
                            </div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn="animate__fadeInLeft"
                        animateOnce={true}
                        delay={1}
                        animatePreScroll={true}>
                        <div className="chat chat-start">
                            <div
                                className="chat-bubble bg-gray-200 shadow-md break-words max-sm:text-sm"
                                id="downloadDiv">
                                {parse(gptAPI.renderOutput(props.dummy).downloads)}
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>

                {!props.dummy && !props.dashboard ? (
                    <>
                        {!JSON.parse(localStorage.getItem("lastInputOutput")).regenerated ? (
                            <>
                                <div className="flex flex-col gap-4 w-auto h-auto px-16 py-3 bg-slate-100 m-5 rounded-2xl">
                                    <div className="text-center justify-center items-center align-middle ">
                                        It does not seem right? It is free to regenerate ONCE!
                                    </div>
                                    {/* <div className="justify-center items-center align-middle "> */}
                                    <button
                                        id="button_regenerate"
                                        className="btn mx-auto"
                                        onClick={clickCB}>
                                        Regenerate!
                                    </button>
                                    {/* </div> */}
                                </div>
                            </>
                        ) : (
                            <></>
                        )}

                        <div className="collapse bg-gray-300 w-full sm:w-11/12">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium">
                                Show instructions in PDF for download.
                            </div>
                            <div className="collapse-content">
                                <div className="h-fit">
                                    <PDFsnippet
                                        htmlIP={[
                                            gptAPI.renderInput(props.dummy),
                                            gptAPI.renderOutput(props.dummy, true).instructions,
                                            gptAPI.renderOutput(props.dummy, true).downloads,
                                        ]}></PDFsnippet>
                                </div>
                            </div>
                        </div>

                        {localStorage.getItem("authUser") ? (
                            <div className="flex justify-center items-center my-5 w-full">
                                <div className="bg-gray-100 p-8 rounded-lg shadow-md w-3/4">
                                    <h2 className="text-2xl font-bold mb-4">
                                        Please Provide any feedback
                                    </h2>
                                    {/* <h2 className="text-s text-gray-600 mb-4">
                                        Please note all feedback is anonymous
                                    </h2> */}
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            if (e.target[0].value) {
                                                pushComment(e.target[0].value);
                                                document
                                                    .getElementById("submittedModal")
                                                    .showModal();
                                            }
                                            e.target.reset();
                                        }}>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="message"
                                                className="block text-sm font-medium text-gray-700">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows="4"
                                                className="mt-1 p-2 w-full border rounded-md"></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                        <dialog id="submittedModal" className="modal">
                            <form method="dialog" className="modal-box bg-white">
                                <h3 className="font-bold text-lg">Thank you!</h3>
                                <p className="py-4">
                                    Your valuable comment had been uploaded to the database. Thx.
                                </p>
                                <div className="modal-action">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </div>
                            </form>
                        </dialog>
                    </>
                ) : (
                    <></>
                )}
            </div>
            <dialog id="loadingModal" className="modal">
                <form method="dialog" className="modal-box bg-gray-100 w-64">
                    <h3 className="font-bold text-lg">
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                "Loading ...... ......",
                                1000,
                                "Loading ",
                                1000,
                            ]}
                            wrapper="span"
                            speed={30}
                            style={{ display: "inline-block" }}
                            repeat={Infinity}
                            cursor={false}
                        />
                    </h3>
                    <div className=" my-auto h-44 relative">
                        <div className={loadingAniOuter + loadingAniCommon}></div>
                        <div className={loadingAniMid + loadingAniCommon}></div>
                        <div className={loadingAniInner + loadingAniCommon}></div>
                    </div>
                    <div className="flex flex-row mx-auto gap-2">
                        <img
                            className="h-8 w-8 my-auto"
                            id="randpic"
                            src={randPicList[randnum]}></img>
                        <p className="my-auto text-xs">
                            Tip: <br></br>
                            {randTips[randnum]}
                        </p>
                    </div>
                </form>
            </dialog>
        </>
    );
}
export default Instruction_utils;
