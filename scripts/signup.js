let form = document.querySelector("form");

let WishlistTotalCount = JSON.parse(localStorage.getItem("wishlistCount")) || 0;
let bagTotalCount = JSON.parse(localStorage.getItem("ItemsCount")) || 0;



form.addEventListener("submit", submitForm);

function submitForm(event){
    event.preventDefault();

    if(form.pass.value == form.pass2.value){

        let SignUpObj = {

            name: form.name.value,
            phn: form.phn.value,
            email:form.email.value,
            password:form.pass.value,
            
        }

        localStorage.setItem("Name",SignUpObj.name);

        localStorage.setItem("Phn",SignUpObj.phn);

        localStorage.setItem("Email",SignUpObj.email);

        localStorage.setItem("Password",SignUpObj.password);

        alert("Account Created, You can login now");

        window.location.href="login.html";



    }else {
        alert("Check Password");
    }

    
}

document.querySelector("#wishlistCount").innerText = WishlistTotalCount;
document.querySelector("#bagCount").innerText = bagTotalCount;

