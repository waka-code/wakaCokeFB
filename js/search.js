document.getElementById("search").value;
addEventListener("keyup",enterSearch);

function enterSearch(e){
    if(e.keyCode === 13){
        location= "index.html";
    }
    
}