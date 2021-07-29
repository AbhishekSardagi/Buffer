function check() {
    var email1 = localStorage.getItem("email")
    var password1 = localStorage.getItem("password")
    console.log(email1,password1)
    var x = document.getElementById("CE").value
    var y = document.getElementById("CP").value
    if (email1 == x && password1 == y) {
        window.location.href = "F:\Buffer\HTML\1.html"
    }
    else {
        alert("Wrong Password or Email")
    }
}

function account()
{
    location.href="F:\Buffer\HTML\signup.html"
}