 

function btn1() {
    
    sessionStorage.setItem("code","MAT206");
    window.location.href="main.html";
    
}

function btn2() {
     

    sessionStorage.setItem("code","CST202");
    window.location.href="main.html";

}

function btn3() {
    

    sessionStorage.setItem("code","CST204");
    window.location.href="main.html";

}

function btn4() {
    sessionStorage.setItem("code","EST200");
    window.location.href="main.html";

}

function btn5() {
    sessionStorage.setItem("code","MCN202");
    window.location.href="main.html";

}

function btn6() {
    sessionStorage.setItem("code","CST206");
    window.location.href="main.html";

}

document.getElementById("down_btn").addEventListener("click",()=>{
    var downloadLink = document.createElement('a');
    downloadLink.href = 'time_table.png';  
    downloadLink.download = 'TimeTable.png';  
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
})

