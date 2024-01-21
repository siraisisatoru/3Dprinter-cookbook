import { checkIsMember, signInWithGooglePopup } from "../js/firebase.utils";
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

function Nav_bar() {
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
                localStorage.setItem("lastInputOutput", JSON.stringify({ input: "", output: "" }));

                // check the member already exists or not
                // add info to database
                checkIsMember(user);

                navigate("/dashboard", { replace: true });
            }
        });
    };

    const logGoogleUserOut = async () => {
        const auth = getAuth();
        signOut(auth)
            .then(function () {
                // Sign-out successful.
                console.log("successfully log out");
                localStorage.removeItem("authUser");
                localStorage.removeItem("memberInfo");
                if (localStorage.getItem("access_count") > 0) {
                    localStorage.setItem("mode", "trial");
                } else {
                    localStorage.setItem("mode", "STOP");
                }
                localStorage.setItem("lastInputOutput", JSON.stringify({ input: "", output: "" }));

                navigate("/", { replace: true });
            })
            .catch(function (error) {
                // An error happened.
            });
    };

    return (
        <>
            <nav className="flex sticky top-0 z-50">
                <div className=" navbar bg-gray-100 ">
                    <div className="flex-1 ">
                        <a className="btn btn-ghost normal-case text-xl " href="\">
                            <div className="align-middle">
                                <object
                                    data="/sampleLogo.svg"
                                    className="h-10 pointer-events-none"></object>
                            </div>
                            <h1 className="font-SAMple">SAMple</h1>
                        </a>
                    </div>

                    <div className="flex-none justify-end ">
                        <ul className=" menu menu-horizontal ">
                            <li className="sm:hidden">
                                <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
                                    <label tabIndex="0" className="btn btn-xs btn-ghost">
                                        <FontAwesomeIcon icon={solid("ellipsis-vertical")} />
                                    </label>
                                    <ul
                                        tabIndex="0"
                                        className="dropdown-content z-[1] menu p-2 shadow bg-gray-200 rounded-box w-52">
                                        <li>
                                            <a className="md:text-base" href="\aboutus">About us</a>
                                        </li>
                                        <li>
                                            <a className="md:text-base" href="\pricing">Pricing</a>
                                        </li>
                                        <li>
                                            <a className="md:text-base" href="\gptengine">GPT engine</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <ul className="hidden sm:flex">
                                    <li>
                                        <a className="md:text-base" href="\aboutus">
                                            About us
                                        </a>
                                    </li>
                                    <li>
                                        <a className="md:text-base" href="\pricing">Pricing</a>
                                    </li>
                                    <li>
                                        <a className="md:text-base" href="\gptengine">GPT engine</a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
                                    <label tabIndex="0" className="">
                                        {localStorage.getItem("authUser") ? (
                                            <img
                                                src={
                                                    JSON.parse(localStorage.getItem("authUser"))
                                                        .photoURL
                                                }
                                                className="h-6 w-6 rounded-lg"></img>
                                        ) : (
                                            <FontAwesomeIcon icon={solid("user")} />
                                        )}
                                    </label>
                                    <ul
                                        tabIndex="0"
                                        className="dropdown-content z-[1] menu p-2 shadow bg-gray-200 rounded-box w-52">
                                        {localStorage.getItem("authUser") ? (
                                            <>
                                                <li>
                                                    <a className="md:text-base" href="\dashboard">
                                                        <FontAwesomeIcon
                                                            icon={solid("solar-panel")}
                                                        />
                                                        Dashboard
                                                    </a>
                                                </li>

                                                <li>
                                                    <button  className="md:text-base" onClick={logGoogleUserOut}>
                                                        <FontAwesomeIcon icon={brands("google")} />{" "}
                                                        Sign out
                                                    </button>
                                                </li>
                                            </>
                                        ) : (
                                            <li>
                                                <button className="md:text-base" onClick={logGoogleUser}>
                                                    <FontAwesomeIcon icon={brands("google")} /> Sign
                                                    in
                                                </button>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Nav_bar;
