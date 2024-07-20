let btn = document.getElementById("Submit-Button");

btn.addEventListener('click', ()=> {

    let tel = document.getElementById("tel");
    let password = document.getElementById("password");
    let message = document.getElementById("error-message");

    if(tel.value.length === 11 &&
    tel.value.startsWith("01") &&
    ["0", "1", "2", "5"].includes(tel.value.charAt(2)) &&
    password.value.length >= 6 &&
    password.value.length <= 15){

        sessionStorage.setItem('token', tel.value);

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let IsAccount = false;
        users.forEach(user => {
            if(user.telephone === tel.value && user.password === password.value){
                IsAccount = true;
            }
        });
        if(IsAccount){
            message.textContent = "";
            window.location.href = "mainPageA.html";
        }
        else{
            message.innerHTML = "الرجاء إستخدام بيانات صحيحة";
        }
    }
    else{
        message.innerHTML = "الرجاء ملء كل الخانات بشكل صحيح"
        return error;
    }
});
