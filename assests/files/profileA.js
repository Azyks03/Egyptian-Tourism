const Uname = document.getElementById("name");
const phone = document.getElementById("tel");
const ID = document.getElementById("id");
const btn = document.getElementById("delete");
const token = sessionStorage.getItem('token');

function fetchData(){
    let users = JSON.parse(localStorage.getItem("users"));

    let user = users.find(user => user.telephone === token);

    if(user){
        Uname.textContent = "الاسم/ " + user.username;
        phone.textContent = "رقم الهاتف/ " + user.telephone;
        ID.textContent = user.id + " /ID ال";
    }
    else{
        console.log("ERROR: user not found")
    }
}

fetchData();

btn.onclick = function deleteAccount(){
    let confirmed = confirm("هل تريد حذف حسابك");

    if(confirmed){
        let users = JSON.parse(localStorage.getItem('users')) || [];
    
        let newUsers = users.filter(user => user.telephone !== token);
        localStorage.setItem('users', JSON.stringify(newUsers));
        sessionStorage.removeItem('token');
        sessionStorage.setItem('accountDeleted', 'true');

        window.location.href = "../../mainPageA.html";
    }
}