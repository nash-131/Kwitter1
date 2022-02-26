
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBiXCVScWFyZlxump5tLenaZT2oyVuZvMs",
      authDomain: "kwitter-23dc7.firebaseapp.com",
      databaseURL: "https://kwitter-23dc7-default-rtdb.firebaseio.com",
      projectId: "kwitter-23dc7",
      storageBucket: "kwitter-23dc7.appspot.com",
      messagingSenderId: "771991008052",
      appId: "1:771991008052:web:539371791bc351cbb8eb61",
      measurementId: "G-2PQLXPRF8E"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome  " + user_name + "!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName (name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function addRoom()
{

    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"

    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}