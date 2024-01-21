import React from "react";
import { useNavigate } from "react-router-dom";
import InputTypingAnime from "./inputTypingAnime";
import { pushHistory } from "../js/firebase.utils";
import gptAPI from "../js/gptAPI.js";
import { TypeAnimation } from "react-type-animation";

function deduceQuota() {
    if (localStorage.getItem("mode") != "member") {
        localStorage.setItem("access_count", localStorage.getItem("access_count") - 1);
        if (localStorage.getItem("access_count") <= 0) {
            localStorage.setItem("mode", "STOP");
            localStorage.setItem("access_count", 0);
        }
    }
}

function Gptengine_utils(props) {
    let disabled;
    let selected = [];
    // console.log(props);
    if (props.dummy) {
        console.log("for front page");
        disabled = true;
        selected = gptAPI.selectedDummy;
        console.log(selected)
    } else {
        console.log("for engine page");
        disabled = false;
        selected = gptAPI.selectedDefault;
    }
    const navigate = useNavigate();

    const loadingAniCommon =
        "border-2 border-solid border-transparent border-t-gray-400 border-r-gray-400 rounded-full absolute top-1/2 left-1/2";
    const loadingAniOuter = "animate-spin-loading-out w-28 h-28 -ml-14 -mt-14 ";
    const loadingAniMid = "animate-spin-loading-mid middle w-16 h-16 -ml-8 -mt-8 ";
    const loadingAniInner = "animate-spin-loading-inner inner w-6 h-6 -ml-3 -mt-3 ";

    const randPicList = new Array(  "/img/randompic/randpic1.png",
                                    "/img/randompic/randpic2.png",
                                    "/img/randompic/randpic3.png",
                                    "/img/randompic/randpic4.png",
                                    "/img/randompic/randpic5.png",);

    const randTips = [
        "Thinner layers = smoother prints.",
        "Higher density = stronger, but longer.",
        "Needed for overhangs. Remove post-print.",
        "Clean and lubricate regularly.",
        "Check recommended temperatures.",
    ] 

    const randnum = Math.floor(Math.random() * randPicList.length);

    const clickCB = async (e) => {
        e.preventDefault();

        console.log(e.target[0].value); //Printer 1
        console.log(e.target[1].value); //Filament 1
        console.log(e.target[2].value); //Slow
        console.log(e.target[3].value); //Low
        console.log(e.target[4].value); //Short
        console.log(e.target[5].value); //1.2

        let gptprompt = gptAPI.input2prompt([
            e.target[0].value,
            e.target[1].value,
            e.target[2].value,
            e.target[3].value,
            e.target[4].value,
            e.target[5].value,
        ]);
        
        if (localStorage.getItem("access_count") > 0 || localStorage.getItem("authUser")) {
            deduceQuota();

            console.log("send request");


            // add loading effect

            document.getElementById("loadingModal").classList.add("modal-open");

            // end loading effect

            await gptAPI.sendInput(gptprompt);
            console.log(gptprompt);

            console.log("get response");

            pushHistory({
                input: gptprompt,
                output: JSON.parse(localStorage.getItem("lastInputOutput")).output ,
            });

            document.getElementById("loadingModal").classList.remove("modal-open");

            navigate("/instructions");
        }
    };

    return (
        <>
            <div className=" flex justify-center items-center ">
                <form
                    className="bg-gray-200  p-8 rounded-lg shadow-md w-96 sm:w-auto md:w-auto lg:w-1/2 xl:w-1/2 my-4"
                    onSubmit={(e) => {
                        clickCB(e);
                    }}>
                    <h2 className="text-2xl font-bold mb-8 text-center">Enter Your Information</h2>
                    <div className="printType text-center mb-4">
                        <label htmlFor="printerSelect" className="font-semibold">
                            Select the make and model of your printer:
                        </label>
                        <br></br>

                        <select
                            id="printerSelect"
                            className="w-40 text-center bg-gray-50 shadow-md"
                            disabled={disabled}
                            defaultValue={selected[0]}
                            required={true}>
                            <option value="Ultimaker S5">Ultimaker S5</option>
                            <option value="Prusa i3 MK3S+">Prusa i3 MK3S+</option>
                            <option value="Creality Ender 3 V2">Creality Ender 3 V2</option>
                            <option value="LulzBot TAZ Workhorse">LulzBot TAZ Workhorse</option>
                            <option value="Anycubic i3 Mega">Anycubic i3 Mega</option>
                            <option value="Artillery Sidewinder X1">Artillery Sidewinder X1</option>
                            <option value="MakerBot Replicator+">MakerBot Replicator+</option>
                            <option value="Dremel Digilab 3D45">Dremel Digilab 3D45</option>
                            <option value="BQ Witbox 2">BQ Witbox 2</option>
                        </select>
                        <br></br>
                    </div>
                    <div className="filaType text-center mb-4">
                        <label htmlFor="filaSelect" className="font-semibold">
                            Select the type and manufacturer of your filament:
                        </label>
                        <br></br>
                        <select
                            id="filaSelect"
                            className="w-40 text-center bg-gray-50 shadow-md"
                            disabled={disabled}
                            defaultValue={selected[1]}
                            required={true}>
                            <option value="Monoprice 110551 PLA 3D Printer Filament - Black, 1kg Spool, 1.75mm Thick">
                                Monoprice 110551 PLA 3D Printer Filament - Black, 1kg Spool, 1.75mm
                                Thick
                            </option>
                            <option value="PLA-LW Filament 1.75mm, Lightweight, Low-Density PLA, 1kg Spool by MSNJ">
                                PLA-LW Filament 1.75mm, Lightweight, Low-Density PLA, 1kg Spool by
                                MSNJ
                            </option>
                            <option value="PLA Filament 1.75mm, Model Number: TJ-3DPLA">
                                PLA Filament 1.75mm, Model Number: TJ-3DPLA
                            </option>
                            <option value="PLASPORT Silk Tri-Color Coextruded PLA, 1.75mm±0.03, 1kg/2.2lbs Spool">
                                PLASPORT Silk Tri-Color Coextruded PLA, 1.75mm±0.03, 1kg/2.2lbs
                                Spool
                            </option>
                        </select>
                        <br></br>
                    </div>
                    <div className="determineSpeed text-center mb-4">
                        <label htmlFor="printSpeed" className="font-semibold">
                            Select your preffered printing speed:
                        </label>
                        <p className="text-xs text-gray-600">
                            Note: This is related to the time it takes to print.
                        </p>
                        <select
                            id="printSpeed"
                            className="w-40 text-center bg-gray-50 shadow-md"
                            disabled={disabled}
                            defaultValue={selected[2]}
                            required={true}>
                            <option value="Slow">Slow</option>
                            <option value="Moderate">Moderate</option>
                            <option value="Normal">Normal</option>
                            <option value="Fast">Fast</option>
                            <option value="Ultra Fast">Ultra Fast</option>
                        </select>
                        <br></br>
                    </div>
                    <div className="determineQuality text-center mb-4">
                        <label htmlFor="printerSelect" className="font-semibold">
                            Select your preffered printing quality:
                        </label>
                        <p className="text-xs text-gray-600">
                            Note: This is related to the resolution of the print.
                        </p>
                        <select
                            id="printerSelect text-center "
                            className="w-40 text-center bg-gray-50 shadow-md"
                            disabled={disabled}
                            defaultValue={selected[3]}
                            required={true}>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                        <br></br>
                    </div>
                    <div className="determineQuality text-center mb-4">
                        <label htmlFor="printerSelect" className="font-semibold">
                            Please provide the approximate height of the model:
                        </label>
                        <p className="text-xs text-gray-600">
                            Note: Provide the maximum height of the product on the flat surface.
                            <br></br>
                            Short: 0-10cm Medium: 10-20cm Tall: 20-30cm
                        </p>
                        <select
                            id="printerSelect text-center "
                            className="w-40 text-center bg-gray-50 shadow-md"
                            disabled={disabled}
                            defaultValue={selected[4]}
                            required={true}>
                            <option value="Short">Short</option>
                            <option value="Medium">Medium</option>
                            <option value="Tall">Tall</option>
                        </select>
                        <br></br>
                    </div>
                    <div className="determineWidth text-center mb-8">
                        <label htmlFor="environmentSetup" className="font-semibold">
                            Please provide the approximate width of the model:
                        </label>
                        <p className="text-xs text-gray-600">
                            Note: Provide the maximum width of the product on the flat surface.
                        </p>

                        <div>
                            {props.dummy ? (
                                <InputTypingAnime
                                    type="text"
                                    id="wName"
                                    className="w-40 text-center bg-gray-50 shadow-md"
                                    disabled={disabled}
                                    name="Print width"
                                    placeholder="40&#8203;"
                                />
                            ) : (
                                <input
                                    type="number"
                                    id="wName"
                                    className="w-40 text-center bg-gray-50 shadow-md"
                                    disabled={disabled}
                                    name="Print width"
                                    placeholder="Max Width (cm)"
                                    required={true}
                                    step="0.001"
                                    min="0"
                                />
                            )}
                            &nbsp;
                        </div>
                    </div>
                    <div className="flex justify-center sm:space-x-4 max-sm:gap-3 max-sm:flex-wrap ">
                        {props.dummy ? (
                            <>
                                <button className="rounded-full shadow-md text-center animate__animated animate__pulse animate__infinite bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-8 pointer-events-none ">
                                    Submit Response
                                </button>
                                <a className="rounded-full shadow-md  text-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-8 pointer-events-none ">
                                    Return home
                                </a>
                            </>
                        ) : (
                            <>
                                <button
                                    className="rounded-full shadow-md text-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-8"
                                    type="submit">
                                    Submit Response
                                </button>
                                <a
                                    className="rounded-full shadow-md text-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-8"
                                    href="\">
                                    Return home
                                </a>
                            </>
                        )}
                    </div>
                </form>
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
                            <img className="h-8 w-8 my-auto" id="randpic" src= {randPicList[randnum]}></img>
                            <p className="my-auto text-xs">Tip: <br></br>{randTips[randnum]}</p>
                    </div>
                </form>
            </dialog>
        </>
    );
}
export default Gptengine_utils;
