// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBTelOH4m3AiiFSFDBtnHlH5ILGhRXY3nA",
    authDomain: "kwitterrrrr-6a7e4.firebaseapp.com",
    projectId: "kwitterrrrr-6a7e4",
    storageBucket: "kwitterrrrr-6a7e4.appspot.com",
    messagingSenderId: "155597665532",
    appId: "1:155597665532:web:8050cc48f3a8e2824a9379"
  };

// Initialize Firebase

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log("Room Name - " + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>");
     document.getElementById("output").innerHTML += row;
     //End code
     });});}
getData();

function redirectToRoomName(name)
{
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "chat_page.html";
}

function logout()
{
     localStorage.removeItem("room_name"); 
     localStorage.removeItem("user_name"); 
     window.location = "index.html";
}

function send()
{
     msg = document.getElementById("msg").value;
     firebaseConfig.database.ref("room_name").push({
           name:user_name,
           Message:msg,
           like:0
     });

     document.getElementById("msg").value = "";
}

function add_Room()
 {
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({ 
     purpose : "adding room name"
   });

   localStorage.setItem("room_name", room_name);
   window.location = "chat_room.html";

 }
