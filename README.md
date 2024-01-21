# 3Dprinter-cookbook
The front-end design utilizes chatGPT and Reactjs to produce customized 3D printer setup instructions.

<p align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/sampleLogo_invert.svg">
  <source media="(prefers-color-scheme: light)" srcset="public/sampleLogo.svg">
  <img alt=" Shows a black logo in light color mode and a white one in dark color mode." src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
</picture>
</p>

# Introduction
3D printers just like all other kinds of home appliances come with a set of user manuals. Users can follow that manual for initial setup. Take air fryers as an example, users can usually find a receipt. However, the quality of each print usually varies due to several environmental parameters including the nozzle temperature, the nozzle size and the physical placement of the device. 


Beginning with the need for customized setup instructions, we decided to develop a tool that utilizes cutting-edge AI technology and produces customized setup instructions based on user requirements. The project is built using Reactjs and uses Firebase as the backend of the website for an interactive experience. There is a [live demo](https://engg5203-cookbook.web.app/) host on the Firebase.

# Main feature

- ✅ Get user input and pass it to openAI chatGPT API
- ✅ Google Authentication verifies user identity
- ✅ Store user query history on Firebase and accessible on the dashboard page
- ✅ Multiple charging plan simulation based on stored user identity

# File structure

<details>
<summary>Full file structure with explaination</summary>
```
.
├── public
│   ├── company_logo                [Folder stores library svg files]
│   │   ├── ChatGPT_logo.svg
│   │   ├── React-icon.svg
│   │   └── Tailwind_CSS_Logo.svg
│   ├── img
│   │   ├── brands                  [Folder stores 3D printer library logo files]
│   │   │   ├── crealitylogo.png
│   │   │   ├── eos_gmbh_logo_bw.svg
│   │   │   ├── hori3dlogo.png
│   │   │   ├── jgew3dlogo.png
│   │   │   ├── logo_top.png
│   │   │   ├── MakerBot-Logo.webp
│   │   │   ├── prusaresearch-logo.png
│   │   │   ├── stratasys-logo.png
│   │   │   └── UltiMaker_Logo.svg
│   │   ├── devTeamIcon             [Folder stores members icon for about us page]
│   │   │   ├── Beng.jpg
│   │   │   ├── Benson.JPG
│   │   │   ├── Braeden.jpg
│   │   │   ├── Guangjian.jpg
│   │   │   ├── Haoyuan.jpg
│   │   │   ├── ShuYang.jpg
│   │   │   ├── Xingyu.jpg
│   │   │   └── Zongmin.jpg
│   │   ├── groupPhoto              [An AI generated group photo]
│   │   │   └── GPphoto.png
│   │   ├── randompic               [Small icons used for random hints for loading]
│   │   │   ├── randpic1.png
│   │   │   ├── randpic2.png
│   │   │   ├── randpic3.png
│   │   │   ├── randpic4.png
│   │   │   └── randpic5.png
│   │   ├── thumbnail               [Thumbnail images on the front page]
│   │   │   ├── 3dprinting1.jpg
│   │   │   ├── 3dprinting2.jpg
│   │   │   ├── 3dprinting3.jpg
│   │   │   ├── 3dprinting4.jpg
│   │   │   ├── 3dprinting5.jpg
│   │   │   ├── 3dprinting6.jpg
│   │   │   ├── 3dprinting7.jpg
│   │   │   └── 3dprinting8.jpg
│   │   ├── userFeedback            [User feedback images on the front page]
│   │   │   ├── product1.jpg
│   │   │   ├── product2.jpg
│   │   │   ├── product3.jpg
│   │   │   ├── product4.jpg
│   │   │   ├── product5.jpg
│   │   │   └── product6.jpg
│   │   └── IMG_0061.JPG
│   ├── cookbook.png                [Website icon]
│   ├── logo.png                    [Team logo]
│   ├── sampleLogo_invert.svg       [Team logo]
│   └── sampleLogo.svg              [Team logo]
├── src
│   ├── js
│   │   ├── firebase.utils.js       [Contains database access information]
│   │   └── gptAPI.js               [Contains gpt access information and user input arrangement]
│   ├── page
│   │   ├── 404.jsx                 [404 page]
│   │   ├── aboutUs.jsx             [About us page]
│   │   ├── dashboard.jsx           [Dashboard page for log-in users]
│   │   ├── GPTengine.jsx           [GPT engine page that prompts user input]
│   │   ├── index.jsx               [Front page]
│   │   ├── inst_download.jsx       [The instruction page displays get output and provides model download links]
│   │   ├── payment.jsx             [Pricing page links to payment page simulate payment in the real site]
│   │   └── pricing.jsx             [Pricing page shows price comparison and prompts users to choose plans]
│   ├── utils
│   │   ├── footer.jsx              [Footer component]
│   │   ├── gptengine.utils.jsx     [Input form]
│   │   ├── inputTypingAnime.jsx    [Animation hood for front page]
│   │   ├── instruction.utils.jsx   [Instruction component]
│   │   ├── nav_bar.jsx             [Navigation bar component]
│   │   ├── pdf.utils.jsx           [Instruction to PDF component]
│   │   └── ScrollToAnchor.jsx      [Smooth scroll component]
│   ├── App.css
│   ├── App.jsx                     [Router wrap for the whole website]
│   ├── index.css                   [Main CSS]
│   └── main.jsx                    [Main app]
├── .env                            [Store sensitive information such as API key]
├── .eslintrc.cjs                   [Configuration file]
├── .firebaserc                     [Configuration file]
├── babel.config.js                 [Configuration file]
├── firebase.json                   [Configuration file]
├── index.html                      [Page heading]
├── package-lock.json               [Configuration file]
├── package.json                    [Configuration file]
├── postcss.config.js               [Configuration file]
├── tailwind.config.js              [Configuration file]
└── vite.config.js                  [Configuration file]
```
</details>

# Project setup

Create .env file under the root folder of the project.

``` js
VITE_OPENAI_API = **
VITE_GPT_MODEL = ft:gpt-3.5-turbo-0613:personal::********
```
^ for GPT
```js
VITE_FIREBASE_API = 
VITE_AUTHDOMAIN = 
VITE_PROJECTID = 
VITE_STORAGEBUCKET = 
VITE_MESSAGINGSENDERID = 
VITE_APPID = 
VITE_DATABASEURL =  
```
^ for Firebase database access

# Setup firebase

Details for setup as well as APIs can be found [here](https://ariangarshi.medium.com/how-to-use-firebase-for-google-authentication-in-a-react-js-in-2022-78171a235404).

# Build the project

Clone the project and follow the following:
```sh
git clone https://github.com/siraisisatoru/3Dprinter-cookbook.git
cd 3Dprinter-cookbook
npm i
npm run dev
```

This should run a local server and be able to access through a local host.
```sh
 VITE v4.5.1  ready in 774 ms
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

# Deploy on firebase
To deploy on the firebase, follow the following:
```sh
firebase login
npm install -g firebase-tools
firebase init
>? Which Firebase features do you want to set up for this directory? Press Space to select
features, then Enter to confirm your choices. Hosting: Configure files for Firebase Hosting and
(optionally) set up GitHub Action deploys
>? Please select an option: Use an existing project
>? Select a default Firebase project for this directory: <YOUR PROJECT> (<YOUR PROJECT>)
>? What do you want to use as your public directory? dist
>? Configure as a single-page app (rewrite all urls to /index.html)? No
>? Set up automatic builds and deploys with GitHub? No
>? File dist/index.html already exists. Overwrite? No
```

Details for setup can be found [here](https://vitejs.dev/guide/static-deploy.html#google-firebase).


# DISCLAIMER
This project was built for university coursework (USYD ENGG5203) and aims to utilize several management tools and develop a functional product within 13 weeks. This project does not cooperate with the 3D printer equipment companies that are listed on the website but rather an illustration. If there are any legal issues regarding the use of the logo, please leave an issue and we can remove that.


# License

This project is agreed upon by all development members to make it public. The project follows MIT licensing and all external users are free to make modifications to the code in this repository.



