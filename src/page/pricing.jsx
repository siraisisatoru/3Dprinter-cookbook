import React, { useRef, useState, useEffect } from "react";
import Nav_bar from "../utils/nav_bar";
import Footer from "../utils/footer";
import { checkIsMember, signInWithGooglePopup, getMemberinfo } from "../js/firebase.utils";
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function IsLoggedIn() {
    const navigate = useNavigate();

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        // console.log(response);
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                console.log("user signed in");
                localStorage.setItem("authUser", JSON.stringify(user));
                localStorage.setItem("mode", "member");
                localStorage.setItem(
                    "lastInputOutput",
                    JSON.stringify({ input: "", output: "", regenerated: false })
                );
                // check the member already exists or not
                // add info to database
                checkIsMember(user);

                navigate("/dashboard", { replace: true });
            }
        });
    };

    if (localStorage.getItem("authUser") == null) {
        return (
            <div id="loginBtn" className="w-full flex flex-none h-16 place-items-center">
                <button
                    className="w-full btn btn-outline btn-md border-gray-300  hover:border-gray-400 hover:border-2 hover:bg-slate-200"
                    onClick={logGoogleUser}>
                    Log In
                </button>
            </div>
        );
    } else {
        return (
            <>
                <div id="trialBtn" className="flex h-16 max-md:h-0"></div>
            </>
        );
    }
}

function IsPayed(props) {
    const navigate = useNavigate();

    function PayedClickHandle(event) {
        localStorage.setItem("MonthPlan", props.mp);
        navigate("/payment");
    }

    let memberInfo = "";

    (async () => {
        memberInfo = await getMemberinfo();
    })();

    // let memberInfo = localStorage.getItem("memberInfo");
    if (localStorage.getItem("authUser") != null) {
        if (memberInfo.search(/"payed":true/i) == -1) {
            return (
                <>
                    <div id="payedBtn" className="w-full flex flex-none h-16 place-items-center">
                        <button
                            className="w-full btn btn-outline btn-sm hover:btn-md"
                            onClick={PayedClickHandle}>
                            Switch to
                        </button>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div id="payedBtn" className="flex h-16 max-md:h-0"></div>
                </>
            );
        }
    } else {
        return (
            <>
                <div id="payedBtn" className="flex h-16 max-md:h-0"></div>
            </>
        );
    }
}

