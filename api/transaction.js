import { sequelize, User, Order, OrderItem } from "./db.js"

async function createOrderWithItems() {
  const t = await sequelize.transaction()
  try {
  
    const user = await User.create({ username: "testuser", email: "test@example.com" }, { transaction: t })

 
    const order = await Order.create({ UserId: user.id }, { transaction: t })

    
    await OrderItem.create({ OrderId: order.id, quantity: 2 }, { transaction: t })
    await OrderItem.create({ OrderId: order.id, quantity: 1 }, { transaction: t })

    await t.commit()
    console.log("Tranzacția a fost finalizată cu succes!")
  } catch (err) {
    await t.rollback()
    console.error("Tranzacția a eșuat:", err)
  }
}

createOrderWithItems()