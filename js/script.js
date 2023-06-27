var user = document.getElementById("user");
var inputUser = document.getElementById("input-user")
var placeholderUser = document.getElementById("placeholder-user");
var userOnfocus = document.getElementById("user-onfocus");

user.onfocus = function () {
    inputUser.style.borderColor = "#329092";

    placeholderUser.style.top = "-15px";
    placeholderUser.style.left = "5px";
    placeholderUser.style.color = "#329092";
    placeholderUser.style.backgroundColor = "#F0FEFA";

    userOnfocus.src = ("img/icon/user-blue.svg");
}
user.onblur = function () {
    inputUser.style.borderColor = "";

    user.classList.remove("onfocus-placeholder");

    if (user.value === "") {
        placeholderUser.style.top = "15px";
        placeholderUser.style.left = "50px";
    }

    placeholderUser.style.color = "";

    userOnfocus.src = ("img/icon/user.svg");
}









var pass = document.getElementById("pass");
var inputPass = document.getElementById("input-pass");
var placeholderPass = document.getElementById("placeholder-pass");
var passOnfocus = document.getElementById("pass-onfocus");


pass.onfocus = function () {
    inputPass.style.borderColor = "#329092";

    pass.classList.add("onfocus-placeholder");

    placeholderPass.style.top = "-15px";
    placeholderPass.style.left = "5px";
    placeholderPass.style.color = "#329092";
    placeholderPass.style.backgroundColor = "#F0FEFA";

    passOnfocus.src = "img/icon/unlock-blue.svg";

}
pass.onblur = function () {
    inputPass.style.borderColor = "";

    pass.classList.remove("onfocus-placeholder")

    if (pass.value === "") {

        placeholderPass.style.top = "15px";
        placeholderPass.style.left = "50px";
    }

        placeholderPass.style.color = "";

        if (pass.value !== ""){
            passOnfocus.src = "img/icon/lock.svg";
        }else{
            passOnfocus.src = "img/icon/unlock.svg";
        }
}