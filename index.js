// Simulated "backend" data
const accounts = [
    { accountNumber: "123456789", pin: "1234", balance: 5000 },
    { accountNumber: "987654321", pin: "5678", balance: 15000 },
    { accountNumber: "456123789", pin: "2468", balance: 10000 }
];

// Function to find an account and check balance
function findAccount(accountNumber, pin) {
    return accounts.find(acc => acc.accountNumber === accountNumber && acc.pin === pin);
}

// Handle form submission
document.getElementById("balanceForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const accountNumber = document.getElementById("accountNumber").value;
    const pin = document.getElementById("pin").value;
    const result = document.getElementById("result");

    const account = findAccount(accountNumber, pin);

    if (account) {
        result.textContent = `Your balance is $${account.balance.toLocaleString()}`;
        result.classList.add("success");
        result.classList.remove("error");
    } else {
        result.textContent = "Invalid account number or PIN.";
        result.classList.add("error");
        result.classList.remove("success");
    }
});
