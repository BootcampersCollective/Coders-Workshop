
// create a cash register

// what are the inputs and outputs that are expected?
// should have methods add (makeSale), subtract(refund) abstract tax away (setTaxRate)
// total amount in register
// inventory, balance, log

class CashRegister {
	constructor(initialMoney = 100) {
        this.balance = initialMoney
        this.inventory ={}
        this.log=[]
		this.taxRate = 0
	}
	// set tax rate, initialize balance, get balance
	setTaxRate(rate) {
		this.taxRate = rate
	}
	
	initializeBalance(balance) {
		this.balance = balance
	}

	getBalance() {
		return this.balance
	}
	makeSale(name, price) {
        if(!this.inventory[name]){
            this.inventory[name]=1
        } else {
            this.inventory[name]++
        }
        price = price + (price*this.taxRate)
        this.balance += price
        let id = this.log.length
        this.log.push({ name, price, id })
	}

	refund(id) {
		// look up in log, get name, reduce inventory, get amount, do reverse of makeSale
        let { name, id: originalId, price } = this.log[id]
		this.balance -= price
		this.inventory[name]--
        let refundId = this.log.length
        this.log.push({ name, price, id: refundId, referenceId: originalId })
	}

}

const codersRegister = new CashRegister(1337);
codersRegister.setTaxRate(0.07)
codersRegister.makeSale('computer', 1000)
codersRegister.makeSale('tacos', 2000)
codersRegister.makeSale('lamp', 10)
codersRegister.refund(2)
