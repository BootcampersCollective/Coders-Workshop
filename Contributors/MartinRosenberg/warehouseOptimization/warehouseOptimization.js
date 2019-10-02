#!/usr/bin/env node

const OrderRepository = require('./orderRepository')

const main = () => {
  const orderRepo = new OrderRepository()
  const orders = orderRepo.getYesterdaysOrders()

  const combinedOrders = {}

  orders.forEach(({ orderLines }) => {
    orderLines.forEach(({ itemName, quantity }) => {
      if (combinedOrders[itemName]) {
        combinedOrders[itemName] += quantity
      } else {
        combinedOrders[itemName] = quantity
      }
    })
  })

  Object.entries(combinedOrders)
    .sort((a, b) => b[1] - a[1])
    .forEach(([k, v], i) => {
      console.log(`Shelf ${i + 1}:\t${k}`)
    })
}

