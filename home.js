
// .......Reuseable function ........
// ............. get innet text ..........
function getInnerText(id) {
    const Text = parseInt(document.getElementById(id).innerText);
    return Text
}
/**
 * // ............. set innet text ..........
function setInnerText(id var) {
    const setText = parseInt(document.getElementById(id).innerText) = var;
return setText
}
 */


// ------ get Input value -------
function getInputValue(id) {
    const Input = parseInt(document.getElementById(id).value);
    return Input
}

// ------ get Input integar value -------
function getInputIntValue(id) {
    const IntValue = parseInt(document.getElementById(id).value);
    return IntValue
}


// -------univarsal varialble ------
const fixedaccountNumber = 12345678910;
const fixedPin = 2004;


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

// ...... feature button ........
// -----add money button ---
document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const availableBalance = getInnerText("total-balance");
    const bankName = getInputValue("bank-name");
    const accountNumber = getInputIntValue("account-number");
    const addAmount = getInputIntValue("add-amount");
    const inputPin = getInputIntValue("pin");

    if (document.getElementById("account-number").value.length !== 11) {
        alert("Please Input 11 Digits Account Number")
        return
    }
    if (inputPin !== fixedPin) {
        alert("Please Input 4 Digits Pin")
        return
    }

    const newAvailableBalance = availableBalance + addAmount;
    document.getElementById("total-balance").innerText = newAvailableBalance
})
// ............ withdrow btn features .........
const withdrowBtn = document.getElementById("withdrow-money-btn")
withdrowBtn.addEventListener("click", function (e) {
    e.preventDefault()
    const availableBalance = getInnerText("total-balance");
    const agentNumber = getInputIntValue("agent-number");
    const pinNumber = getInputIntValue("pin-number");
    const withdrowAmmount = getInputIntValue("withdrow-amount");

    if (document.getElementById("agent-number").value.length !== 11) {
        alert("Please input valid Agent Number")
        return
    }
    if (pinNumber !== fixedPin) {
        alert("Please input valid Pin Number")
        return
    }

    let newAvailableBalance = availableBalance - withdrowAmmount;
    document.getElementById("total-balance").innerText = newAvailableBalance;
})
