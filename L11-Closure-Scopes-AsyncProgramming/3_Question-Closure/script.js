function secureBankAccount() {
    let balance = 0;

    function deposit(val) {
        balance += val;
        return `After Deposit: ₹${balance}`
    }

    function withdrawl(val) {
        balance -= val;
        return `After Withdrawl: ₹${balance}`
    }

    function getBalance() {
        return balance;
    }

    return {
        deposit, withdrawl, getBalance
    }
}

let account = secureBankAccount();

// Balance: 0
console.log(account.deposit(100)); // Balance: 100
console.log(account.withdrawl(50)); // Balance: 50

console.log(account.getBalance()); // Output:50