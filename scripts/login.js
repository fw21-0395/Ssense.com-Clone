let form = document.querySelector("form");

let WishlistTotalCount = JSON.parse(localStorage.getItem("wishlistCount")) || 0;
let bagTotalCount = JSON.parse(localStorage.getItem("ItemsCount")) || 0;



form.addEventListener("submit" , submitForm);

function submitForm(event){

    event.preventDefault();

    let LSemail = localStorage.getItem("Email");
    let LSpass = localStorage.getItem("Password");

    if(LSemail == form.LoginEmail.value && LSpass == form.LoginPass.value){
        alert("Login Successfull");

        window.location.href="index.html";

    }else{
        alert("Wrong Credential, Please enter correct email and password");
    }

}

document.querySelector("#wishlistCount").innerText = WishlistTotalCount;
document.querySelector("#bagCount").innerText = bagTotalCount;



