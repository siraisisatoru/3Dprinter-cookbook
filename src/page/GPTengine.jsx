import { useEffect, React } from "react";

import Nav_bar from "../utils/nav_bar";
import Footer from "../utils/footer";

import Gptengine_utils from "../utils/gptengine.utils";

function GPTengine() {
    if (localStorage.getItem("mode") === "trial") {
        console.log("trial mode");
    } else if (localStorage.getItem("mode") === "member") {
        console.log("member mode");
    } else {
        console.log("error happened");
    }

    return (
        <>
            <Nav_bar />

            <div>
                {localStorage.getItem("authUser") ? (
                    <></>
                ) : (
                    <>
                        <div className="flex flex-wrap justify-center bg-red-100 border-4 border-red-600 my-2 mx-2">
                            <span className="my-2 mx-2">
                                <span className="font-bold text-2xl font-serif">WARNING!</span> You
                                are not logged in! You have {localStorage.getItem("access_count")}{" "}
                                remaining free trials. Please{" "}
                                <span className="text-blue-500 font-semibold inline-block cursor-pointer">
                                    log-in
                                </span>{" "}
                                to your account to gain access to your full user benefits.
                            </span>
                        </div>
                    </>
                )}
            </div>
            <div className="p-7">
                <h2 className="text-3xl  scroll-my-20">GPT Engine</h2>
            </div>
            <Gptengine_utils dummy={false} />

            <Footer />
        </>
    );
}
export default GPTengine;
