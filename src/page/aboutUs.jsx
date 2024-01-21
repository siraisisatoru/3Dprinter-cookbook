import React from "react";
import Nav_bar from "../utils/nav_bar";
import Footer from "../utils/footer";

function Aboutus() {
    return (
        <>
            <Nav_bar />
            <div className="flex flex-1 flex-col p-7">
                <div className=" ">
                    <h2 className="text-3xl  scroll-my-20" id="aboutUS">
                        About Us
                    </h2>

                    <br></br>
                    <div className="flex flex-wrap">
                        <div className="flex-1 p-4">
                            <div>
                                <h1 className="text-3xl">SAMple</h1>
                                <p>
                                    SAMple is a website development company that specializes in
                                    creating websites that use chatgpt, a natural language
                                    processing model that can generate realistic and coherent texts
                                    based on user inputs. One of their projects is a website that
                                    generates 3D printer settings using chatgpt, which allows users
                                    to customize their 3D printing preferences and get optimal
                                    results. The company aims to provide innovative and
                                    user-friendly solutions for various web development needs.
                                    ----Bing GPT4
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-40 my-auto">
                            <div className="flex justify-center items-center">
                                <img
                                    src="/img/groupPhoto/GPphoto.png"
                                    className="h-auto w-full max-h-60 max-w-60"
                                    alt="Sample Image"
                                    style={{ borderRadius: "60px" }}
                                />
                            </div>
                        </div>

                        <div className="flex-1 p-4">
                            <div>
                                <h1 className="text-3xl">Team</h1>
                                <p>
                                    The team behind SAMple consists of eight people who have diverse
                                    backgrounds and skills. They come from different countries, such
                                    as China, New Zealand, and Thailand, and have different roles in
                                    the company, such as web developers, designers, testers, and
                                    managers. The team members collaborate effectively and share
                                    their ideas and feedback with each other. They are passionate
                                    about web development and constantly seek to improve their
                                    skills and knowledge. ----Bing GPT4
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl">Team Members</h1>
                        <div className="flex flex-wrap justify-center">
                            <div
                                className="bg-gray-200  p-8 shadow-md sm:w-80 md:w-80 lg:w-80 xl:w-80 my-4 mx-4"
                                style={{ borderRadius: "100px" }}>
                                <div className="team-member">
                                    <img
                                        src="/img/devTeamIcon/Braeden.jpg"
                                        className="h-48 mx-auto my-2"
                                        style={{ borderRadius: "60px" }}
                                    />
                                    <h3 className="text-xl my-2 font-semibold">Braeden Camp</h3>
                                    <p className="mx-auto my-2">Title: Project Manager</p>
                                    <p className="mx-auto my-2">Belbin: Co-ordinator</p>
                                    <p>
                                        Hi I'm Braeden, I am from New Zealand and I studied
                                        Electrical Engineering as my undergraduate in America. I am
                                        currently studying my Masters in Biomedical Engineering.
                                        Within the team I am the project manager and also part of
                                        the web development team.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="bg-gray-200  p-8 shadow-md sm:w-80 md:w-80 lg:w-80 xl:w-80 my-4 mx-4"
                                style={{ borderRadius: "100px" }}>
                                <div className="team-member">
                                    <div
                                        className="h-48 w-48 overflow-hidden mx-auto my-2"
                                        style={{ borderRadius: "60px" }}>
                                        <img
                                            src="/img/devTeamIcon/Guangjian.jpg"
                                            className="w-48 mx-auto"
                                        />
                                    </div>
                                    <h3 className="text-xl my-2 font-semibold">Guangjian Li</h3>
                                    <p className="mx-auto my-2">Title: Quality Control Analyst</p>
                                    <p className="mx-auto my-2">Belbin: Monitor Evaluator</p>
                                    <p>
                                        Hello Everyone. I'm Guangjian Li. My current major is
                                        intelligent information, my undergraduate background is
                                        automation. I hold a quality control analyst role in the
                                        team and am a member of the web development team.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="bg-gray-200  p-8 shadow-md sm:w-80 md:w-80 lg:w-80 xl:w-80 my-4 mx-4"
                                style={{ borderRadius: "100px" }}>
                                <div className="team-member">
                                    <img
                                        src="/img/devTeamIcon/Haoyuan.jpg"
                                        className="h-48 mx-auto my-2"
                                        style={{ borderRadius: "60px" }}
                                    />
                                    <h3 className="text-xl my-2 font-semibold">Haoyuan Zhou</h3>
                                    <p className="mx-auto my-2">Title: Human Resource Specialist</p>
                                    <p className="mx-auto my-2">Belbin: Team Worker</p>
                                    <p>
                                        Hello World! I'm Haoyuan Zhou and I also go by Risk, I come
                                        from China. My major is Intelligent Information Engineering.
                                        I'm the human resource specialist and team worker in the
                                        group.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="bg-gray-200  p-8 shadow-md sm:w-80 md:w-80 lg:w-80 xl:w-80 my-4 mx-4"
                                style={{ borderRadius: "100px" }}>
                                <div className="team-member">
                                    <div
                                        className=" h-48 w-48 bg-white overflow-hidden mx-auto my-2"
                                        style={{ borderRadius: "60px" }}>
                                        <img
                                            src="/img/devTeamIcon/Beng.jpg"
                                            className="h-48 mx-auto "
                                        />
                                    </div>
                                    <h3 className="text-xl my-2 font-semibold">
                                        Phrommin (Beng) Phiansamoe
                                    </h3>
                                    <p className="mx-auto my-2">
                                        Title: Business Development Manager
                                    </p>
                                    <p className="mx-auto my-2">Belbin: Resource Investigator</p>
                                    <p>Hello World!</p>
                                    <p>
                                        I'm Phrommin and I also go by Beng. I came from Thailand,
                                        and I did both my high schoold and undergrad in New Zealand.
                                        I have a background in Mechanical Engineering and I am
                                        currently studying Biomedical Engineering. I'm responsible
                                        for the resources and expenses.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="bg-gray-200  p-8 shadow-md sm:w-80 md:w-80 lg:w-80 xl:w-80 my-4 mx-4"
                                style={{ borderRadius: "100px" }}>
                                <div className="team-member">
                                    <img
                                        src="/img/devTeamIcon/ShuYang.jpg"
                                        className="h-48 mx-auto my-2"
                                        style={{ borderRadius: "60px" }}
                                    />
                                    <h3 className="text-xl my-2 font-semibold">Shu Yang</h3>
                                    <p className="mx-auto my-2">Title: Compliance Officer</p>
                                    <p className="mx-auto my-2">Belbin: Completer Finisher</p>
                                    <p>
                                        Hello everyone! My name is Shu Yangand you can call me Nino.
                                        I'm currently studying Electrical Engineering. I came from a
                                        very beautiful coastal city in China. In SAMple, I'm the
                                        Completer Finisher and also responsible for writing the
                                        agenda and record of weekly meetings.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="bg-gray-200  p-8 shadow-md sm:w-80 md:w-80 lg:w-80 xl:w-80 my-4 mx-4"
                                style={{ borderRadius: "100px" }}>
                                <div className="team-member">
                                    <img
                                        src="/img/devTeamIcon/Xingyu.jpg"
                                        className="h-48 mx-auto my-2"
                                        style={{ borderRadius: "60px" }}
                                    />
                                    <h3 className="text-xl my-2 font-semibold">Xingyu Ren</h3>
                                    <p className="mx-auto my-2">Title: Creative Director</p>
                                    <p className="mx-auto my-2">Belbin: Plant</p>
                                    <p>
                                        Hello, I'm Xingyu Ren, originally from China. My
                                        undergraduate major is automation, and I am currently
                                        pursuing a degree in Electrical Engineering. Within our team
                                        I take on the role related to creative Director and work in
                                        the GPT group.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="bg-gray-200  p-8 shadow-md sm:w-80 md:w-80 lg:w-80 xl:w-80 my-4 mx-4"
                                style={{ borderRadius: "100px" }}>
                                <div className="team-member">
                                    <div
                                        className="h-48 w-48 overflow-hidden mx-auto my-2"
                                        style={{ borderRadius: "60px" }}>
                                        <img
                                            src="/img/devTeamIcon/Benson.JPG"
                                            className="w-48 mx-auto"
                                        />
                                    </div>
                                    <h3 className="text-xl my-2 font-semibold">Siraisisatoru</h3>
                                    <p className="mx-auto my-2">Title: Performance Enabler</p>
                                    <p className="mx-auto my-2">Belbin: Shaper</p>
                                    <p>
                                        Good day mate! I'm Benson from Hong Kong have an
                                        undergraduate degree in Electronic Communication
                                        Engineering. I'm the graphic designer of the project and the
                                        backend engineer of this website 😉.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="bg-gray-200  p-8 shadow-md sm:w-80 md:w-80 lg:w-80 xl:w-80 my-4 mx-4"
                                style={{ borderRadius: "100px" }}>
                                <div className="team-member">
                                    <div
                                        className="h-48 w-48 overflow-hidden mx-auto my-2"
                                        style={{ borderRadius: "60px" }}>
                                        <img
                                            src="/img/devTeamIcon/Zongmin.jpg"
                                            className="w-48 mx-auto "
                                        />
                                    </div>
                                    <h3 className="text-xl my-2 font-semibold">Zongmin Cai</h3>
                                    <p className="mx-auto my-2">Title: Project Coordinator</p>
                                    <p className="mx-auto my-2">Belbin: Implementer</p>
                                    <p>
                                        I'm Zongmin, a Software Engineerring student with a
                                        background in Electronic Engineering. In this project, I led
                                        the training and deployment of the ChatGPT model. I have a
                                        strong interestin AI and natural language processing. I am
                                        also passionate about applying new technologies to solve
                                        real-world problems.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-1 flex-col  p-7">
                <h1 className="text-3xl scroll-my-20" id="career">
                    Career
                </h1>

                <br></br>
                <h3 className="text-xl font-bold font-mono">Join the Sample Team</h3>
                <p>
                    At Sample, we're dedicated to transforming the 3D printing landscape. Our
                    mission is to empower 3D printer users with cutting-edge technology that
                    optimizes their pronting experience, specifically with PLA filament material. We
                    leverage the power of AI, specifically the GPT API, to generate optimal settings
                    for PLA (Polylactic Acid) 3D printing. If you're passionate about technology,
                    innovation, and pushing the boundaries of 3D printing, we invite you to explore
                    the exciting career opportunities at Sample.
                </p>
                <br></br>
                <h3 className="text-xl font-bold font-mono">Current Job Openings</h3>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-2/5 p-5 my-2">
                        <div>
                            <h4 className="text-xl font-bold font-mono">
                                1. Senior AI/ML Engineer - 3D Printing Optimization
                            </h4>
                            <h4 className="font-bold font-mono">
                                Location: Sydney, New South Wales
                            </h4>
                            <h5 className="font-bold font-mono">Description:</h5>
                            <p>
                                As a Senior AI/ML Engineer on our 3D Printing Optimization team,
                                you'll be at the forefront of creating AI-driven solutions that
                                enhance 3D printing efficiency and quality, specifically for PLA
                                filament material. Collaborate with a dynamic team of engineers,
                                data scientists, and 3D printing experts to shape the future of PLA
                                3D printing.
                            </p>
                            <h4 className="font-bold font-mono">Responsibilities:</h4>
                            <ul className="list-disc list-inside">
                                <li>
                                    Develop and implement machine learning algorithms for PLA 3D
                                    printing optimization using the GPT API.
                                </li>
                                <li>
                                    Collaborate with cross-functional teams to integrate AI
                                    solutions seamlessly into our platform.
                                </li>
                                <li>
                                    Stay at the cutting edge of AI and PLA 3D printing technology
                                    through ongoing research.
                                </li>
                            </ul>
                            <h4 className="font-bold font-mono">Qualifications:</h4>
                            <ul className="list-disc list-inside">
                                <li>Bachelor's degree in Computer Science or related field.</li>
                                <li>
                                    Strong proficiency in Python and experience with AI/ML
                                    frameworks.
                                </li>
                                <li>
                                    Previous experience in 3D printing or additive manufacturing,
                                    especially with PLA, is advantageous.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-2/5 p-5 my-2">
                        <div>
                            <h4 className="text-xl font-bold font-mono">
                                2. Marketing Specialist - 3D Printing Technology
                            </h4>
                            <h5 className="font-bold font-mono">Location: Remote</h5>
                            <h5 className="font-bold font-mono">Description:</h5>
                            <p>
                                As a Marketing Specialist, you'll play a pivotal role in promoting
                                Sample's innovative 3D printing optimization solutions for PLA
                                filament material to a global audience. If you're a creative
                                marketer who's passionate about technology and eager to make a
                                significant impact in the industry, we want to hear from you.
                            </p>

                            <h5 className="font-bold font-mono">Responsibilities:</h5>
                            <ul className="list-disc list-inside">
                                <li>
                                    Devise and execute marketing campaigns targeting 3D printer
                                    users working with PLA filament material.
                                </li>
                                <li>
                                    Create engaging content, including blog posts, social media
                                    updates, and informative videos.
                                </li>
                                <li>
                                    Analyze marketing data to gauge campaign effectiveness and drive
                                    data-driven decisions.
                                </li>
                            </ul>

                            <h5 className="font-bold font-mono">Qualifications:</h5>
                            <ul className="list-disc list-inside">
                                <li>
                                    Bachelor's degree in Marketing, Communications, or a related
                                    field.
                                </li>
                                <li>
                                    Prior marketing experience in the tech industry is preferred.
                                </li>
                                <li>
                                    Familiarity with 3D printing and PLA filament material
                                    technology is a plus.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <h3 className="text-2xl font-bold font-mono">Why Choose Sample?</h3>
                <div>
                    <span className=" font-bold">Innovation:</span> Sample is at the forefront of 3D
                    printing optimization, harnessing the power of AI to create revolutionary
                    solutions for PLA filament material.
                </div>
                <div>
                    <span className=" font-bold">Collaborative Culture:</span> Join a diverse and
                    talented team that values collaboration, creativity, and pushing the boundaries
                    of technology in PLA 3D printing.
                </div>
                <div>
                    <span className=" font-bold">Career Growth:</span> We offer ample opportunities
                    for professional development and advancement as our company continues to grow.
                </div>
                <div>
                    <span className=" font-bold">Diversity and Inclusion:</span> Sample is committed
                    to fostering a diverse and inclusive workplace where all contributions are
                    valued and celebrated.
                </div>

                <br></br>
                <h3 className="text-2xl font-bold font-mono">Application Process</h3>
                <p>
                    To apply for any of our current job openings, please send your resume and a
                    cover letter outlining your qualifications and your passion for the role to
                    3DCookbook@sample.com.
                </p>
                <p>
                    Ensure you specify the job title in the subject line of your email. We look
                    forward to hearing from you and exploring how you can contribute to the Sample
                    team's mission in optimizing PLA 3D printing!{" "}
                </p>
            </div>

            <div className="flex flex-1 flex-col p-7">
                <h1 className="text-3xl scroll-my-20" id="contact">
                    Contact
                </h1>
                <p className="text-xl font-bold">Address:</p>
                <p>42 Wallaby Way, Sydney</p>
                <p className="text-xl font-bold">Phone Numbers:</p>
                <p>General Inquiries: +1 (555) 123-4567</p>
                <p>Customer Support: +1 (555) 987-6543</p>
                <p className="text-xl font-bold">Email:</p>
                <p>info@SAMple.com</p>
                <p className="text-xl font-bold">Operating Hours:</p>
                <p>
                    Monday - Friday: 9:00 AM - 5:00 PM Saturday: 10:00 AM - 2:00 PM Sunday: Closed
                </p>
            </div>

            <Footer />
        </>
    );
}
export default Aboutus;
