function PostSignUp(namadepan,namabelakang,email,password){
    var myHeaders = new Headers();
    myHeaders.append("Login", "PunyaDzikri");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "NamaDepan": namadepan,
        "NamaBelakang": namabelakang,
        "Email": email,
        "Password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://eoxdxqojy1y2jcx.m.pipedream.net", requestOptions)
        .then(response => response.text())
        .then(result => GetResponse(result))
        .catch(error => console.log('error', error));
}

function GetResponse(result){
    document.getElementById("formsignup").innerHTML = result;
}

function PushButton(){
    namadepan=document.getElementById("namadepan").value;
    namabelakang=document.getElementById("namabelakang").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    PostSignUp(namadepan,namabelakang,email,password);
}