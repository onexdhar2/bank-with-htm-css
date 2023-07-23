// amount
const totalDeposit = document.getElementById("totalDeposit")
const totalWidthdraw = document.getElementById("totalWidthdraw")
const availableBalance = document.getElementById("availableBalance")

// input group
const depositInput = document.getElementById("depositInput")
const widthdrawInput =  document.getElementById("widthdrawInput")



function deposit(){
    let depositInputValue = parseInt(depositInput.value) 

    let presentTotalDepositValue = parseInt(totalDeposit.innerText)

    let presentAvailableBalance = parseInt(availableBalance.innerText)

    totalDeposit.innerText = presentTotalDepositValue + depositInputValue

    availableBalance.innerText = presentAvailableBalance + depositInputValue 
}
    

function widthdraw(){
    let presentAvailableBalance = parseInt(availableBalance.innerText)

    let widthdrawInputValue = parseInt(widthdrawInput.value)

    let presentWidthdraw = parseInt(totalWidthdraw.innerText)

    // if...else

    if(presentAvailableBalance < widthdrawInputValue){
        alert("Deposit some Balance")
    }
    else{
        totalWidthdraw.innerText = presentWidthdraw + widthdrawInputValue
        availableBalance.innerText = presentAvailableBalance - widthdrawInputValue
    }

}