const fixedPin = 2004;
const fixedaccountNumber = 12345678910;
const totalBalence = parseInt(document.getElementById("total-balence").innerText)

document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault()

    const bankName = document.getElementById("bank-name").value;
    const accountNumber = parseInt(document.getElementById("account-number").value);

    const addAmount = parseInt(document.getElementById("add-amount").value);

    const inputPin = parseInt(document.getElementById("pin").value);
    if (accountNumber !== fixedaccountNumber) {
        alert("Please Valid Account Number ")
        return
    };
    if (inputPin !== fixedPin) {
        alert("Please Valid Pin Number ")
        return
    };
    let totalNewBalence = totalBalence + addAmount;
    document.getElementById("total-balence").innerText = totalNewBalence;
})


//  ----------- all card  btn toggle  --------
const addMoneySection = document.getElementById("add-money-status");
const cashOutSection = document.getElementById("cash-out-status");
const addMoneyBtn = document.getElementById("add-money-card-btn");
const cashOutBtn = document.getElementById("cash-out-btn");


addMoneyBtn.addEventListener("click", function (e) {
    e.preventDefault()
    cashOutSection.style.display = 'none'
    addMoneySection.style.display = "block";

})

cashOutBtn.addEventListener("click", function (e) {
    e.preventDefault()
    addMoneySection.style.display = "none";
    cashOutSection.style.display = 'block'
})


// ---------------- withdrow Money btn --------------



const pinn = parseInt(document.getElementById("pin").value)

const withdrowBtn = document.getElementById("withdrow-money-btn")

withdrowBtn.addEventListener("click", function (e) {
    e.preventDefault()

    const agentNumber = parseInt(document.getElementById("agent-number").value)
    const pinNumber = parseInt(document.getElementById("pin-number").value)

    const withdrowAmmount = parseInt(document.getElementById("withdrow-amount").value)

    if (document.getElementById("agent-number").value.length !== 11) {
        alert("Please input valid Agent Number")
        return
    }
    if (pinNumber !== fixedPin) {
        alert("Please input valid Pin Number")
        return
    }

    let newAvailableBalance = totalBalence - withdrowAmmount;

    document.getElementById("total-balence").innerText = newAvailableBalance;
})
