
const loginButton = document.getElementById("logInButton");
loginButton.addEventListener("click", function (e) {
    e.preventDefault()
    const mobileNumber = 12345678910;
    const password = 2004;

    const inputMoblieNumber = document.getElementById("mobile-number").value
    const inputMoblieNumberConvated = parseInt(inputMoblieNumber)

    const inputPassword = document.getElementById("pin-number").value
    const inputPasswordConvator = parseInt(inputPassword)

    if (inputMoblieNumberConvated === mobileNumber && inputPasswordConvator === password) {
        window.location.href = "./home.html";
    } else {
        alert("Please Input Valid Data")
        console.log("Please Input Valid Data")
    }
})