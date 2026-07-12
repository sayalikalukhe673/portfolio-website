function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    let namePattern = /^[A-Za-z ]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valid = true;

    if (!namePattern.test(name)) {
        document.getElementById("nameError").innerText = "Only letters allowed";
        valid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid Email";
        valid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    if (valid) {
        document.getElementById("successMsg").innerText =
        "✅ Message Sent Successfully!";
    }

    return false;
}
/*
services cha code
-----------------------------------------------------------------------------------------
*/

function order(service){

    // 🔥 तुमचा WhatsApp नंबर इथे टाका (country code सह)
    let phoneNumber = "917709624023";

    // message template
    let message = "Hello, I want to order: " + service;

    // WhatsApp link
    let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    // open WhatsApp
    window.open(url, "_blank");
}