import { Sequelize, DataTypes } from "sequelize"

const db = {
  NAME: "proiect_vue_2025",
  USERNAME: "proiect_vue_2025",
  PASSWORD: "proiect_vue_2025",

  options: {
    dialect: "mysql",
    timezone: "+00:00",
    host: "mysql.proiect_vue_2025",
    port: 3306,
    logging: false
  }
}

export const sequelize = new Sequelize(db.NAME, db.USERNAME, db.PASSWORD, db.options)


export const User = sequelize.define("User", {
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true }
})


export const Category = sequelize.define("Category", {
  name: { type: DataTypes.STRING, allowNull: false }
})


export const Instrument = sequelize.define("Instrument", {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING },
  price: { type: DataTypes.FLOAT, allowNull: false },
  image: { type: DataTypes.STRING }
})


export const Order = sequelize.define("Order", {
  status: { type: DataTypes.STRING, defaultValue: "pending" }
})


export const OrderItem = sequelize.define("OrderItem", {
  quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 }
})


export const Cart = sequelize.define("Cart", {
  sessionId: { type: DataTypes.STRING, allowNull: false }
})



// One-to-One
User.hasOne(Cart)
Cart.belongsTo(User)

// Many-to-One
User.hasMany(Order)
Order.belongsTo(User)

// One-to-Many
Order.hasMany(OrderItem)
OrderItem.belongsTo(Order)

// Many-to-One
Category.hasMany(Instrument)
Instrument.belongsTo(Category)