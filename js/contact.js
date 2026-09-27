var menu = document.getElementById("contactmenu");
var emailBox = document.getElementById("emailbox");
var phoneBox = document.getElementById("phonebox");

emailBox.style.display = "none";
phoneBox.style.display = "none";

menu.addEventListener("change", showContactBox);

function showContactBox() {
    var choice = menu.value;

    if (choice == "Email") {
        emailBox.style.display = "block";
        phoneBox.style.display = "none";
    } else if (choice == "Phone") {
        emailBox.style.display = "none";
        phoneBox.style.display = "block";
    } else {
        emailBox.style.display = "none";
        phoneBox.style.display = "none";
    }
}
