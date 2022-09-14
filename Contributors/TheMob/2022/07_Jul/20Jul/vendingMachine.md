How would you code the logic for a vending machine?

## functions

deliverItem(item)
dispenseChange(amount)
inputSelection(item)
	calls dispense


dispense(amount, selection)
	get selection from inventory (with key)
	if amount is sufficient to purchase item
		if inventory stock is available
			subtract item from inventory
			deliverItem(selection)
				if amount of item > amount inputted
					dispenseChange(difference)
					return true
	ELSE:
		if insufficient amount inputted
			sleep(10 seconds)
			dispenseChange(amount)
		throw error('no stock/ insufficient amount/ etc'), return false

changePrice()

addInventory(item)
removeInventory(item)

fraudDetection();

feature set
inventoryManagement

## variables (fields)
Inventory { 'a1': { name: <string>, price: <DollarAmount>, stock/quantity: <number>}}

Item: { name: <string>, price: <DollarAmount>, stock/quantity: <number>}

outputItem

outputChange
