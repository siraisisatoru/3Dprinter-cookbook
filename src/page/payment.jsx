import React from "react";
import Nav_bar from "../utils/nav_bar";
import Footer from "../utils/footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { makePayed, getMemberinfo } from "../js/firebase.utils";
import { TypeAnimation } from "react-type-animation";

function Payment() {
    const navigate = useNavigate();
    let memberInfo = "";

    (async () => {

        memberInfo = await getMemberinfo();
        console.log(memberInfo);
        if (memberInfo.payed) {
            navigate("/");
        }

        document.getElementById("loadingModal").classList.remove("modal-open");

    })();

    let flag = true;

    if (localStorage.getItem("MonthPlan") == "true") {
        flag = true;
    } else {
        flag = false;
    }

    const [monthplan, setPlan] = useState(flag);

    function UpgradeClickHandle(event) {
        localStorage.removeItem("MonthPlan");

        (async () => {
            makePayed();
        })();

        navigate("/dashboard");
    }


    const loadingAniCommon =
        "border-2 border-solid border-transparent border-t-gray-400 border-r-gray-400 rounded-full absolute top-1/2 left-1/2";
    const loadingAniOuter = "animate-spin-loading-out w-28 h-28 -ml-14 -mt-14 ";
    const loadingAniMid = "animate-spin-loading-mid middle w-16 h-16 -ml-8 -mt-8 ";
    const loadingAniInner = "animate-spin-loading-inner inner w-6 h-6 -ml-3 -mt-3 ";


    return (
        <>
            <Nav_bar />
            <dialog id="loadingModal" className="modal modal-open">
                <form method="dialog" className="modal-box bg-gray-100 w-64">
                    <h3 className="font-bold text-lg">
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                "Verifying ...... ......",
                                1000,
                                "Verifying ",
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
                </form>
            </dialog>

            <div className="flex flex-1 flex-col overflow-y-auto p-7 mx-2">
                <h1 className="text-3xl"> Payment </h1>
                <br></br>
                <div className="flex flex-col place-items-center">
                    <p>
                        !Reminder: This function is just a demonstration, and any operations
                        performed by users on this page will not incur charges.!
                    </p>
                    <br></br>

                    <div
                        className="flex flex-col w-64 h-min-40 p-5 bg-gray-200 place-items-center"
                        style={{ borderRadius: "20px" }}>
                        <div className="flex flex-col w-auto h-min-40 gap-4 place-items-center sm:w-80">
                            <div className="flex text-center">
                                <p>Selected Plan: {monthplan ? "Month Plan" : "Year Plan"}</p>
                            </div>
                            <div className="flex text-center">
                                <p>Fee: {monthplan ? "AUD$ 20 " : "AUD$ 180"}</p>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="flex h-20 place-items-center">
                        <button
                            className="btn btn-outline btn-sm hover:btn-md"
                            onClick={UpgradeClickHandle}>
                            Thx and Upgrade
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Payment;
