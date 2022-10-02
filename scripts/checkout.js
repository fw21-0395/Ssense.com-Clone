let form = document.querySelector("form");

form.addEventListener("submit" , submitForm);

function submitForm(event){

    event.preventDefault();

    let addressObj = {

        firstName: form.nameF.value,
        lastName: form.nameL.value,
        address: form.address.value,
        city: form.city.value,
        pincode: form.pincode.value,
        phn: form.phn.value

    }

    let cardObj = {

        cardName: form.cardName.value,
        cardNum: form.cardNum.value,
        cardDate: form.cardDate.value,
        cardCvv: form.cvv.value
    }

    localStorage.setItem("Adress",JSON.stringify(addressObj));
    localStorage.setItem("Card",JSON.stringify(cardObj));


    alert("Order Placed Successfully");
}

