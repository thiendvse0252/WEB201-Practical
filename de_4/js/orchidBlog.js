function zoomout(image){
    var src = image.src;
    document.getElementById('frame').style.backgroundImage = " url("+src+") ";
}

function warning(){ 
    var name = document.getElementById('yourname').value;
    var email = document.getElementById('email').value;
    var content = document.getElementById('content').value;

    if(name == "" || email == "" || content == ""){
        alert("please fill all field");
    }else{
        var check = confirm("mess sent");
        if(check){
            location.reload();
        }
    }
}