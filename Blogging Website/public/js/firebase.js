let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyAZ_cUcYPTRW8is_VRgERWTylN2-4vybtw",
    authDomain: "blogging-website-464e1.firebaseapp.com",
    projectId: "blogging-website-464e1",
    storageBucket: "blogging-website-464e1.appspot.com",
    messaingSenderId: "40507264815",
    appId: "1:40507264815:web:f4aaa0a4b7f290950ddbda",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();