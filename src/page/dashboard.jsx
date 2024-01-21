import { useEffect, useState, React } from "react";
import { useNavigate } from "react-router-dom";

import Nav_bar from "../utils/nav_bar";
import Footer from "../utils/footer";

import { getMemberinfo, getAllHistory, getLastHistory } from "../js/firebase.utils";

import gptAPI from "../js/gptAPI.js";
import parse from "html-react-parser";

const extractKeyDetails = (content) => {
    const matches = content.match(
        /Good day, ChatGPT! I am now having (.+?), and want to print some stuff with (.+?) I want my print at a (.+?) speed with a (.+?) quality outcome. The print will be (.+?) height and (.+?) cm wide. Can you help me by producing some instructions to set up the printer\?/
    );
    return matches ? matches.slice(1).join(", ") : "";
};

function Dashboard() {
    const navigate = useNavigate();

    if (localStorage.getItem("mode") === "member") {
        // console.log("member mode");
    } else {
        // console.log("error happened or trial mode");
        // trial mode users should not enter this page and return to where it came from
        useEffect(() => {
            navigate("/");
        }, []);
    }
    const [conversationHistories, setConversationHistories] = useState([]);
    const [selectedHistory, setSelectedHistory] = useState(null);

    const fetchConversationHistories = async () => {
        let history = {};
        let memberInfo = await getMemberinfo();
        console.log(memberInfo);
        if (memberInfo.member) {
            var membership = document.getElementById("membership");

            if (memberInfo.payed) {
                history = await getAllHistory();
                membership.innerHTML = "Membership: Subscribed. Thank you.";
            } else {
                history = await getLastHistory();
                membership.innerHTML = "Membership: Member.";
            }

            var simulatedData = [];

            for (const his in history) {
                var hisStr = history[his];
                // console.log(hisStr["output"]);
                simulatedData.push({
                    id: simulatedData.length + 1,
                    content: hisStr["input"],
                    gptOutput: hisStr["output"],
                });
            }

            setConversationHistories(simulatedData);

            // Set the default selected history to the first history
            if (simulatedData.length > 0) {
                setSelectedHistory(simulatedData[0]);
            }
        }
    };

    // Function to handle selecting a history
    const handleSelectHistory = (history) => {
        setSelectedHistory(history);
    };

    useEffect(() => {
        // Fetch conversation histories when the component mounts
        fetchConversationHistories();
    }, []); // Run this effect only once on component mount

    return (
        <>
            <Nav_bar />

            <div className="flex flex-1 flex-col p-7 gap-6">
                <h1 className="text-3xl">Dashboard</h1>

                <div className="ml-6">
                    <div className="flex flex-1 flex-row gap-6">
                        {/* member info */}
                        <div className=" my-auto">
                            <img
                                src={JSON.parse(localStorage.getItem("authUser")).photoURL}
                                className="h-18 w-18 rounded-lg"></img>
                        </div>
                        <div className="flex flex-col my-auto text-xl gap-4">
                            <div>
                                Hi, {JSON.parse(localStorage.getItem("authUser")).displayName}
                            </div>
                            <div id="membership">Membership: </div>
                        </div>
                    </div>
                </div>

                {/* <div className=" bg-pink-50"> */}
                <div >
                    <h1 className="text-2xl font-bold mb-4">Your querry record list</h1>

                    {/* Table to display conversation histories */}

                    <div className="overflow-y-auto max-h-96 lg:max-h-52">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">ID</th>
                                    <th className="py-2 px-4 border-b">Key Details</th>
                                    <th className="py-2 px-4 border-b">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {conversationHistories.length > 0 ? (
                                    conversationHistories.map((history) => (
                                        <tr key={history.id}>
                                            <td className="py-2 px-4 border-b">{history.id}</td>
                                            <td className="py-2 px-4 border-b">
                                                {extractKeyDetails(history.content)}
                                            </td>
                                            <td className="py-2 px-4 border-b">
                                                <button
                                                    className="text-blue-500 hover:text-blue-700 cursor-pointer"
                                                    onClick={() => handleSelectHistory(history)}>
                                                    View
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="3"
                                            className="text-center font-bold text-lg text-orange-600">
                                            No record
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Display selected history key details */}
                    {selectedHistory && (
                        <div className="mt-4">
                            <h2 className="text-2xl font-bold mb-2">Selected querry record:</h2>
                            {/* <p>{extractKeyDetails(selectedHistory.content)}</p> */}
                            {/* <p>{selectedHistory.content}</p> */}
                            {/* {gptAPI.renderInput(props.dummy, props.dashboard)} */}

                            <div className="box-content sm:mx-4 p-4 px-4 sm:px-8">
                                <div className="chat chat-end">
                                    <div className="chat-bubble bg-gray-200 shadow-md max-sm:text-sm">
                                        {gptAPI.renderInput(false, selectedHistory.content)}
                                    </div>
                                </div>

                                <div className="chat chat-start">
                                    <div
                                        className="chat-bubble bg-gray-200 shadow-md max-sm:text-sm"
                                        id="indDiv">
                                        <span>
                                            {parse(
                                                gptAPI.renderOutput(
                                                    false,
                                                    false,
                                                    selectedHistory.gptOutput
                                                ).instructions
                                            )}
                                        </span>
                                    </div>
                                </div>

                                <div className="chat chat-start">
                                    <div
                                        className="chat-bubble bg-gray-200 shadow-md break-words max-sm:text-sm"
                                        id="downloadDiv">
                                        {/* {parse(gptAPI.renderOutput(props.dummy, props.dashboard).downloads)} */}
                                        {parse(
                                            gptAPI.renderOutput(
                                                false,
                                                false,
                                                selectedHistory.gptOutput
                                            ).downloads
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
}
export default Dashboard;
