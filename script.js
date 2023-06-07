
const searched = document.getElementById("name") ;
const code = document.getElementsByClassName("code")[0] ;
function getCode(){
    code.innerHTML =`` ;
    console.log(searched.value) ;
    const f_src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${searched.value}`;

    console.log(f_src);

    const curr = document.createElement("div") ;
    
    curr.innerHTML = `
    <img src="${f_src}" alt="">
    <button onclick="download()" >Download</button>
    `;
    code.appendChild(curr) ;
}
function download(){
    alert("You need to login first") ;
}
