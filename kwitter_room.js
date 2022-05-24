//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
    apiKey: "AIzaSyD4UQeoWZg72wl_Jp8BAV1gNOYxz00C5wo",
    authDomain: "kwitter-87ec1.firebaseapp.com",
    databaseURL: "https://kwitter-87ec1-default-rtdb.firebaseio.com",
    projectId: "kwitter-87ec1",
    storageBucket: "kwitter-87ec1.appspot.com",
    messagingSenderId: "713147330121",
    appId: "1:713147330121:web:054d9de69e56b6422f5998"
  };
  
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row; 
    //End code
    });});}
getData();

function redirectToRoomName()
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "index.html";
}

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "index.html";
}