//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyD4UQeoWZg72wl_Jp8BAV1gNOYxz00C5wo",
      authDomain: "kwitter-87ec1.firebaseapp.com",
      databaseURL: "https://kwitter-87ec1-default-rtdb.firebaseio.com",
      projectId: "kwitter-87ec1",
      storageBucket: "kwitter-87ec1.appspot.com",
      messagingSenderId: "713147330121",
      appId: "1:713147330121:web:054d9de69e56b6422f5998"
};
  
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
