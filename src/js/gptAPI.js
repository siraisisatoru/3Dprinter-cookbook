// Defining a Helper module
import OpenAI from "openai";

const gptAPI = (function () {
    const serverWarning = `GPT SERVER IS DOWN OR ERROR OCCURRED. PLEASE TRY AGAIN OR FOLLOW THE GENERAL INSTRUCTIONS`;
    const defaultGPTIns = `
Instructions:
1. Unbox the 3D printer and all its components. 
2. Read the printer's user manual and make sure you understand all the instructions. 
3. Assemble the 3D printer, following the instructions in the user manual. 
4. Connect the 3D printer to a power source and turn it on. 
5. Install the 3D printing software on your computer. 
6. Calibrate the 3D printer, following the instructions in the user manual. 
7. Configure the 3D printing software with the correct settings for your 3D printer. 
8. Load the 3 mm PLA filament into the printer. 
9. Preheat the 3D printer to the correct temperature for the PLA filament. 
10. Use the 3D printing software to create a 3D model with the desired 3/10 smoothness. 
11. Use the 3D printing software to slice the 3D model into layers. 
12. Load the sliced 3D model into the 3D printing software. 
13. Set the 3D printing software to the desired 3/10 smoothness. 
14. Start the 3D printing process. 
15. Monitor the 3D printing process to ensure the 3/10 smoothness is achieved. 
16. Once the 3D printing process is complete, remove the 3D printed object from the 3D printer. 
17. Allow the 3D printed object to cool before handling. 
18. Inspect the 3D printed object to ensure the 3/10 smoothness is achieved. 
19. If necessary, adjust the 3D printing software settings and repeat steps 11-18. 
20. Dispose of the used PLA filament properly.
    `;

    let downloadLinks = `  
Download Links:
1. 3D Printed Chess Pieces: https://www.thingiverse.com/thing:6054837 
2. 3D Printed iPhone Stand: https://www.thingiverse.com/thing:938372
3. 3D Printed Car Parts: https://www.thingiverse.com/thing:3915186
4. 3D Printed Robot Model: https://www.thingiverse.com/thing:3666173 
5. 3D Printed Chess Board: https://www.thingiverse.com/thing:2825666 
6. 3D Printed Lamp Shade: https://www.thingiverse.com/thing:114976 
7. 3D Printed Pen Holder: https://www.thingiverse.com/thing:430689 
8. 3D Printed Bookend: https://www.thingiverse.com/thing:2987449 
9. 3D Printed Lamp: https://www.thingiverse.com/thing:584714 
10. 3D Printed Jewelry Box: https://www.thingiverse.com/thing:611745

    `;

    // ^put default value

    // input: prompt
    // output: local storage "lastInputOutput"
    async function sendInput(prompt, from = "gpt") {
        // set api key and define used engine

        const openai = new OpenAI({
            apiKey: import.meta.env.VITE_OPENAI_API,
            dangerouslyAllowBrowser: true,
        });

        // send the API request
        try {
            const response = await openai.chat.completions.create({
                model: import.meta.env.VITE_GPT_MODEL,
                messages: [
                    {
                        role: "user",
                        content:
                            prompt +
                            "Please begin the instruction section with 'Instructions:'." +
                            "Please provide instructions that are specific with actual temperature and actual required time.",
                    },
                ],
                temperature: 0.5,
                max_tokens: 2048,
                top_p: 1,
                frequency_penalty: 0.2,
                presence_penalty: 0,
            });
            console.log(response);
            console.log("Output:", response.choices[0].message.content);
            let gptOutput = "";
            if (response.choices[0].message.content.length > 0) {
                gptOutput = response.choices[0].message.content;
            }

            if (from == "ins" && JSON.parse(localStorage.getItem("lastInputOutput")).regenerated) {
                localStorage.setItem(
                    "lastInputOutput",
                    JSON.stringify({
                        input: prompt,
                        output: gptOutput,
                        regenerated: true,
                    })
                );
            } else {
                localStorage.setItem(
                    "lastInputOutput",
                    JSON.stringify({
                        input: prompt,
                        output: gptOutput,
                    })
                );
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    function input2prompt(input) {
        // ** DO NOT MODIFY IT, IT IS FOR GPT PROMPT

        return (
            "Good day, ChatGPT! I am now having " +
            input[0] +
            ", and want to print some stuff with " +
            input[1] +
            " I want my print at a " +
            input[2] +
            " speed with a " +
            input[3] +
            " quality outcome. The print will be " +
            input[4] +
            " height and " +
            input[5] +
            " cm wide. Can you help me by producing some instructions to set up the printer?"
        );
    }

    const selectedDummy = [
        "BQ Witbox 2",
        "PLA Filament 1.75mm, Model Number: TJ-3DPLA",
        "Fast",
        "Medium",
        "Tall",
        "40",
    ];
    const selectedDefault = [
        "Ultimaker S5",
        "Monoprice 110551 PLA 3D Printer Filament - Black, 1kg Spool, 1.75mm Thick",
        "Slow",
        "Low",
        "Short",
    ];

    function renderOutput(dummy = false, forPDF = false, outputStr = "") {
        const pattern =
            /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/g;

        let gptOutput = "";
        if (dummy) {
            gptOutput = defaultGPTIns;
        } else {
            if (outputStr == "") {
                // ......

                // check local storage "lastInputOutput" == ""
                if (JSON.parse(localStorage.getItem("lastInputOutput")).output == "") {
                    // if yes, store serverWarning + defaultGPTIns to gptOutput
                    gptOutput = serverWarning + "\n" + defaultGPTIns;
                } else {
                    // if not store lastInputOutput value to gptOutput
                    gptOutput = JSON.parse(localStorage.getItem("lastInputOutput")).output;
                    gptOutput = gptOutput.replace("(Note:", "<ins><br></ins>(<i>Note:</i>");
                }

                // ......
            } else {
                gptOutput = outputStr;
            }
        }

        let sampleIns = gptOutput;
        let sampleDownload = downloadLinks;

        sampleIns = sampleIns.replace(/\d{1,2}\.\ (?!\ \d{1,2}\.)/g, "<ins><br></ins>$&");
        sampleIns = sampleIns.replace("Instructions:", "");
        if (JSON.parse(localStorage.getItem("lastInputOutput")).regenerated && outputStr == "") {
            // sampleIns = " Regenerate.";
            sampleIns = sampleIns.replace(
                "<ins><br></ins>",
                "<b>Regenerate instructions.</b> <br> <b>Instructions:<br></b>"
            );
        } else {
            sampleIns = sampleIns.replace("<ins><br></ins>", "<b>Instructions:<br></b>");
        }

        sampleDownload = sampleDownload.replace(/\d{1,2}\.\ (?!\ \d{1,2}\.)/g, "<ins><br></ins>$&");
        sampleDownload = sampleDownload.replace(
            pattern,
            "<a href='$&' class='text-blue-800'>$&</a>"
        );
        // console.log(sampleDownload);
        sampleDownload = sampleDownload.replace("Download Links:", "");
        sampleDownload = sampleDownload.replace("<ins><br></ins>", "<b>Downloads:<br></b>");

        if (forPDF) {
            sampleIns = sampleIns.replaceAll("<ins>", "").replaceAll("</ins>", "");
            sampleDownload = sampleDownload.replaceAll("<ins>", "").replaceAll("</ins>", "");

            return {
                instructions: sampleIns,
                downloads: sampleDownload,
            };
        } else {
            return { instructions: sampleIns, downloads: sampleDownload };
        }
    }

    function renderInput(dummy = false, inputStr = "") {
        /*
        This function is used to filter the GPT prompt. Will be called in both front page and the instruction page
        - input: dummy [true / false]
            true: front page
            false: ins page
        - output: return str
            str: html code that can directly displayed
        */
        let outputStr = "test";
        let inputArr = [];

        // console.log(dashboard);

        if (dummy) {
            //'{"input":"Hey, ChatGPT! I have printer 3, and want to print some stuff with filament 2 with 0.4 mm nozzle. I want to print with a medium speed with a high quality outcome. The print will be 30 cm height and 40 cm wide. Can you help me by producing some instructions to set up the printer and also come relevant links for me to find further information and downloadable examples?"}';
            inputArr = selectedDummy;
            outputStr = [
                "Hey, ChatGPT! I have the " +
                    inputArr[0] +
                    ", and want to print some stuff using " +
                    inputArr[1] +
                    " with a 0.4mm nozzle. I want to print using a " +
                    inputArr[2] +
                    " speed with a " +
                    inputArr[3] +
                    " quality outcome. The print will be " +
                    inputArr[4] +
                    " height and will be " +
                    inputArr[5] +
                    "cm wide. Can you help me by producing some instructions to set up the printer and also some relevant links for me to find further information and downloadable examples?",
            ];
        } else {
            // console.log("else if ");

            if (inputStr == "") {
                var userprompt = JSON.parse(localStorage.getItem("lastInputOutput")).input;
            } else {
                var userprompt = inputStr;
            }

            inputArr = userprompt.replace(
                " cm wide. Can you help me by producing some instructions to set up the printer?",
                ""
            );
            inputArr = inputArr
                .replace("Good day, ChatGPT! I am now having ", "")
                .split(", and want to print some stuff with ");

            inputArr.push(inputArr[inputArr.length - 1].split(" I want my print at a "));
            inputArr.splice(1, 1);
            inputArr.splice(1, 0, inputArr[inputArr.length - 1][0]);
            // inputArr = inputArr.slice(0,1)
            inputArr[inputArr.length - 1].splice(0, 1);
            inputArr[inputArr.length - 1] =
                inputArr[inputArr.length - 1][0].split(" speed with a ");
            inputArr.splice(2, 0, inputArr[inputArr.length - 1][0]);

            inputArr[inputArr.length - 1].splice(0, 1);
            inputArr[inputArr.length - 1] = inputArr[inputArr.length - 1][0].split(
                " quality outcome. The print will be "
            );
            inputArr.splice(3, 0, inputArr[inputArr.length - 1][0]);

            inputArr[inputArr.length - 1].splice(0, 1);
            inputArr[inputArr.length - 1] = inputArr[inputArr.length - 1][0].split(" height and ");
            inputArr.splice(4, 0, inputArr[inputArr.length - 1][0]);

            inputArr[inputArr.length - 1] = inputArr[inputArr.length - 1][1];

            outputStr = [
                "Hey, ChatGPT! I have the " +
                    inputArr[0] +
                    ", and want to print some stuff using " +
                    inputArr[1] +
                    " with a 0.4mm nozzle. I want to print using a " +
                    inputArr[2] +
                    " speed with a " +
                    inputArr[3] +
                    " quality outcome. The print will be " +
                    inputArr[4] +
                    " height and will be " +
                    inputArr[5] +
                    "cm wide. Can you help me by producing some instructions to set up the printer and also some relevant links for me to find further information and downloadable examples?",
            ];
        }
        /**
         * use the inputArr to make instruction input
         * AKA sth similar to 'input2prompt' but with proper english
         * Just for user view
         * there are opportunities speed need 'an' or 'a'
         */
        // ---------------------------
        // TODO: set outputStr

        // ---------------------------

        // console.log(outputStr.replace('<ins>','').replace('</ins>',''));

        return outputStr;
    }

    // Returning the functions
    return {
        sendInput: sendInput,
        renderInput: renderInput,
        renderOutput: renderOutput,
        input2prompt: input2prompt,
        selectedDummy: selectedDummy,
        selectedDefault: selectedDefault,
    };
})();

export default gptAPI;
