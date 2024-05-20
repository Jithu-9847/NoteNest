
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

var t=0;

var divWidth = document.getElementById("progress").clientWidth;
divWidth=divWidth/100;

var course_code=document.getElementById("code");
var cat=document.getElementById("cat");



function uploadPDF() {
  document.getElementById("end").innerText="";
   
  const support_doc = document.getElementById('document').files[0];
   
  document.getElementById("status").innerText="Uploading...";

  const reference = storageRef.child(course_code.value+"/"+cat.value+"/"+support_doc.name);
  reference.put(support_doc).on('state_changed',
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
       
      if(progress<=100)
    document.getElementById("progress_bar").style.width=progress*divWidth+"px";
    },
    (error) => {
      // Handle unsuccessful uploads
      alert("Something Went Wrong!Try again");
      document.getElementById("status").innerText="Document Uploading failed!";
    },
    () => {
      // Handle successful uploads
     
      document.getElementById("status").innerText="Document Uploaded Successfully!";
      

    });
}


document.getElementById("submit").addEventListener("click",()=>{
  if(document.getElementById('document').files[0]!=undefined)
  uploadPDF();
else
  alert("Please Select a File!")
})

