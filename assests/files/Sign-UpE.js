let btn = document.getElementById("Submit-Button");

btn.addEventListener('click', ()=> {
    let username = document.getElementById("name");
    let tel = document.getElementById("tel");
    let password = document.getElementById("password");
    let message = document.getElementById("error-message");

    if(username.value !== "" &&
    tel.value.length === 11 &&
    tel.value.startsWith("01") &&
    ["0", "1", "2", "5"].includes(tel.value.charAt(2)) &&
    password.value.length >= 6 &&
    password.value.length <= 15){

        sessionStorage.setItem('token', tel.value);

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let IsDuplicate = false;
        users.forEach(user => {
            if(user.telephone === tel.value){
                IsDuplicate = true;
            }
        });
        if(IsDuplicate){
            message.innerHTML = "This Telephone Number is Already in Use";
            return;
        }

        function User(id, username, telephone, password){
            this.id = id,
            this.username = username,
            this.telephone = telephone,
            this.password = password
        };

        let id = users.length + 1;
    
        let NewUser = new User(id, username.value, tel.value, password.value);
        users.push(NewUser);
        localStorage.setItem("users", JSON.stringify(users));
    
        document.getElementById("name").value = "";
        document.getElementById("tel").value = "";
        document.getElementById("password").value = ""
        message.innerHTML = "";

        window.location.href = "mainPageE.html";
        
        UpdateUserCount();
    }
    else{
        message.innerHTML = "Please Input All the Data Correctly"
        return error;
    }
});


function UserCount() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    return users.length;
}
function UpdateUserCount() {
    let numberOfUsers = UserCount();
}
