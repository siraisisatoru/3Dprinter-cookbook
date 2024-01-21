import React from "react";
import { useNavigate } from "react-router-dom";

function NoMatch() {
    const navigate = useNavigate();

    return (
        <>
            <div >
                <input type="checkbox" id="loading-modal" className="modal-toggle" defaultChecked />
                <div id="modal-div" className="modal">
                    <div className="modal-box opacity-90 bg-gray-100">
                        <h3 id="loading-modal-text" className="font-bold text-lg">
                            Oooops, you entered the Peach Garden.
                        </h3>
                        <div className="text-center">
                            <p>
                                <br></br>
                                You only live once. Why don't you take a cup of wine and have a
                                piece of cake?
                                <br></br>
                                <br></br>
                                梔子花開的時節，讓我們江湖再見。
                                <br></br>
                                <br></br>
                            </p>

                            <button className="btn btn-block" onClick={() => navigate("/")}>
                                The direction to home
                            </button>
                        </div>
                    </div>
                </div>

                <div className="h-screen w-screen overflow-hidden">
                    <img className="object-cover w-full h-full " src="/img/IMG_0061.JPG"></img>
                </div>
            </div>
        </>
    );
}

export default NoMatch;
