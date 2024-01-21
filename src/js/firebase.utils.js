// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getDatabase, ref, set, get, push, query, limitToLast } from "firebase/database";

// > -- general firebase config
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
    databaseURL: import.meta.env.VITE_DATABASEURL,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firebase Auth provider
export const provider = new GoogleAuthProvider();

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({
    prompt: "select_account ",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

// > -- real time database
export const realdb = getDatabase(firebaseApp);

export const pushComment = (comment) => {
    console.log(comment);
    console.log("upload to database");
    const userInfo = JSON.parse(localStorage.getItem("authUser"));
    if (userInfo) {
        push(ref(realdb, "comments/" + userInfo.uid), { comments: comment });
    }
};

export const pushHistory = (jsonInput) => {
    //  takes a json structure input and upload it to the firebase real time database
    //  this history should be called after gpt returns the answer
    /*
{
    inputs: {...}
    outputs: {...}
}
    */
    console.log(jsonInput);
    const userInfo = JSON.parse(localStorage.getItem("authUser"));
    if (userInfo) {
        push(ref(realdb, "users/" + userInfo.uid), jsonInput);
    }
};

export const getLastHistory = async () => {
    //  fetch the last element from the firebase
    // query
    let history = {};
    const userInfo = JSON.parse(localStorage.getItem("authUser"));
    if (userInfo) {
        const realdbRef = query(ref(realdb, "users/" + userInfo.uid), limitToLast(1));
        const snapshot = await get(realdbRef);
        history = snapshot.val();
    }
    return history;
};

export const getAllHistory = async () => {
    //  fetch the all history from the firebase
    let history = {};
    const userInfo = JSON.parse(localStorage.getItem("authUser"));
    if (userInfo) {
        const realdbRef = ref(realdb, "users/" + userInfo.uid);
        const snapshot = await get(realdbRef);
        history = snapshot.val();
    }
    return history;
};

export const getMemberinfo = async () => {
    const userInfo = JSON.parse(localStorage.getItem("authUser"));
    if (userInfo) {
        const realdbRef = ref(realdb, "memberInfo/" + userInfo.uid);
        const snapshot = await get(realdbRef);
        return snapshot.val();
    } else {
        return { payed: false, member: false };
    }
};

export const checkIsMember = async (user) => {
    let memberInfo = {};
    const realdbRef = ref(realdb, "memberInfo/" + user.uid);
    const snapshot = await get(realdbRef);
    memberInfo = snapshot.val();
    if (memberInfo === null) {
        memberInfo = initMemberInfo(user);
    }

    localStorage.setItem("memberInfo", JSON.stringify(memberInfo));
};

export const initMemberInfo = (user) => {
    // the user was not registered in the database
    // register for it
    set(ref(realdb, "memberInfo/" + user.uid), { payed: false, member: true });
    return { payed: false, member: true };
};

export const makePayed = async () => {
    const userInfo = JSON.parse(localStorage.getItem("authUser"));

    if (userInfo) {
        set(ref(realdb, "memberInfo/" + userInfo.uid), { payed: true, member: true });
    }
    localStorage.setItem("memberInfo", JSON.stringify({ payed: true, member: true }));


    console.log("make pay");
};
