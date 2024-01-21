import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer className="bg-white mt-auto">
                <div className="mx-auto max-w-screen-xl space-y-4 px-4 py-8 sm:px-15 lg:space-y-8 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div className="flex justify-center gap-2">
                            <object
                                data="/sampleLogo.svg"
                                className="h-16 pointer-events-none my-auto"></object>
                            <p className="text-gray-500 my-auto">
                                Discover the delightful recipe you'll want to have near your 3D
                                printers
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 sm:col-span-2 sm:grid-cols-3">
                            <div className="collapse sm:collapse-open max-sm:collapse-arrow  bg-gray-50 sm:bg-white">
                                <input type="checkbox" />
                                <div className="collapse-title font-medium text-gray-900 ">
                                    Company
                                </div>
                                <div className="collapse-content">
                                    <ul className=" space-y-4 text-sm">
                                        <li>
                                            <Link to="/aboutus#aboutUS"> About us </Link>
                                        </li>
                                        <li>
                                            <Link to="/aboutus#career"> Career</Link>
                                        </li>
                                        <li>
                                            <Link to="/aboutus#contact"> Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="collapse sm:collapse-open max-sm:collapse-arrow  bg-gray-50 sm:bg-white">
                                <input type="checkbox" />
                                <div className="collapse-title font-medium text-gray-900 ">
                                    Social
                                </div>
                                <div className="collapse-content">
                                    <ul className=" space-y-4 text-sm">
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center space-x-3 hover:text-sky-400 transition"
                                                target="_blank">
                                                <FontAwesomeIcon icon={brands("x-twitter")} />
                                                <span>Twitter</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.youtube.com/channel/UCHVmOdXS8cuE0-tP09ZbxoA"
                                                className="flex items-center space-x-3 hover:text-sky-400 transition"
                                                target="_blank">
                                                <FontAwesomeIcon icon={brands("youtube")} />
                                                <span>YouTube</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.facebook.com/profile.php?id=61550889012665"
                                                className="flex items-center space-x-3 hover:text-sky-400 transition"
                                                target="_blank">
                                                <FontAwesomeIcon icon={brands("facebook")} />
                                                <span>Facebook</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="collapse sm:collapse-open max-sm:collapse-arrow  bg-gray-50 sm:bg-white">
                                <input type="checkbox" />
                                <div className="collapse-title font-medium text-gray-900">
                                    Downloads
                                </div>
                                <div className="collapse-content">
                                    <ul className=" space-y-4 text-sm">
                                        <li>
                                            <a
                                                href="https://ultimaker.com/software/ultimaker-cura/"
                                                className="text-gray-700 transition hover:text-sky-400"
                                                download>
                                                UltiMaker Cura
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.thingiverse.com/"
                                                className="text-gray-700 transition hover:text-sky-400"
                                                download>
                                                UltiMaker Thingiverse
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50">
                    <div className="relative mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8 ">
                        <div className="lg:flex lg:items-end lg:justify-between">
                            <div className="lg:my-auto flex justify-center items-center">
                                <p className=" text-center  text-xs text-gray-500">
                                    &copy; 2024. Sample. All rights reserved.
                                </p>
                            </div>

                            <ul className="mt-5 lg:my-auto flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:gap-12 ">
                                <li>
                                    <button
                                        className="text-xs text-gray-500 transition hover:opacity-75"
                                        onClick={() =>
                                            document.getElementById("TandC").showModal()
                                        }>
                                        Terms & Conditions
                                    </button>
                                    <dialog id="TandC" className="modal">
                                        <div className="modal-box bg-white">
                                            <h3 className="font-bold text-lg">
                                                Terms & Conditions
                                            </h3>
                                            <h1 className="text-red-700 text-sm">From GPT3.5</h1>
                                            <div className="overflow-y-auto h-32">
                                                <div className="text-wrap ">
                                                    1. Acceptance of Terms By accessing or using our
                                                    website, you agree to comply with and be bound
                                                    by these terms and conditions.
                                                </div>
                                                <div className="text-wrap ">
                                                    2. Use of Content All content provided on this
                                                    website is for informational purposes only. We
                                                    reserve the right to modify or discontinue any
                                                    aspect of the website at any time.
                                                </div>
                                                <div className="text-wrap ">
                                                    3. User Conduct You agree not to engage in any
                                                    activity that may interfere with the proper
                                                    working of the website.
                                                </div>
                                                <div className="text-wrap ">
                                                    4. Intellectual Property All content,
                                                    trademarks, and intellectual property on this
                                                    website are owned by us.
                                                </div>
                                                <div className="text-wrap ">
                                                    5. Governing Law These terms are governed by the
                                                    laws of Australia.
                                                </div>
                                                <div className="text-wrap ">
                                                    6. Contact Information For questions or concerns
                                                    regarding these terms.
                                                    <div>General Inquiries: +1 (555) 123-4567</div>
                                                    <div>Customer Support: +1 (555) 987-6543</div>
                                                </div>
                                            </div>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    <button className="">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                        <form method="dialog" className="modal-backdrop">
                                            <button>close</button>
                                        </form>
                                    </dialog>
                                </li>

                                <li>
                                    <button
                                        className="text-xs text-gray-500 transition hover:opacity-75"
                                        onClick={() => document.getElementById("PP").showModal()}>
                                        Privacy Policy
                                    </button>
                                    <dialog id="PP" className="modal">
                                        <div className="modal-box bg-white">
                                            <h3 className="font-bold text-lg">Privacy Policy</h3>
                                            <h1 className="text-red-700 text-sm">From GPT3.5</h1>
                                            <div className="overflow-y-auto h-32">
                                                <div className="text-wrap ">
                                                    1. Information We Collect We may collect
                                                    personal information such as names, email
                                                    addresses, and demographic information for the
                                                    purpose of providing better services.
                                                </div>
                                                <div className="text-wrap ">
                                                    2. Use of Information We use collected
                                                    information to personalize user experience,
                                                    improve our website, and send periodic emails.
                                                </div>
                                                <div className="text-wrap ">
                                                    3. Security We implement a variety of security
                                                    measures to maintain the safety of your personal
                                                    information.
                                                </div>
                                                <div className="text-wrap ">
                                                    4. Cookies Our website may use cookies to
                                                    enhance user experience. You can choose to
                                                    disable cookies through your browser settings.
                                                </div>
                                                <div className="text-wrap ">
                                                    5. Third-Party Links Our website may contain
                                                    links to third-party websites. We are not
                                                    responsible for the privacy practices or content
                                                    of these sites.
                                                </div>
                                                <div className="text-wrap ">
                                                    6. Changes to Privacy Policy We may update our
                                                    privacy policy. Check this page for the latest
                                                    information.
                                                </div>
                                                <div className="text-wrap ">
                                                    7. Contact Information If you have any questions
                                                    about our privacy policy, please contact us.
                                                    <div>General Inquiries: +1 (555) 123-4567</div>
                                                    <div>Customer Support: +1 (555) 987-6543</div>
                                                </div>
                                            </div>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    <button className="">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                        <form method="dialog" className="modal-backdrop">
                                            <button>close</button>
                                        </form>
                                    </dialog>
                                </li>

                                <li>
                                    <button
                                        className="text-xs text-gray-500 transition hover:opacity-75"
                                        onClick={() =>
                                            document.getElementById("cookies").showModal()
                                        }>
                                        Cookies
                                    </button>
                                    <dialog id="cookies" className="modal">
                                        <div className="modal-box bg-white">
                                            <h3 className="font-bold text-lg">Cookies</h3>
                                            <h1 className="text-red-700 text-sm">From GPT3.5</h1>
                                            <div className="overflow-y-auto h-32">
                                                <div className="text-wrap ">
                                                    1. What Are Cookies Cookies are small files that
                                                    are placed on your computer when you visit a
                                                    website. They are used to enhance user
                                                    experience.
                                                </div>
                                                <div className="text-wrap ">
                                                    2. How We Use Cookies We use cookies to analyze
                                                    website traffic, personalize content, and
                                                    provide targeted advertisements.
                                                </div>
                                                <div className="text-wrap ">
                                                    3. Types of Cookies - Essential Cookies:
                                                    Necessary for the website to function properly.
                                                    - Analytical Cookies: Help us understand how
                                                    users interact with our website. - Targeting
                                                    Cookies: Used to deliver personalized
                                                    advertisements.
                                                </div>
                                                <div className="text-wrap ">
                                                    4. Managing Cookies You can choose to disable
                                                    cookies through your browser settings. However,
                                                    this may affect the functionality of the
                                                    website.
                                                </div>
                                                <div className="text-wrap ">
                                                    5. Changes to Cookies Policy We may update our
                                                    cookies policy. Check this page for the latest
                                                    information.
                                                </div>
                                                <div className="text-wrap ">
                                                    6. Contact Information If you have any questions
                                                    about our cookies policy, please contact us.
                                                    <div>General Inquiries: +1 (555) 123-4567</div>
                                                    <div>Customer Support: +1 (555) 987-6543</div>
                                                </div>
                                            </div>

                                            <div className="modal-action">
                                                <form method="dialog">
                                                    <button className="">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                        <form method="dialog" className="modal-backdrop">
                                            <button>close</button>
                                        </form>
                                    </dialog>
                                </li>
                            </ul>

                            <div className="mt-5 lg:my-auto flex justify-center text-center ">
                                <p className=" my-auto text-center text-gray-500 lg:text-right text-xs">
                                    version {BUILD_TIMESTAMP}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;
