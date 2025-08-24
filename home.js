// ......... univarsal varialble ..........
const fixedaccountNumber = 12345678910;
const fixedPin = 2004;
const transactionsData = [];
// .......Reuseable function ........
// ............. get innet text ..........
function getInnerText(id) {
    const Text = parseInt(document.getElementById(id).innerText);
    return Text
}


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

// -------- get Btn toggle feature -----------
function btnToggle(id, section) {
    const Sections = document.getElementsByClassName(section);
    const btn = document.getElementsByClassName(id);
    for (const form of Sections) {
        form.style.display = "none";
    }
    document.getElementById(id).style.display = "block";

}

//------------------- log out btn even-----------
document.getElementById("log-out-btn").addEventListener("click", function () {
    window.location.href = "./index.html"
})

//  .................... all card  btn toggle  .................

// ------ add moeny card btn features -------
document.getElementById("add-money-card-btn").addEventListener("click", function (e) {
    e.preventDefault()
    btnToggle("add-money-section", "section")
})

// ------ cash out  card btn features-------
document.getElementById("cash-out-card-btn").addEventListener("click", function (e) {
    e.preventDefault()
    btnToggle("cash-out-section", "section")
})

// ------ transfor-card-btn features -------
document.getElementById("transfor-card-btn").addEventListener("click", function (e) {
    e.preventDefault()
    btnToggle("transfer-section", "section")

})

// ------ Get Bonus -card-btn features -------
document.getElementById("get-bonus-card-btn").addEventListener("click", function (e) {
    e.preventDefault()
    btnToggle("get-bonus-section", "section")

})

// ------ Pay Bill Card Btn  features -------
document.getElementById("pay-bill-card-btn").addEventListener("click", function (e) {
    e.preventDefault()
    btnToggle("pay-bil-section", "section")
})

// ------ Transactions Card Btn  features -------
document.getElementById("transactions-card-btn").addEventListener("click", function (e) {
    e.preventDefault()
    btnToggle("transactions-section", "section")
})

document.getElementById("transactions-card-btn").addEventListener(
    "click", function () {
        const transactionsContainer = document.getElementById("transaction-container");
        transactionsContainer.innerText = ""
        for (const data of transactionsData) {
            const div = document.createElement("div");
            div.innerHTML = `
            <div class="cards w-sm flex justify-between items-center my-3 mx-auto p-3 bg-white rounded-xl">
                <div class="flex gap-5">
                    <div class="bg-[#f4f4f4] rounded-full p-3"><img src="./assets/purse1.png" alt=""></div>
                    <div class="tittle">
                        <h1 class=" text-lg font-semibold">${data.name}</h1>
                        <p class="text-sm">${data.time}</p>
                    </div>
                </div>
                <div class="icons"><i class="fa-solid fa-ellipsis-vertical"></i></div>
            </div>
            `

            transactionsContainer.appendChild(div)
        }
        console.log(transactionsData)

    }
)

/**


// --------------leatest history -------------
function(){
        const leatestContainer = document.getElementById("leatest-container");
        leatestContainer.innerText =""
        for (const data of transactionsData) {
            const div = document.createElement("div");
            div.innerHTML = `
            <div class="cards w-sm flex justify-between items-center my-3 mx-auto p-3 bg-white rounded-xl">
                <div class="flex gap-5">
                    <div class="bg-[#f4f4f4] rounded-full p-3"><img src="./assets/purse1.png" alt=""></div>
                    <div class="tittle">
                        <h1 class=" text-lg font-semibold">${data.name}</h1>
                        <p class="text-sm">${data.time}</p>
                    </div>
                </div>
                <div class="icons"><i class="fa-solid fa-ellipsis-vertical"></i></div>
            </div>
            `

            leatestContainer.appendChild(div)
        }
        // console.log(leatestContainer)
}
 *
 */

// ....................... feature button .................
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

    const data = {
        name: "Add Money",
        time: new Date().toLocaleTimeString()
    }
    transactionsData.push(data)
    console.log(transactionsData)
})
// ............ withdrow btn features .........
document.getElementById("withdrow-money-btn").addEventListener("click", function (e) {
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

    const data = {
        name: "Cash Out",
        time: new Date().toLocaleTimeString()
    }
    transactionsData.push(data)
    console.log(transactionsData)
})

//----------- sent now Button --------
document.getElementById("sent-money-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const availableBalance = getInnerText("total-balance");
    const userNumber = getInputIntValue("user-number");
    const transferPin = getInputIntValue("transfer-pin");
    const transferAmmount = getInputIntValue("transfer-amount");
    // console.log(pinNumber,transferAmmount,userNumber)
    if (document.getElementById("user-number").value.length !== 11) {
        alert("Please input valid Agent Number")
        return
    }
    if (transferPin !== fixedPin) {
        alert("Please input valid Password")
        return
    }

    let newAvailableBalance = availableBalance - transferAmmount;
    document.getElementById("total-balance").innerText = newAvailableBalance;

    const transferTittle = String(document.getElementById("trasfer-tittle").innerText)
    console.log(transferTittle)

    const data = {
        name: transferTittle,
        time: new Date().toLocaleTimeString()
    }
    transactionsData.push(data)
    console.log(transactionsData)
})

//----------- pay-btn Button --------
document.getElementById("pay-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const availableBalance = getInnerText("total-balance");
    const billerNumber = getInputIntValue("biller-account-number");
    const payPin = getInputIntValue("pay-pin");
    const payAmmount = getInputIntValue("pay-amount");
    // console.log(payAmmount, payPin, billerNumber)
    if (document.getElementById("biller-account-number").value ==='number') {
        alert("Please input valid Agent Number")
        return
    }
    if (payPin !== fixedPin) {
        alert("Please input valid Password")
        return
    }

    let newAvailableBalance = availableBalance - payAmmount;
    document.getElementById("total-balance").innerText = newAvailableBalance;

    const transferTittle = String(document.getElementById("pay-tittle").innerText)
    console.log(transferTittle)

    const data = {
        name: transferTittle,
        time: new Date().toLocaleTimeString()
    }
    transactionsData.push(data)
    console.log(transactionsData)
})