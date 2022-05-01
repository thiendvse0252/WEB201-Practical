function show(){
    var btn = document.getElementById('showmore');
    var table = document.getElementById('team');
    if(table.style.display == 'none'){
        table.style.display = 'block';
        btn.innerHTML = 'SHOW LESS';
        document.getElementById('myform').style.display = 'block';
    }else{
        table.style.display = 'none';
        btn.innerHTML = 'SHOW MORE';
        document.getElementById('myform').style.display = 'none';
    }
}

function check(){
    var arr = document.getElementsByTagName('input');
    var form = document.getElementById('myform');
    var email = arr[0].value;
    var c1 = arr[1].checked;
    var c2 = arr[2].checked;
    var cap = arr[3].value;

    if (email == '') {
        alert("please fill your email");
    } else if (!c1 && !c2) {
        alert("please check your options");
    } else if (cap != "cVr12TY") {
        alert("please check your capchar");
    } else {
        var option = confirm('Thank you very much!');
        if (option) {
            location.reload();
        }
    }
}