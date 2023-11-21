//TUS ENLACES DE FIREBASE
const firebaseConfig = {
      apiKey: "AIzaSyC60gGNHNCk_RYu03lgKeaZWEQKe74if_8",
      authDomain: "kwitter-90cbc.firebaseapp.com",
      databaseURL: "https://kwitter-90cbc-default-rtdb.firebaseio.com",
      projectId: "kwitter-90cbc",
      storageBucket: "kwitter-90cbc.appspot.com",
      messagingSenderId: "209875355374",
      appId: "1:209875355374:web:92fc10a529f90f742e95ff" 
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inicia el código
         
//Termina el código
      } });  }); }
getData();

function updateLike()
{
      
}

function logout() {
      
}
