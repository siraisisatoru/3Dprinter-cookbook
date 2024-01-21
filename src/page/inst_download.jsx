import { useEffect, React } from "react";
import parse from "html-react-parser";

import Nav_bar from "../utils/nav_bar";
import Footer from "../utils/footer";
import { useNavigate } from "react-router-dom";

import Instruction_utils from "../utils/instruction.utils";

function Inst_download() {
    const navigate = useNavigate();

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
            <div className="">
                <Instruction_utils dummy={false} />
            </div>
            <Footer />
        </>
    );
}
export default Inst_download;