function Pricing() {
    const navigate = useNavigate();

    const [monthplan, setPlan] = useState(true);

    function TimeClickHandle(event) {
        if (event.target.id == "month") {
            setPlan(true);
        } else {
            setPlan(false);
        }
    }

    let flag = false;

    if (localStorage.getItem("memberInfo") != null) {
        let info = localStorage.getItem("memberInfo");
        if (info.search(/"payed":true/i) != -1) {
            flag = true;
        } else {
            flag = false;
        }
    }

    const [hide, setHide] = useState(flag);

    useEffect(() => {
        const calculateHeights = () => {
            const heights = [0, 0, 0];
            for (let i = 1; i <= 3; i++) {
                const element = document.getElementById(`col-${i}-row-1`);
                element.style.minHeight = null;
                if (element) {
                    heights[i - 1] = element.clientHeight;
                }
            }
            for (let i = 1; i <= 3; i++) {
                const element = document.getElementById(`col-${i}-row-1`);
                element.style.minHeight = `${Math.max(heights[0], heights[1], heights[2])}px`;
            }
        };

        // Initial calculation
        calculateHeights();

        // Recalculate on window resize
        window.addEventListener("resize", calculateHeights);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", calculateHeights);
        };
    }, []);

    return (
        <>
            <Nav_bar />

            {/* https://github.com/pricing */}
            {/* ^reference */}
            <div className="p-7">
                <h1 className="text-3xl">Pricing</h1>
                <h2 className="text-lg text-center">How often do you want to pay?</h2>
                <div className="grid grid-cols-1 place-items-center ">
                    <div className="flex h-20 flex-row place-items-center">
                        <div className="flex w-full">
                            <div className="join">
                                <button
                                    id="month"
                                    className={
                                        monthplan
                                            ? "btn btn-outline bg-gray-300 join-item hover:bg-gray-300"
                                            : "btn btn-outline join-item hover:bg-slate-400"
                                    }
                                    onClick={TimeClickHandle}>
                                    Month
                                </button>
                                <button
                                    id="year"
                                    className={
                                        monthplan
                                            ? "btn btn-outline join-item hover:bg-slate-400"
                                            : "btn btn-outline  bg-gray-300 join-item hover:bg-gray-300"
                                    }
                                    onClick={TimeClickHandle}>
                                    Year <span className="text-pink-600"> 25% OFF</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 flex-col md:flex-row ">
                    <div className="flex flex-col bg-gray-100 p-3 m-3 rounded-lg h-fit shadow-lg md:w-1/3">
                        <div
                            className=" flex flex-col items-center justify-center rounded-lg m-1 md:m-5"
                            id="col-1-row-1">
                            <p className="text-center text-xl">Free trial</p>
                            <br></br>
                            <p className="text-center">
                                The basics for all users to test functionalities
                            </p>
                            <br></br>
                            <p className="text-center text-5xl">AUD$0 /month</p>
                        </div>

                        {hide ? <></> : <div id="trialBtn" className="flex h-16 max-md:h-0"></div>}
                        <div className="flex w-full flex-col place-items-center">
                            <div className="m-3 collapse bg-gray-200 md:collapse-open shadow-md text-sm">
                                <input type="checkbox" className="sm:!cursor-default" />
                                <div className="collapse-title flex items-center ">
                                    <p className="font-bold text-lg"> Usage</p>
                                </div>
                                <div className="collapse-content indent-4">
                                    <div>20 free access</div>
                                </div>
                            </div>
                            <div className="m-3 collapse bg-gray-200 md:collapse-open shadow-md text-sm">
                                <input type="checkbox" className="sm:!cursor-default" />
                                <div className="collapse-title flex items-center ">
                                    <p className="font-bold text-lg"> History</p>
                                </div>
                                <div className="collapse-content indent-4">
                                    <div>No history access</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-gray-100 p-3 m-3 rounded-lg h-fit  shadow-lg md:w-1/3">
                        <div
                            className="flex flex-col items-center justify-center rounded-lg m-1 md:m-5"
                            id="col-2-row-1">
                            <p className="text-center text-xl">Log in with Google</p>
                            <br></br>
                            <p className="text-center">Unlock quota and history store feature</p>
                            <br></br>
                            <p className="text-center text-5xl">AUD$0 /month</p>
                        </div>

                        {hide ? <></> : <IsLoggedIn />}

                        <div className="flex w-full flex-col place-items-center">
                            <div className="m-3 collapse bg-gray-200 md:collapse-open shadow-md text-sm">
                                <input type="checkbox" className="sm:!cursor-default" />
                                <div className="collapse-title flex items-center ">
                                    <p className="font-bold text-lg"> Usage</p>
                                </div>
                                <div className="collapse-content indent-4">
                                    <div>Unlimited</div>
                                </div>
                            </div>
                            <div className="m-3 collapse bg-gray-200 md:collapse-open shadow-md text-sm">
                                <input type="checkbox" className="sm:!cursor-default" />
                                <div className="collapse-title flex items-center ">
                                    <p className="font-bold text-lg"> History</p>
                                </div>
                                <div className="collapse-content indent-4">
                                    <div>Only last result</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-gray-100 p-3 m-3 rounded-lg h-fit shadow-lg md:w-1/3">
                        <div
                            className=" flex flex-col items-center justify-center rounded-lg m-1 md:m-5"
                            id="col-3-row-1">
                            <p className="text-center text-xl">Subscription</p>
                            <br></br>
                            <p className="text-center">Unlimited system access</p>
                            {monthplan ? (
                                <>
                                    <br></br>
                                    <p className="text-center text-5xl">AUD$20 /month</p>
                                </>
                            ) : (
                                <>
                                    <div className="text-center ">
                                        <p className="line-through text-md">AUD$20 /month</p>
                                        <p className="text-center text-5xl">AUD$15 /month</p>
                                    </div>
                                </>
                            )}
                        </div>

                        {hide ? <></> : <IsPayed mp={monthplan} />}

                        <div className="flex w-full flex-col  place-items-center ">
                            <div className="m-3 collapse bg-gray-200 md:collapse-open shadow-md text-sm">
                                <input type="checkbox" className="sm:!cursor-default" />
                                <div className="collapse-title flex items-center ">
                                    <p className="font-bold text-lg"> Usage</p>
                                </div>
                                <div className="collapse-content indent-4">
                                    <div>Unlimited</div>
                                </div>
                            </div>
                            <div className="m-3 collapse bg-gray-200 md:collapse-open shadow-md text-sm">
                                <input type="checkbox" className="sm:!cursor-default" />
                                <div className="collapse-title flex items-center ">
                                    <p className="font-bold text-lg"> History</p>
                                </div>
                                <div className="collapse-content indent-4">
                                    <div>All enquiries</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
export default Pricing;
