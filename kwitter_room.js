//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAkYqPSUnuvBR9o0esFy2OpH3TS8b4YTDU",
    authDomain: "kwitter-6eff3.firebaseapp.com",
    projectId: "kwitter-6eff3",
    storageBucket: "kwitter-6eff3.appspot.com",
    messagingSenderId: "81864546566",
    appId: "1:81864546566:web:3ae3ebe1c65818b3902687"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
