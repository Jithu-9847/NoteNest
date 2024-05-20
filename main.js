const firebaseConfig = {
  apiKey: "AIzaSyDwUtdCi1Wz-meVdKagFZ2OXLyxAUsUiAc",
  authDomain: "code-box-ee11f.firebaseapp.com",
  databaseURL: "https://code-box-ee11f-default-rtdb.firebaseio.com",
  projectId: "code-box-ee11f",
  storageBucket: "code-box-ee11f.appspot.com",
  messagingSenderId: "956121181787",
  appId: "1:956121181787:web:7e2126bd435a4ad871597e"
};

firebase.initializeApp(firebaseConfig);
const storageRef = firebase.storage().ref();

window.onload = () => {
  readData(code + '/notes', 'notes');
}

function createTile(tileData, type, index) {
  // Create tile element
  var tile = document.createElement('div');
  tile.classList.add('tile');

  // Create text element
  var tileText = document.createElement('p');
  tileText.textContent = tileData.name;

  // Create button element
  var button = document.createElement('button');
  button.textContent = "Open File";
  button.addEventListener('click', function () {
    retrievePDF(code + "/" + type + "/" + data[index]);

  });

  // Append text and button to tile
  tile.appendChild(tileText);
  tile.appendChild(button);

  // Append tile to container
  document.getElementById('files').appendChild(tile);
}



let data = [];
let code = sessionStorage.getItem("code");


function readData(path, type) {
  var folderRef = storageRef.child(path);

  // List all items in the folder
  folderRef.listAll().then(function (result) {

    document.getElementById("files").innerHTML = "";
    data = [];

    result.items.forEach(function (itemRef, index) {
      // Print the file name
      data.push(itemRef.name);

      createTile(itemRef, type, index);
    });
     
    if (data.length==0) {
      const message = document.createElement("p");
      message.textContent = "There are no files to show you. If you have any documents you'd like to upload, please feel free to do so.";
      const container = document.getElementById("files");  
      container.appendChild(message);
    }

  }).catch(function (error) {
    alert("Something Went Wrong!Try again");
  });
}



function retrievePDF(path) {

  const reference = storageRef.child(path);

  reference.getDownloadURL()
    .then((url) => {
      // Create a new link element
      const link = document.createElement('a');

      link.href = url;

      link.download = 'myfile.pdf'; // Set the desired download filename
      link.click();
    })
    .catch((error) => {
      alert("Something Went Wrong!Try again");
    });
}

